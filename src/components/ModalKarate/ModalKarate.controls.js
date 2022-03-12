import ModalClassStyle from './ModalKarate.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateDimensionsKT);
    document.getElementById('idModalKarate').addEventListener('shown.bs.modal', this.onShowModalKT);
    document.getElementById('idModalKarate').addEventListener('hidden.bs.modal', this.onHideModalKT);
    document.querySelector(`.csTenguRyuKT`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerKT`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensionsKT);
    document.getElementById('idModalKarate').removeEventListener('shown.bs.modal', this.onShowModalKT);
    document.getElementById('idModalKarate').removeEventListener('hidden.bs.modal', this.onHideModalKT);
    document.querySelector(`.csTenguRyuKT`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerKT`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    if (this.debug) console.log('ModalKarate/onAnimationEnd', this.stats.animated);
  };

  onShowModalKT = () => {
    if (this.debug) console.log('ModalKarate/onShowModal');
    this.stats.page = this.props.page;
    var page = this.stats.page;

    if (this.debug) console.log('ModalKarate/onShowModal', this.stats);

    if (page === 'Lehrer') {
      document.querySelector('.csTenguRyuKT').classList.add('d-none');
      document.querySelector('.csLehrerKT').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.LehrerBtnKT`).classList.add('active');
      document.querySelector(`.TenguRyuBtnKT`).classList.remove('active');
    } else if (page === 'TenguRyu') {
      document.querySelector('.csTenguRyuKT').classList.remove('d-none');
      document.querySelector('.csLehrerKT').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.LehrerBtnKT`).classList.remove('active');
      document.querySelector(`.TenguRyuBtnKT`).classList.add('active');
    }
  };

  onHideModalKT = () => {
    if (this.debug) console.log('ModalKarate/onHideModal');
    // reset single pages
    document.querySelector('.csTenguRyuKT').classList.remove('slide-out-top');
    document.querySelector('.csTenguRyuKT').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerKT').classList.remove('slide-out-top');
    document.querySelector('.csLehrerKT').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerKT').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'TenguRyu';

    // reset navigation
    document.querySelector('.TenguRyuBtnKT').classList.add('active');
    document.querySelector('.LehrerBtnKT').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalKarate/clickUpDown', dir);

    // find index of current page
    var idx = this.stats.navItems.findIndex((item) => {
      return item === this.stats.page;
    });

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'down') {
      this.nextItem(this.stats.navItems[idx + 1]);
    } else if (idx === 0 && dir === 'up') {
      this.stats.animated = 0;
      return 0;
    } else if (idx === this.stats.navItems.length - 1 && dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.navItems[idx - 1]);
    } else if (idx === this.stats.navItems.length - 1 && dir === 'down') {
      this.stats.animated = 0;
      return 0;
    } else if (dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.navItems[idx - 1]);
    } else if (dir === 'down') {
      this.stats.animated = 1;
      this.nextItem(this.stats.navItems[idx + 1]);
    }
  };

  nextItem = (button) => {
    if (this.debug) console.log('ModalKarate/nextItem', button, this.stats.page);
    // identify the page to be shown
    document.querySelector(`.cs${this.stats.page}KT`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}BtnKT`).classList.remove('active');
    document.querySelector(`.cs${this.stats.page}KT`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.cs${this.stats.page}KT`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.cs${this.stats.page}KT`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}BtnKT`).classList.add('active');
    document.querySelector(`.cs${this.stats.page}KT`).classList.add('slide-in-bottom');

    // check if end of list start or end -> in case reset arrow from active
    var idx = this.stats.navItems.findIndex((item) => {
      return item === this.stats.page;
    });

    if (idx === 0) {
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
    } else if (idx === this.stats.navItems.length - 1) {
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
    } else {
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
    }
  };

  clickLeftRight = (dir) => {
    // find index of current page
    var idx = this.stats.allSubPages.findIndex((item) => {
      return item === this.stats.subPage;
    });
    if (this.debug) console.log('ModalKarate/clickLeftRight', dir, idx);

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'left') {
      this.nextSubItem(this.stats.allSubPages[this.stats.navItems.length - 1]);
    } else if (idx === this.stats.allSubPages.length - 1 && dir === 'right') {
      this.nextSubItem(this.stats.allSubPages[0]);
    } else if (dir === 'left') {
      this.nextSubItem(this.stats.allSubPages[idx - 1]);
    } else if (dir === 'right') {
      this.nextSubItem(this.stats.allSubPages[idx + 1]);
    }
  };

  nextSubItem = (button) => {
    if (this.debug) console.log('ModalKarate/nextSubItem', button, this.stats.subPage);

    // identify the page to be shown
    document.querySelector(`.${this.stats.subPage}`).classList.remove('slide-in-right');
    document.querySelector(`.${this.stats.subPage}`).classList.add('slide-out-left');

    this.stats.subPage = button;

    document.querySelector(`.${this.stats.subPage}`).classList.remove('d-out');
    document.querySelector(`.${this.stats.subPage}`).classList.remove('slide-out-left');
    document.querySelector(`.${this.stats.subPage}`).classList.add('slide-in-right');
  };
}

export default ModalClassBasis;
