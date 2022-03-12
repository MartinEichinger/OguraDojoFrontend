import ModalClassStyle from './ModalTraining.style';

class ModalClassBasis extends ModalClassStyle {
  componentDidMount() {
    if (this.debug) console.log('ModalTraining/compDidMount');

    window.addEventListener('resize', this.updateDimensionsMT);
    document.getElementById('idModalTraining').addEventListener('shown.bs.modal', this.onShowModalMT);
    document.getElementById('idModalTraining').addEventListener('hidden.bs.modal', this.onHideModalMT);
    document.querySelector(`.csTrainingTR`).addEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csWirTR`).addEventListener('animationend', this.onAnimationEnd);
  }

  componentWillUnmount() {
    if (this.debug) console.log('ModalTraining/componentWillUnmount');

    window.removeEventListener('resize', this.updateDimensionsMT);
    document.getElementById('idModalTraining').removeEventListener('shown.bs.modal', this.onShowModalMT);
    document
      .getElementById('idModalTraining')
      .removeEventListener('hidden.bs.modal', this.onHideModalMT);
    document.querySelector(`.csTrainingTR`).removeEventListener('animationend', this.onAnimationEnd);
    document.querySelector(`.csWirTR`).removeEventListener('animationend', this.onAnimationEnd);
  }

  onAnimationEnd = () => {
    this.stats.animated = 0;
    if (this.debug) console.log('ModalTraining/onAnimationEnd', this.stats.animated);
  };

  onShowModalMT = () => {
    if (this.debug) console.log('ModalTraining/onShowModal');
    this.stats.page = this.props.page;
    var page = this.stats.page;
    if (this.debug) console.log('ModalTraining/onShowModalMT', this.stats);
    if (page === 'Wir') {
      document.querySelector('.csTrainingTR').classList.add('d-none');
      document.querySelector('.csWirTR').classList.remove('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.add('active');
      document.querySelector(`.downArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.WirBtnTR`).classList.add('active');
      document.querySelector(`.TrainingBtnTR`).classList.remove('active');
    } else if (page === 'Training') {
      document.querySelector('.csTrainingTR').classList.remove('d-none');
      document.querySelector('.csWirTR').classList.add('d-none');
      document.querySelector(`.upArrow` + this.apdx).classList.remove('active');
      document.querySelector(`.downArrow` + this.apdx).classList.add('active');
      document.querySelector(`.WirBtnTR`).classList.remove('active');
      document.querySelector(`.TrainingBtnTR`).classList.add('active');
    }
  };

  onHideModalMT = () => {
    if (this.debug) console.log('ModalTraining/onHideModalMT');
    // reset single pages
    document.querySelector('.csTrainingTR').classList.remove('slide-out-top');
    document.querySelector('.csTrainingTR').classList.remove('slide-in-bottom');
    document.querySelector('.csWirTR').classList.remove('slide-out-top');
    document.querySelector('.csWirTR').classList.remove('slide-in-bottom');
    document.querySelector('.csWirTR').classList.add('d-none');

    // reset stored value for active page
    this.stats.page = 'Training';

    // reset navigation
    document.querySelector('.TrainingBtnTR').classList.add('active');
    document.querySelector('.WirBtnTR').classList.remove('active');
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
    document.querySelector(`.cs${this.stats.page}TR`).classList.remove('slide-in-bottom');
    document.querySelector(`.${this.stats.page}BtnTR`).classList.remove('active');
    document.querySelector(`.cs${this.stats.page}TR`).classList.add('slide-out-top');

    this.stats.page = button;

    try {
      document.querySelector(`.cs${this.stats.page}TR`).classList.remove('d-none');
    } catch (e) {}

    document.querySelector(`.cs${this.stats.page}TR`).classList.remove('slide-out-top');
    document.querySelector(`.${this.stats.page}BtnTR`).classList.add('active');
    document.querySelector(`.cs${this.stats.page}TR`).classList.add('slide-in-bottom');

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
}

export default ModalClassBasis;
