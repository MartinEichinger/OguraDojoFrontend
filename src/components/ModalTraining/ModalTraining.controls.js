import ModalClassStyle from './ModalTraining.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalTraining/compDidMount');

    window.addEventListener('resize', this.updateDimensionsMT);
    document.getElementById('idModalTraining').addEventListener('shown.bs.modal', this.onShowModalMT);
    document.getElementById('idModalTraining').addEventListener('hidden.bs.modal', this.onHideModalMT);
    document.querySelector(`.Training`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Wir`).addEventListener('animationend', this.onAnimationEnd);
    this.updateDimensionsMT();
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalTraining/componentWillUnmount');

    window.removeEventListener('resize', this.updateDimensionsMT);
    document.getElementById('idModalTraining').removeEventListener('shown.bs.modal', this.onShowModalMT);
    document
      .getElementById('idModalTraining')
      .removeEventListener('hidden.bs.modal', this.onHideModalMT);
    document.querySelector(`.Training`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.Wir`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    if (this.debug) console.log('ModalTraining/onAnimationEnd', this.stats.animated);
  };

  onShowModalMT = () => {
    if (this.debug) console.log('ModalTraining/onShowModal');
    //this.updateDimensionsMT();
    //this.updateHxMT();
    this.stats.page = this.props.page;
    var page = this.stats.page;
    if (this.debug) console.log('ModalTraining/onShowModalMT', this.stats);
    if (page === 'Wir') {
      document.querySelector('.Training').classList.add('d-none');
      document.querySelector('.Wir').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.WirBtn`).classList.add('active');
      document.querySelector(`.TrainingBtn`).classList.remove('active');
    } else if (page === 'Training') {
      document.querySelector('.Training').classList.remove('d-none');
      document.querySelector('.Wir').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.WirBtn`).classList.remove('active');
      document.querySelector(`.TrainingBtn`).classList.add('active');
    }
  };

  onHideModalMT = () => {
    if (this.debug) console.log('ModalTraining/onHideModalMT');
    // reset single pages
    document.querySelector('.Training').classList.remove('slide-out-top');
    document.querySelector('.Training').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.remove('slide-out-top');
    document.querySelector('.Wir').classList.remove('slide-in-bottom');
    document.querySelector('.Wir').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'Training';

    // reset navigation
    document.querySelector('.TrainingBtn').classList.add('active');
    document.querySelector('.WirBtn').classList.remove('active');
  };

  clickUpDown = (dir) => {
    if (this.debug) console.log('ModalTraining/clickUpDown', dir);

    // find index of current page
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    // trigger nextItem with requested page
    if (idx === 0 && dir === 'down') {
      this.nextItem(this.stats.allPages[idx + 1]);
    } else if (idx === 0 && dir === 'up') {
      this.stats.animated = 0;
      return 0;
    } else if (idx === this.stats.allPages.length - 1 && dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (idx === this.stats.allPages.length - 1 && dir === 'down') {
      this.stats.animated = 0;
      return 0;
    } else if (dir === 'up') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx - 1]);
    } else if (dir === 'down') {
      this.stats.animated = 1;
      this.nextItem(this.stats.allPages[idx + 1]);
    }
  };

  nextItem = (button) => {
    if (this.debug) console.log('ModalTraining/nextItem', button);
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
    var idx = this.stats.allPages.findIndex((item) => {
      return item === this.stats.page;
    });

    if (idx === 0) {
      document.querySelector(`.upArrow${this.apdx}`).classList.remove('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.add('active');
    } else if (idx === this.stats.allPages.length - 1) {
      document.querySelector(`.upArrow${this.apdx}`).classList.add('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.remove('active');
    } else {
      document.querySelector(`.upArrow${this.apdx}`).classList.add('active');
      document.querySelector(`.downArrow${this.apdx}`).classList.add('active');
    }
  };

  updateHxMT = () => {
    //this.updateDimensionsMT();
    if (this.debug) console.log('ModalTraining/updateHxMT: ', this.resize);
    // H1
    //this.style['& .modal-content']['& .modal-row']['& .content']['& .Training, .Wir']['& .modal-col'][
    //  '& h1'
    //].fontSize = 120 * (this.state.width / 1440) * (this.state.height / 1200) + 18 + 'px';

    // H2
    this.style['& .modal-content']['& .modal-row']['& .content']['& .Training, .Wir']['& .modal-col'][
      '& h2'
    ].fontSize = 8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';

    // p
    //this.style['& .modal-content']['& .modal-row']['& .content']['& .Training, .Wir']['& .modal-col'][
    //  '& p'
    //].fontSize = 8 * (this.state.width / 1440) * (this.state.height / 1200) + 12 + 'px';
  };

  updateDimensionsMT = () => {
    var w = document.querySelector('.Training')?.offsetWidth;
    var h = document.querySelector('.Training')?.offsetHeight;
    if (w !== 0)
      this.setState({
        width: w,
        height: h,
      });
    if (this.debug) console.log('ModalTraining/updateDimensionsMT', w, h, this.resize);
  };
}

export default ModalClassBasis;
