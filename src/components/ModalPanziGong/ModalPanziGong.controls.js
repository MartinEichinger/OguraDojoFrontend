import ModalClassStyle from './ModalPanziGong.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalPanziGong/compDidMount');
    //window.addEventListener('scroll', this.handleScroll);
    //window.addEventListener('resize', this.updateDimensionsPG);
    document.getElementById('idModalPanziGong').addEventListener('shown.bs.modal', this.onShowModalPG);
    document.getElementById('idModalPanziGong').addEventListener('hidden.bs.modal', this.onHideModalPG);
    document.querySelector(`.csPanziGongPG`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerPG`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csFormPG`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalPanziGong/compDidMount');
    //window.removeEventListener('scroll', this.handleScroll);
    document
      .getElementById('idModalPanziGong')
      .removeEventListener('shown.bs.modal', this.onShowModalPG);
    document
      .getElementById('idModalPanziGong')
      .removeEventListener('hidden.bs.modal', this.onHideModalPG);
    document.querySelector(`.csPanziGongPG`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerPG`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csFormPG`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    if (this.debug) console.log('ModalPanziGong/onAnimationEnd', this.stats.animated);
  };

  onShowModalPG = () => {
    if (this.debug) console.log('ModalPanziGong/onShowModal');
    this.stats.page = this.props.page;
    var page = this.stats.page;

    if (this.debug) console.log('ModalPanziGong/onShowModal', this.stats);

    if (page === 'Lehrer') {
      document.querySelector('.csPanziGongPG').classList.add('d-none');
      document.querySelector('.csLehrerPG').classList.remove('d-none');
      document.querySelector('.csFormPG').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.PanziGongBtnPG`).classList.remove('active');
      document.querySelector(`.LehrerBtnPG`).classList.add('active');
      document.querySelector(`.FormBtnPG`).classList.remove('active');
    } else if (page === 'PanziGong') {
      document.querySelector('.csPanziGongPG').classList.remove('d-none');
      document.querySelector('.csLehrerPG').classList.add('d-none');
      document.querySelector('.csFormPG').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.LehrerBtnPG`).classList.remove('active');
      document.querySelector(`.PanziGongBtnPG`).classList.add('active');
      document.querySelector(`.FormBtnPG`).classList.remove('active');
    } else if (page === 'Form') {
      document.querySelector('.csPanziGongPG').classList.add('d-none');
      document.querySelector('.csLehrerPG').classList.add('d-none');
      document.querySelector('.csFormPG').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.LehrerBtnPG`).classList.remove('active');
      document.querySelector(`.PanziGongBtnPG`).classList.remove('active');
      document.querySelector(`.FormBtnPG`).classList.add('active');
    }
  };

  onHideModalPG = () => {
    if (this.debug) console.log('ModalPanziGong/onHideModal');
    // reset single pages
    document.querySelector('.csPanziGongPG').classList.remove('slide-out-top');
    document.querySelector('.csPanziGongPG').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerPG').classList.remove('slide-out-top');
    document.querySelector('.csLehrerPG').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerPG').classList.add('d-none');
    document.querySelector('.csFormPG').classList.remove('slide-out-top');
    document.querySelector('.csFormPG').classList.remove('slide-in-bottom');
    document.querySelector('.csFormPG').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'PanziGong';

    // reset navigation
    document.querySelector('.PanziGongBtnPG').classList.add('active');
    document.querySelector('.LehrerBtnPG').classList.remove('active');
    document.querySelector('.FormBtnPG').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalPanziGong/clickUpDown', dir);

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
    if (this.debug) console.log('ModalPanziGong/nextItem', button);
    // identify the page to be shown
    document.querySelector(`.cs${this.stats.page}PG`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}BtnPG`).classList.remove('active');
    document.querySelector(`.cs${this.stats.page}PG`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.cs${this.stats.page}PG`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.cs${this.stats.page}PG`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}BtnPG`).classList.add('active');
    document.querySelector(`.cs${this.stats.page}PG`).classList.add('slide-in-bottom');

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
    if (this.debug) console.log('ModalPanziGong/clickLeftRight', dir, idx);

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
    if (this.debug) console.log('ModalPanziGong/nextSubItem', button, this.stats.subPage);

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

/* 
const h1 = 20 * (((this.state.width / 1340) * this.state.height) / 300) + 18 + 'px';
this.style['& .modal-content']['& .modal-row']['& .content']['& .PanziGong, .Lehrer2, .Form'][
  '& .modal-col'
]['& h1'].fontSize = h1;

var w = document.querySelector('.watch-pg').offsetWidth;
*/
