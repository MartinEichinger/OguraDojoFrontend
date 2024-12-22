import { IStats } from '../components/ModalPanziGong/ModalPanziGong';

const debug = true;

export const clickUpDown = (dir: string, stats: IStats, apdx: string) => {
  // find index of current page
  var idx = stats.navItems.findIndex((item: string) => {
    return item === stats.page;
  });

  // trigger nextItem with requested page
  if (idx === 0 && dir === 'down') {
    nextItem(stats.navItems[idx + 1], stats, apdx);
  } else if (idx === 0 && dir === 'up') {
    stats.animated = 0;
    return 0;
  } else if (idx === stats.navItems.length - 1 && dir === 'up') {
    stats.animated = 1;
    nextItem(stats.navItems[idx - 1], stats, apdx);
  } else if (idx === stats.navItems.length - 1 && dir === 'down') {
    stats.animated = 0;
    return 0;
  } else if (dir === 'up') {
    stats.animated = 1;
    nextItem(stats.navItems[idx - 1], stats, apdx);
  } else if (dir === 'down') {
    stats.animated = 1;
    nextItem(stats.navItems[idx + 1], stats, apdx);
  }
};

export const nextItem = (button: string, stats: IStats, apdx: string) => {
  if (debug)
    console.log(
      'navigation-helper/nextItem',
      button,
      stats,
      apdx,
      document.querySelector(`.cs${stats.page}${apdx}`),
      document.querySelector(`.${stats.page}Btn${apdx}`)
    );
  // identify the page to be shown
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('slide-in-bottom')!;
  document.querySelector(`.${stats.page}Btn${apdx}`)!.classList.remove('active');
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.add('slide-out-top');

  stats.page = button;

  try {
    document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('d-none');
  } catch (e) {}

  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.remove('slide-out-top');
  document.querySelector(`.${stats.page}Btn${apdx}`)!.classList.add('active');
  document.querySelector(`.cs${stats.page}${apdx}`)!.classList.add('slide-in-bottom');

  // check if end of list start or end -> in case reset arrow from active
  var idx = stats.navItems.findIndex((item: string) => {
    return item === stats.page;
  });

  if (idx === 0) {
    document.querySelector(`.upArrow` + apdx)!.classList.remove('active');
    document.querySelector(`.downArrow` + apdx)!.classList.add('active');
  } else if (idx === stats.navItems.length - 1) {
    document.querySelector(`.upArrow` + apdx)!.classList.add('active');
    document.querySelector(`.downArrow` + apdx)!.classList.remove('active');
  } else {
    document.querySelector(`.upArrow` + apdx)!.classList.add('active');
    document.querySelector(`.downArrow` + apdx)!.classList.add('active');
  }
};

export const clickLeftRight = (dir: string, stats: IStats) => {
  // find index of current page
  var idx = stats.allSubPages.findIndex((item: string) => {
    return item === stats.subPage;
  });
  if (debug) console.log('ModalKarate/clickLeftRight', dir, idx);

  // trigger nextItem with requested page
  if (idx === 0 && dir === 'left') {
    nextSubItem(stats.allSubPages[stats.navItems.length - 1], stats);
  } else if (idx === stats.allSubPages.length - 1 && dir === 'right') {
    nextSubItem(stats.allSubPages[0], stats);
  } else if (dir === 'left') {
    nextSubItem(stats.allSubPages[idx - 1], stats);
  } else if (dir === 'right') {
    nextSubItem(stats.allSubPages[idx + 1], stats);
  }
};

const nextSubItem = (button: string, stats: IStats) => {
  if (debug) console.log('navigation-helper/nextSubItem', button);

  // identify the page to be shown
  document.querySelector(`.${stats.subPage}`)!.classList.remove('slide-in-right');
  document.querySelector(`.${stats.subPage}`)!.classList.add('slide-out-left');

  stats.subPage = button;

  document.querySelector(`.${stats.subPage}`)!.classList.remove('d-out');
  document.querySelector(`.${stats.subPage}`)!.classList.remove('slide-out-left');
  document.querySelector(`.${stats.subPage}`)!.classList.add('slide-in-right');
};

export const onMount = ({ stats, apdx, select }: { stats: IStats; apdx: string; select: Function }) => {
  if (debug) console.log('onMount:', stats, apdx);
  const modal = document.getElementById(`idModal${stats.modal}`);
  if (modal) modal.addEventListener('shown.bs.modal', (e) => onShowModal(e, stats, apdx));
  if (modal) modal.addEventListener('hidden.bs.modal', (e) => onHideModal(e, stats, apdx, select));
};

const onShowModal = (e: Event, stats: IStats, apdx: string) => {
  if (debug) console.log('navigation-helper/onShowModal', stats, apdx, typeof e);

  // eslint-disable-next-line
  stats.navItems.map((navItem: string, navIdx: number) => {
    var item = document.querySelector(`.cs${stats.navItems[navIdx]}${apdx}`);
    var itemBtn = document.querySelector(`.${stats.navItems[navIdx]}Btn${apdx}`);
    var upArrow = document.querySelector(`.upArrow` + apdx);
    var downArrow = document.querySelector(`.downArrow` + apdx);

    // set single pages
    if (navItem === stats.page) {
      if (item) item.classList.remove('d-none');
      if (itemBtn) itemBtn.classList.add('active');
    } else {
      if (item) item.classList.add('d-none');
      if (itemBtn) itemBtn.classList.remove('active');
    }

    // set arrows
    if (navItem === stats.page) {
      if (navIdx === 0) {
        if (upArrow) upArrow.classList.remove('active');
        if (downArrow) downArrow.classList.add('active');
      } else if (navIdx === stats.navItems.length - 1) {
        if (upArrow) upArrow.classList.add('active');
        if (downArrow) downArrow.classList.remove('active');
      } else {
        if (upArrow) upArrow.classList.add('active');
        if (downArrow) downArrow.classList.add('active');
      }
    }
  });
};

const onHideModal = (e: Event, stats: IStats, apdx: string, select: Function) => {
  if (debug) console.log('navigation-helper/onHideModal');

  // reset single pages
  // eslint-disable-next-line
  stats.navItems.map((navItem: string, navIdx: number) => {
    var item = document.querySelector(`.cs${stats.navItems[navIdx]}${apdx}`);
    var itemBtn = document.querySelector(`.${stats.navItems[navIdx]}Btn${apdx}`);

    if (navItem === stats.page) {
      if (item) {
        item.classList.remove('slide-out-top');
        item.classList.remove('slide-in-bottom');
      }
      if (itemBtn) itemBtn?.classList.add('active');
    } else {
      if (item) {
        item.classList.remove('slide-out-top');
        item.classList.remove('slide-in-bottom');
        item.classList.add('d-none');
        itemBtn?.classList.remove('active');
      }
    }
  });

  // reset stored value for active page
  if (debug) console.log('onhide: ', `page${stats.modal}`, `${stats.navItems[0]}`);
  select(`page${stats.modal}`, `${stats.navItems[0]}`);
};
