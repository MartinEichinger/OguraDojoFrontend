import ModalClassStyle from './ModalQiGong.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalQiGong/compDidMount');
    //window.addEventListener('scroll', this.handleScroll);
    //window.addEventListener('resize', this.updateDimensionsPG);
    document.getElementById('idModalQiGong').addEventListener('shown.bs.modal', this.onShowModalQG);
    document.getElementById('idModalQiGong').addEventListener('hidden.bs.modal', this.onHideModalQG);
    document.querySelector(`.csQiGongQG`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerQG`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csFormQG`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalQiGong/compDidMount');
    //window.removeEventListener('scroll', this.handleScroll);
    document.getElementById('idModalQiGong').removeEventListener('shown.bs.modal', this.onShowModalQG);
    document.getElementById('idModalQiGong').removeEventListener('hidden.bs.modal', this.onHideModalQG);
    document.querySelector(`.csQiGongQG`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csLehrerQG`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csFormQG`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    if (this.debug) console.log('ModalQiGong/onAnimationEnd', this.stats.animated);
  };

  onShowModalQG = () => {
    if (this.debug) console.log('ModalQiGong/onShowModal');
    this.stats.page = this.props.page;
    var page = this.stats.page;

    if (this.debug) console.log('ModalQiGong/onShowModal', this.stats);

    if (page === 'Lehrer') {
      document.querySelector('.csQiGongQG').classList.add('d-none');
      document.querySelector('.csLehrerQG').classList.remove('d-none');
      document.querySelector('.csFormQG').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.QiGongBtnQG`).classList.remove('active');
      document.querySelector(`.LehrerBtnQG`).classList.add('active');
      document.querySelector(`.FormBtnQG`).classList.remove('active');
    } else if (page === 'QiGong') {
      document.querySelector('.csQiGongQG').classList.remove('d-none');
      document.querySelector('.csLehrerQG').classList.add('d-none');
      document.querySelector('.csFormQG').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.LehrerBtnQG`).classList.remove('active');
      document.querySelector(`.QiGongBtnQG`).classList.add('active');
      document.querySelector(`.FormBtnQG`).classList.remove('active');
    } else if (page === 'Form') {
      document.querySelector('.csQiGongQG').classList.add('d-none');
      document.querySelector('.csLehrerQG').classList.add('d-none');
      document.querySelector('.csFormQG').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.LehrerBtnQG`).classList.remove('active');
      document.querySelector(`.QiGongBtnQG`).classList.remove('active');
      document.querySelector(`.FormBtnQG`).classList.add('active');
    }
  };

  onHideModalQG = () => {
    if (this.debug) console.log('ModalQiGong/onHideModal');
    // reset single pages
    document.querySelector('.csQiGongQG').classList.remove('slide-out-top');
    document.querySelector('.csQiGongQG').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerQG').classList.remove('slide-out-top');
    document.querySelector('.csLehrerQG').classList.remove('slide-in-bottom');
    document.querySelector('.csLehrerQG').classList.add('d-none');
    document.querySelector('.csFormQG').classList.remove('slide-out-top');
    document.querySelector('.csFormQG').classList.remove('slide-in-bottom');
    document.querySelector('.csFormQG').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'QiGong';

    // reset navigation
    document.querySelector('.QiGongBtnQG').classList.add('active');
    document.querySelector('.LehrerBtnQG').classList.remove('active');
    document.querySelector('.FormBtnQG').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalQiGong/clickUpDown', dir);

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
    if (this.debug) console.log('ModalQiGong/nextItem', button, this.stats.page);
    // identify the page to be shown
    document.querySelector(`.cs${this.stats.page}QG`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}BtnQG`).classList.remove('active');
    document.querySelector(`.cs${this.stats.page}QG`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.cs${this.stats.page}QG`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.cs${this.stats.page}QG`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}BtnQG`).classList.add('active');
    document.querySelector(`.cs${this.stats.page}QG`).classList.add('slide-in-bottom');

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
    if (this.debug) console.log('ModalQiGong/clickLeftRight', dir, idx);

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
    if (this.debug) console.log('ModalQiGong/nextSubItem', button, this.stats.subPage);

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
