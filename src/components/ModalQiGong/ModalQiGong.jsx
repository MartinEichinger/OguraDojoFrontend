/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalClassBasis from './ModalQiGong.controls';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import CompTxtStrip2Txt from '../CompTxtStripTxt/CompTxtStrip2Txt';
import CompTxtStripVids from '../CompTxtStripTxt/CompTxtStripVids';
import '../animation.css';

class ModalQiGong extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1340,
      height: 300,
    };

    this.debug = true;
    this.apdx = 'QiGong';

    this.form = React.createRef();
    this.stats = {
      navItems: ['QiGong', 'Lehrer', 'Form'],
      page: this.props.page,
      allSubPages: [],
      subPage: '',
      animated: 0,
      upDown: 1,
    };

    this.contentPage1 = [
      {
        contentNav: false,
        customClass: '',
        titleNo1_L1: 'Qigong',
        titleNo1_L2: '„Wenn man leben will, muss man sich auch bewegen“',
        heightContent1: 'h22',
        contentNo1:
          'Jeder Mensch lebt nur einmal. Unsere Lebensdauer ist begrenzt, deshalb sollten wir das Leben schätzen. Nicht nur die Bewegung ist ein untrennbarer Teil des Lebens, sondern die Gesundheit überhaupt ist das Fundament unseres Lebens. Ohne Bewegung könnten wir nur schwer existieren und ohne Gesundheit hätten wir keine Lebensqualität. Wollen wir das Leben schätzen, dann sind Bewegung und Gesundheit der Anfang dazu. Gesundheit ist die Grundlage des Lebens. Die Menschen sollen frei und glücklich leben, ihrem Leben Sinn und Wert verleihen. Um ihren Beitrag zu ihrer Familie und zur Gesellschaft leisten zu können, müssen die Menschen gesund bleiben. Erst unter dieser Voraussetzung lassen sich die täglichen Bestrebungen umsetzen. Die Möglichkeiten, eine gute Gesundheit zu erlangen und zu erhalten, sind vielfältig. Jeder hat eigene Wege, eigene Hobbys und eigene Methoden, um fit zu bleiben. Aber nur der Weg, der für den eigenen Körper und die eigene Kondition geeignet ist, ist auch der Beste.',
        pics: ['num1', 'num2', 'num3'],
        vids: [],
        titleNo2_L2: 'Jeder Mensch muss seine eigene sportliche Aktivität finden',
        heightContent2: 'h22',
        contentNo2: [
          'Die Geschwindigkeit, Intensität, Stärke und der Umfang der sportlichen Aktivität können sehr unterschiedlich sein. Jeder hat seine eigenen Vorstellungen und Ziele, die er durch körperliches Training erreichen will. Die Menschen wollen durch Bewegung Krankheiten vorbeugen und ihre Gesundheit erhalten. Ziel ist es, gesund zu bleiben und lange zu leben. Je nach Alter, Geschlecht, Interessen sowie unterschiedlichen Arbeits- und Lebenswelten variiert auch die Art und Weise, wie und wieviel man sich bewegt. Wer seine eigenen Grenzen nicht kennt, treibt entweder zu wenig Sport und ist unterfordert oder er überfordert seine Grenzen und treibt mehr Sport als ihm gut tut. Zu wenig körperliche Anstrengung bringt für den Körper wenig, zu viel schädigt den Körper. Nur wenn man sich selbst und seine Belastungsgrenzen gut kennt und sich auf die passende Art und Weise bewegt, ist es gut für die Gesundheit. Aus der Perspektive betrachtet, gesund und fit zu sein und ein langes Leben zu haben, sind „weiche“ Sportarten besser als „harte“ Sportarten. „Weiche“ Sportarten sind zum Beispiel Schwimmen, Laufen, Fahrrad fahren, Bergwandern, TaiJi und QiGong. Zu den „harten“ Sportarten zählen unter anderem Fußball, Gewichtheben, Fechten und Boxen. Sie haben oft Wettkampfcharakter und zielen auf körperliche Höchstleistungen ab. Bei den „weichen“ Sportarten stehen Ausdauer, Biegsamkeit und Entspannung im Vordergrund. Bewegung stärkt das YangQi und verbraucht es gleichzeitig. Ideal ist, durch Sport mehr YangQi zu gewinnen als zu verbrauchen.',
        ],
      },
    ];

    this.contentPage2 = [
      {
        contentNav: false,
        customClass: '',
        titleNo1_L1: 'Ding HongYu',
        classTitleNo1_L1: 'green center',
        heightContent1: 'h26',
        contentNo1:
          'Ding HongYu (* 1932) war als TaiJi Quan- und QiGong-Lehrer an den Universitäten von SuZhou und NanJing V.R. China tätig. Seit Ende der 50er Jahre beschäftigte er sich mit TaiJi Quan und QiGong. Er arbeitete in verschiedenen Einrichtungen zur Erforschung der Effekte von TaiJi Quan und QiGong. In Deutschland wurde er unter anderem durch die Ausstrahlung des Lehrprogramms "DaYan ("Wildgans") QiGong", dieser Film wurde vom Südwestfunk (Baden-Baden) ausgestrahlt und dem QiGong-Poster der AOK, für das er "Modell" stand, bekannt. Des Weiteren war er an der Veröffentlichung von verschiedenen Fachbüchern der Carl von Ossietzky Universität Oldenburg beteiligt. Ebenso prägte er das Verständnis für Traditionelle Chinesische Medizin (TCM) und QiGong der Vereinsmitglieder der Deutschen QiGong Gesellschaft e. V. (DQGG) die 1990 gegründet wurde. Während seiner Aufenthalte in Deutschland, von 1988 bis 2007, war er in der noch jungen QiGong-Entwicklung in Deutschland an der Ausbildung vieler QiGong-Schüler beteiligt. Bei einem Seminar sagte er einmal "Man sollte nicht von Medikamenten oder vom Arzt leben" mit Blick auf TaiJi und QiGong. Beide Methoden helfen dabei, die eigene Lebensenergie und die innere Ausgeglichenheit zu fördern.',
        pics: ['num4', 'num5', 'num6'],
        vids: [],
        heightContent2: 'h31',
        contentNo2: [
          '1957 erwarb Ding HongYu einen Abschluss in Sportwissenschaft an der SuZhou Universität. 1957 - 1993 war er an der NanJing-Universität tätig. Er unterrichtete Sportwissenschaft und Sporttraining und arbeitete im Bereich Sportforschung (1964 ein Jahr Weiterbildung mit anderen chinesischen Sportdozenten an der BeiJing Sportuniversität). Während der langjährigen Studien in den Sporttheorien und seiner Lehrerpraxis hat Ding HongYu Sport mit der Chinesischen Medizin kombiniert und für die Vorbeugung gegen Krankheiten und zur Erhaltung der Gesundheit die theoretischen Ansatzpunkte geliefert. Seit 1988 war er 14 Mal in Deutschland und wurde von der Universität Oldenburg, dem Deutschen QiGong Verein, Mettnau Kur, Tus Traunreut usw. eingeladen und hat verschiedene Kurse und Seminare über QiGong und TaiJi Quan abgehalten. Er hat dadurch zum Kulturaustausch zwischen Ost und West beigetragen. 1991 war er an der Verfilmung des Lehrprogramms "DaYan ("Wildgans") QiGong" beteiligt. Dieser Film wurde vom Südwestfunk (Baden-Baden) ausgestrahlt; 1995 entwickelte Ding HongYu das "5 Organe QiGong" und lehrt es in Deutschland. 1996 modifizierte er die Form des "BaDuanJin" ("Acht Brokatstücke"). Im folgenden Jahr entwickelte er das "BaoJian Qigong 2" (Gesundheitsschützendes Qigong 2) und 1998 die Form der "Gesundheitsübung mit der Tellerdrehung" (PanZi Gong - Teller Gong). 2012 entwickelte er das Sehnen- und Knochen-Qigong" (Jingu Gong) und 2014 die "Lebensverlängernden Übungen" (Laoren Yanshou Fa). Im Jahr 2016 stellte Ding Hongyu seine zweite Form der „Gesundheitsübung mit der Tellerdrehung“ (PanZi Gong Zwei – Teller Gong Two) vor. In den Jahren 2018 bis 2019 entwickelte er die „Gesundheitsübung mit der Stockdrehung“ die aus zwei Formen – der Einzel- und der Doppelstockübung besteht. Dazwischen veröffentlichte er immer wieder verschiedene Beiträge zur Erhaltung der Gesundheit in Fachzeitschriften in China.',
        ],
      },
    ];

    this.contentPage3 = [
      {
        contentNav: false,
        customClass: '',
        heightContent1: 'h26',
        titleNo1_L1: 'Formen',
        classTitleNo1_L1: 'blue center',
        contentNo1: [
          { type: 'h2', content: 'Das Leben braucht Bewegung' },
          {
            type: 'p',
            content:
              'Um zu leben muss man sich bewegen. Die Bewegung ist wichtig für jeden Menschen. In China heißt es im Volksmund „HuoDong“, wobei „Huo“ leben bedeutet und „Dong“ bewegen. Bewegung kann die Lebensenergie „YuanQi“ ausbessern und die positive Energie „YangQi“ vermehren. „YuanQi“ und „YangQi“ sind positive Energien, die notwendig sind, um die Gesundheit zu erhalten.',
          },
          { type: 'h2', content: 'Qigong Formen im Ogura Dojo' },
          {
            type: 'p',
            content:
              'Im Ogura Dojo werden verschiedene Qigong Formen unterrichtet. Dazu zählen klassische Formen wie die Acht Brokatstücke, das Wildgans QiGong und das Spiel der Fünf Tiere. Den Schwerpunkt bilden aber die Gesundheitsformen von Professor Ding HongYu, von der NanJing Universität, der seit 1996 der Lehrer von Alexander Callegari ist.',
          },
        ],
        pics: ['num7', 'num8', 'num9'],
        heightContent2: 'h31',
        classTitleNo2_L1: 'blue left',
        titleNo2_L2: ['Beispiele für die praktizierten QiGong Formen'],
        vids: [
          'https://www.youtube.com/embed/7PemWl6LyCo',
          'https://www.youtube.com/embed/NwoTaqLxLiE',
          'https://www.youtube.com/embed/ntGKI2ZQUvM',
        ],
      },
    ];
  }

  render() {
    if (this.debug)
      console.log('ModalQiGong/render', this.state.width, this.state.height, this.props.colors);
    //this.loadStyles();
    //this.updateHxMKPG();
    this.props.colors.bgTheme = this.props.colors.bgBlue;
    this.props.colors.bgTheme50 = this.props.colors.bgBlue50;
    this.props.colors.typoTheme = this.props.colors.typoBlue;

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalQiGong"
          tabIndex="-1"
          aria-labelledby="ModalQiGongLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
        >
          <div
            className="modal-dialog d-flex flex-row-reverse align-items-center"
            id="modalDialog"
            css={this.style}
          >
            <div className="modal-content">
              <div className="modal-row">
                <ModalInNavigation
                  clickUpDown={this.clickUpDown}
                  nextItem={this.nextItem}
                  colors={this.props.colors}
                  config={this.stats}
                  mq={this.props.mq}
                  apdx="QiGong"
                  type="QG"
                />
                <div className="content">
                  <div className="csQiGongQG">
                    <CompTxtStripTxt content={this.contentPage1} />
                  </div>
                  <div className="csLehrerQG d-none">
                    <CompTxtStripTxt content={this.contentPage2} />
                  </div>
                  <div className="csFormQG d-none">
                    <CompTxtStripVids content={this.contentPage3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalQiGong;

//d-flex flex-row h-100 align-items-center
