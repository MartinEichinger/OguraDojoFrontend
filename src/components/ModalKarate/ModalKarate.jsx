/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import React from 'react';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalClassBasis from './ModalKarate.controls';
import CompTxtStripTxt from '../CompTxtStripTxt/CompTxtStripTxt';
import '../animation.css';

class ModalKarate extends ModalClassBasis {
  constructor(props) {
    super(props);

    this.state = {
      width: 1340,
      height: 300,
    };

    this.debug = true;
    this.apdx = 'Karate';

    this.form = React.createRef();
    this.stats = {
      navItems: ['TenguRyu', 'Lehrer'],
      page: this.props.page,
      allSubPages: ['Habersetzer', 'Ogura', 'Otsuka'],
      subPage: 'Habersetzer',
      animated: 0,
      upDown: 1,
    };

    this.contentTenguRyu = [
      {
        titleNo1_L1: 'Karate',
        titleNo1_L2: '"Es ablehnen zu kämpfen, es ablehnen zu unterliegen..."',
        heightContent1: 'h22',
        contentNo1:
          'Ursprüngliches Ziel von Karate war es eine bedrohliche Situation zu überstehen. Dazu war es notwendig seine vorhandenen körperlichen und geistigen Fähigkeiten optimal zu nutzen. Von entscheidender Bedeutung war sicher ein gutes Selbstbewußtsein und die nötige Entschlossenheit. Bewegungen im Karate basieren auf physikalischen Grundgesetzen, dies sollte man bei seinen Techniken optimal für sich ausnutzen. Geistig sollte man konzentriert und trotzdem flexibel sein. Optimalen Erfolg verspricht wahrscheinlich nur das harmonische Zusammenspiel sehr vieler physischer, psychischer und mentaler Faktoren. Daher ist absolute Perfektion nicht zu erreichen.',
        pics: ['num1', 'num8', 'num9'],
        titleNo2_L1: 'Tengu Ryu',
        heightContent2: 'h22',
        contentNo2:
          "Im Karate gibt es unterschiedliche Schulen (ryu's). Tengu-Ryū oder Tengu-no-michi (wörtlich: „Weg des Tengu“) ist ein rein defensiver Stil der klassischen japanischen Kampfkünste (Budo). Initiiert wurde dieser Stil 1995 von dem französischen Kampfkunst- experten Roland Habersetzer. Er umfasst drei Kompetenzbereiche: Tengu-Ryū Karatedo (ohne Waffen), Tengu-Ryū Kobudo (traditionelle Waffen), Tengu-Ryū Hojutsu (moderne Waffen). 2006 wurde dieser Stil in Japan durch die japanische Karatemeister Ogura Tsuneyoshi und Ōtsuka Tadahiko anerkannt. Das heißt, Hanshi Habersetzer ist der erste Soke dieses Stils. Tengu-Ryū ist eine Synthese der traditionellen japanischen Kriegskünste, die auf kulturellen und nicht auf wettkämpferischen Kriterien beruhen, mit dem Ziel der persönlichen Verwirklichung im körperlichen Bereich (Techniken) wie im mentalen Bereich (Ethik). Dieser Stil der Kriegskunst integriert sowohl die klassischen als auch die modernen Entwicklungen mit oder ohne Waffen. Tengu-Ryū ist der Versuch, die Kampfkunst im 21. Jahrhundert neu zu definieren.",
      },
    ];

    this.contentLehrer = [
      {
        contentNav: true,
        customClass: 'Habersetzer',
        titleNo1_L1: 'Roland Habersetzer',
        classTitleNo1_L1: 'red center',
        heightContent1: 'h26',
        contentNo1:
          'Roland Habersetzer praktiziert seit 1957 die Kampfkünste und wurde 1961 einer der ersten Karate-Schwarzgurte Frankreichs. Zu Recht gilt er als Spezialist der Kampfkünste Japans (Bude) und Chinas (Wushu). Er ist Inhaber verschiedener französischer, japanischer und chinesischer Diplome. 1992 erhielt er in Japan vom O-Sensei Ogura Tsuneyoshi (geb. 1921, vom Gembunkan-Dojo; Ogura Sensei war Schüler von Yamaguchi Gogen, 1909-1989, und von Gima Makoto, 1897-1998) den 8. Dan-Grad und den Titel „Shihan". Im April 2006 wurde dann zum „Hanshi" mit dem Titel eines „Soke" (Gründungsmeister) ernannt für seinen eigenen Stil „Tengu-no-michi". Diese Grade und Titel wurden bestätigt von Otsuka Tadahiko vom Gojukensha in Tokyo, eines anderen Meisters, mit Beziehungen zu Goju-ryu, Naha-te und Shuri-te und direkter Schüler von Higa Yuchoku (1910-1994), der ihn zum „Hanshi" ernannte. Das geschah als Anerkennung und Belohnung seiner einzigartigen Missionsarbeit und der sicheren Wirkung, womit auch die Bedeutung betont wird, die Roland Habersetzer den 49 Jahren seiner Kampfkunstpraxis und seines Einsatzes für die echte Tradition geben wollte, indem er die drei Stufen „Shu", „Ha", „Li" respektierte.',
        pics: ['num4', 'num5', 'num6'],
        heightContent2: 'h31',
        contentNo2:
          'Und damit wird, letztendlich, auch sein eigenes, praktisches Konzept in den Kampfkünsten, sein „Tengu-Weg („Tengu-no-michi"), legitimiert. Bereits 1968 hat er mit seiner außergewöhlichen Verbreitungsarbeit begonnen. Mit ungefähr 70 Veröffentlichungen bis heute (*), ist er wohl der Autor des wichtigsten Werkes der Welt über die Kampf- künste, eine Quelle der Geschichte, der Technik und der Pädagogik in allen französisch sprechenden Ländern und in vielen anderen. Nachdem er 10 Jahre lang eine der Triebfedern des jungen französischen Karateverbandes war, zu- ständig für den ganzen östlichen Teil des Landes, gründete er 1974 das Budoforschungszentrum (CRB), ein inter- nationales und unabhängiges Organ für zahllose Budokas, die sich vor allem um die geistige Zukunft der Kampf- künste des fernen Ostens sorgen, denn er war schnell und tief enttäuscht von der sportlichen Entwicklung einer Sache, die er als eine Kunst und einen kulturellen Ausdruck betrachtete. In diesem Rahmen und in einer Vielzahl von Lehrgängen und Konferenzen in der ganzen Welt, als auch in einer Serie von technischen Handbüchern und ge- schichtlichen Veröffentlichungen, die er als Pionierwerke verfaßt hat, hat er einen starken Weg geschaffen, der zurück führt zu den traditionellen Werten dieser Künste, ohne jemals von seiner Überzeugung abzuweichen.',
      },
      {
        contentNav: true,
        customClass: 'Ogura',
        titleNo1_L1: 'Ogura Tsuneyoshi',
        classTitleNo1_L1: 'red center',
        heightContent1: 'h26',
        contentNo1:
          'Ogura Tsuneyoshi (* 1924; † 2007) war ein japanischer Karatemeister (Shotokan, Gōju ryū) aus Kōfu, 10. Dan. Ogura Tsuneyoshi war insbesondere Schüler von Gima Makoto und von Yamaguchi Gōgen. Gima Makoto übermittelte ihm die antiken Formen zahlreicher Kata mit ihren kriegerischen (Bunkai), energetischen und therapeutischen Anwendungen. 1944 gründete er die Gembukai-Schule (Gembukan dōjō) in Kōfu und in den 70er Jahren das Kokusai Karatedo Kobudo Sihikko Kyokai, die er zu entwickeln versuchte im Verlauf seiner zahlreichen Seminare in Frankreich wie in Europa und Zentralamerika. Ausgehend von einem Konzept, das schon von Yagi Meitoku entwickelt wurde, brachte Ogura Sensei eine Reihe von sechs Fukiyu-Kata heraus, die ein Training mit Partner ermöglichen (Futari-bunkai, San-nin-bunkai, Go-nin-bunkai), die er in der Folge bis auf zehn erhöhte. Ogura Tsuneyoshi gilt als ein „Meister im Schatten“, d.h., sein Wirken erfolgte vorwiegend im Verborgenen, unter Ausschluss der Öffentlichkeit, und sein Name ist in den offiziellen Genealogien des Karatedō selten zu finden.',
        pics: ['num10', 'num11', 'num12'],
        heightContent2: 'h31',
        contentNo2:
          'Freund der letzten lebenden Karate- und Kobudo-Meister, von Sakagami Ryusho bis zu Matayoshi Shinpō, bedeutender Kalligraph, war er einer der allerletzten Empfänger der geschriebenen und mündlichen Quellen. Von 1973 an war er der letzte Lehrer von Roland Habersetzer gewesen, dem er 1992 den 8. Dan und dann 2006 den 9. Dan zuerkannte, mit dem Titel des Hanshi und dem des Sōke für sein eigenes Konzept der Kampfpraxis, den „Voie Tengu“ (Weg des Tengu, Tengu-no-Michi), der sich auf drei Kompetenz-Bereiche aufteilt: Tengu-ryu Karatedo, Tengu-ryu Kobudo, Tengu-ryu hojutsu. Pierre Portocarrero, dem Ogura Sensei gleichermaßen einen Shihan-Grad verliehen hat, was ihn anbetrifft und mit Zustimmung von Sensei Habersetzer, sich entschieden in Frankreich die klassische Schule des Meisters von Kofu zu verfolgen, die er Gembukan-tode-ryu genannt hat. Sein Sohn Hisanori Ogura hat seit 2007 die Leitung des Dōjō von Kofu übernommen, wo er die Synthese lehrt, die von seinem Vater geschaffen wurde, dass Gembukan Karatedo. Ogura Tsuneyoshi war auch Shintō-Priester. Darüber hinaus hat er einige Zeit bei den Yamabushi (er studierte also Ninjutsu vom Koga-ryu von Fujita Saiko) verbracht und wurde durch sie in das Shingon eingeführt, eine esoterische Strömung des Buddhismus. Der Umfang und der Eklektizismus seiner Kenntnisse in den Budo-Künsten war außerordentlich. Er hatte gleichermaßen die chinesischen Künste studiert, insbesondere den Stil des „weißen Kranich“ von Fujian (Baihequan), und das Kendo und Iaido von Omori-ryu praktiziert.',
      },
      {
        contentNav: true,
        customClass: 'Otsuka',
        titleNo1_L1: 'Ōtsuka Tadahiko',
        classTitleNo1_L1: 'red center',
        heightContent1: 'h26',
        contentNo1:
          'Ōtsuka Tadahiko (* 10. Juni 1940; † 27. November 2012) war ein japanischer Karatemeister (Gōju ryū), 9. Dan, und Meister des Taijiquan (Yang-Stil). Tadahiko war der Kancho (Direktor/Leiter) der Kampfkunstschule Gōjūkensha und Referenzmeister im Gōjū-Ryū, Naha-te und Shuri-te, direkter Schüler von Higa Yuchoko (1910–1994), der ihn zum Hanshi ernannt hatte. Er hatte das Karate-Studium 1955 in Tokio begonnen, unter der Leitung von Ichikawa Sosui, einem Experten des okinawanischen Zweigs des Gōjū-Ryū und Schüler von Izumigawa Kanki, der bei Higa Seiko (1898–1966) und Toyama Kanken (1888–1966) gelernt hatte. Im Jahr 1967 machte Ōhtsuka Tadahiko die Bekanntschaft von Yang-Ming-Shi (1924–2005), der in Japan unter dem Namen Yo Meiji bekannt ist. Dieser lehrte ihn die kleine Form des Taijiquan, die 24er Form, die als Peking-Form bekannt ist, welche er seither weit verbreitet hat, zusammen mit seiner Ehefrau Ōhtsuka Kazuko, in Japan, Australien und Europa. In der Folge hatte er gleichermaßen Bagua und Xing-yi bei Wang Shu Chin aus Taiwan studiert, welcher mehrere Jahre in Japan zugebracht hatte. Im Alter von 30 Jahren wurde er einer der jüngsten 6. Dan in Japan. 1970 gründete er unter der Anleitung seines Lehrers, Ichikawa Sosui, seine eigene Organisation namens Gōjūkensha.',
        pics: ['num13', 'num14', 'num15'],
        heightContent2: 'h31',
        contentNo2:
          'Dabei steht Gō (剛) für hart, jū (柔) für weich, ken (拳) für Faust und sha (舎) für Ort des Lernens. Darüber hinaus haben ihn seine ständigen historischen Recherchen auf Okinawa und bis in die chinesische Provinz Fujian (wo er bei verschiedenen Gelegenheiten in Begleitung seiner Frau Experten des Taijiquan traf wie Zhu Tian Cai, Feng Zhiqiang und Chen Xiai Wang) dazu geführt sich weiter mit dem Text des Bubishi vertraut zu machen, dessen Existenz bis dahin nur ganz vertraulich und vage gewesen war. Von ihm stammt auch die erste vollständige Übersetzung des Bubishi aus dem Chinesischen ins Japanische. Er hat sich auch für den Erhalt und die Verbreitung alter Formen (klassische Kata mit chinesischem Ursprung, auch „Koryū-Kata“ genannt) eingesetzt. Dazu gehören Formen wie z.B. Passai, Sochin, Unsu und Jitte. Die Formen haben allerdings sehr wenig mit den Formen wie sie heute in den großen japanischen Stilen wie z. B. im Shotokan ausgeführt werden gemeinsam. Die Übertragungslinie geht von Ohtsuka Tadahiko – Higa Yuchoko – Chibana Chōshin (Aragaki) – Itosu Ankō bis auf Matsumura Sōkon zurück. Ohtsuka Tadahiko lehrte auch besonders die Kata Happoren und Rokkishu, welche er vor dem Vergessenwerden bewahrt hat, und in Europa an seinen Schüler den französischen Kampfkunstexperten Roland Habersetzer, mit dessen CRB er intensive Beziehungen pflegte, weitergegeben hat.',
      },
    ];
  }

  render() {
    if (this.debug) console.log('ModalKarate/render', this.state.width, this.state.height);
    //this.loadStyles();
    this.updateHxMK();

    return (
      <React.Fragment>
        <div
          className="modal fade"
          id="idModalKarate"
          tabIndex="-1"
          aria-labelledby="ModalKarateLabel"
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
                  apdx="Karate"
                />
                <div className="content">
                  <div className="TenguRyu">
                    <CompTxtStripTxt content={this.contentTenguRyu} />
                  </div>
                  <div className="Lehrer d-none">
                    <CompTxtStripTxt content={this.contentLehrer} clickLeftRight={this.clickLeftRight} />
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

export default ModalKarate;

//d-flex flex-row h-100 align-items-center
