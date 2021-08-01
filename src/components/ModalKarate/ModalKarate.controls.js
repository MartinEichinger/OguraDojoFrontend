import ModalClassStyle from './ModalKarate.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateDimensionsMK);
    document.getElementById('idModalKarate').addEventListener('shown.bs.modal', this.onShowModalMK);
    document.getElementById('idModalKarate').addEventListener('hidden.bs.modal', this.onHideModalMK);
    document.querySelector(`.TenguRyu`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Lehrer`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalKarate/compDidMount');
    //window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateDimensionsMK);
    document.getElementById('idModalKarate').removeEventListener('shown.bs.modal', this.onShowModalMK);
    document.getElementById('idModalKarate').removeEventListener('hidden.bs.modal', this.onHideModalMK);
    document.querySelector(`.TenguRyu`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Lehrer`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    document.querySelector('.modal').scrollTo(0, 4);
    if (this.debug) console.log('ModalKarate/onAnimationEnd', this.stats.animated);
  };

  onShowModalMK = () => {
    if (this.debug) console.log('ModalKarate/onShowModal');
    this.updateDimensionsMK();
    this.updateHxMK();
    this.stats.page = this.props.page;
    var page = this.stats.page;
    if (this.debug) console.log('ModalKarate/onShowModal', this.stats);
    if (page === 'Lehrer') {
      document.querySelector('.TenguRyu').classList.add('d-none');
      document.querySelector('.Lehrer').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.LehrerBtn`).classList.add('active');
      document.querySelector(`.TenguRyuBtn`).classList.remove('active');
    } else if (page === 'TenguRyu') {
      document.querySelector('.TenguRyu').classList.remove('d-none');
      document.querySelector('.Lehrer').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.LehrerBtn`).classList.remove('active');
      document.querySelector(`.TenguRyuBtn`).classList.add('active');
    }
  };

  onHideModalMK = () => {
    if (this.debug) console.log('ModalKarate/onHideModal');
    // reset single pages
    document.querySelector('.TenguRyu').classList.remove('slide-out-top');
    document.querySelector('.TenguRyu').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.remove('slide-out-top');
    document.querySelector('.Lehrer').classList.remove('slide-in-bottom');
    document.querySelector('.Lehrer').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'TenguRyu';

    // reset navigation
    document.querySelector('.TenguRyuBtn').classList.add('active');
    document.querySelector('.LehrerBtn').classList.remove('active');
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
    if (this.debug) console.log('ModalKarate/nextItem', button);
    // identify the page to be shown
    document.querySelector(`.${this.stats.page}`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}Btn`).classList.remove('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.${this.stats.page}`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.${this.stats.page}`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}Btn`).classList.add('active');
    document.querySelector(`.${this.stats.page}`).classList.add('slide-in-bottom');

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

  updateHxMK = () => {
    //return 0;
    // H1
    const h1 = 20 * (((this.state.width / 1340) * this.state.height) / 300) + 18 + 'px';
    this.style['& .modal-content']['& .modal-row']['& .content']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& h1'
    ].fontSize = h1;

    // H2
    const h2 = 8 * (((this.state.width / 1340) * this.state.height) / 300) + 12 + 'px';
    this.style['& .modal-content']['& .modal-row']['& .content']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& h2'
    ].fontSize = h2;

    // p
    const p = 6 * (((this.state.width / 1340) * this.state.height) / 300) + 14 + 'px';
    this.style['& .modal-content']['& .modal-row']['& .content']['& .TenguRyu, .Lehrer']['& .modal-col'][
      '& p'
    ].fontSize = p;

    if (this.debug) console.log('ModalKarate/updateHxMK: ', h1, h2, p);
  };

  updateDimensionsMK = () => {
    var w = document.querySelector('.modal-up').offsetWidth; //.scroll_
    var h = document.querySelector('.modal-up').offsetHeight; //.scroll_
    var top = document.querySelector('.modal-up').offsetTop;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
        top,
      });
    if (this.debug) console.log('ModalKarate/updateDimensionsMK', w, h);
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
