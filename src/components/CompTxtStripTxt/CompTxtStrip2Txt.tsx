import React from 'react';
import { IContentPage } from '../ModalPanziGong/ModalPanziGong';

const CompTxtStripTxt = ({ content, clickLeftRight }: { content: any; clickLeftRight?: any }) => {
  var debug = false;
  if (debug) console.log(content);

  return (
    <React.Fragment>
      {content.map((page: IContentPage, i: number) => {
        if (debug) console.log('Content: ', Object.values(page.contentNo2));

        return (
          <div
            className={i > 0 ? page.customClass + ' modal-col d-out' : page.customClass + ' modal-col'}
            key={i}
          >
            <div className="modal-up d-flex flex-column">
              {page.titleNo1_L1 && <h1 className={'' + page.classTitleNo1_L1}>{page.titleNo1_L1}</h1>}
              {page.titleNo1_L2 && <h2 className={'' + page?.classTitleNo1_L2}>{page.titleNo1_L2}</h2>}
              <div className="d-flex flex-column flex-column-reverse flex-md-row scroll_">
                <div className="d-flex flex-column w-100 w-md-50 scroll__">
                  <p>{page.contentNo1}</p>
                </div>
                <div className="videos d-flex flex-row justify-content-center align-items-center w-100 w-md-50">
                  {page.vids.map((vids: any, i: number) => {
                    return <iframe title="Panzi Gong Video" src={vids} allowFullScreen={true} key={i} />;
                  })}
                </div>
              </div>
            </div>

            <div
              className={
                page.contentNav
                  ? 'modal-strip watch-pg d-flex flex-row justify-content-around align-items-center'
                  : 'modal-strip watch-pg d-flex flex-row justify-content-around align-items-center' //////
              }
            >
              {page.contentNav && (
                <div className="navLeft" onClick={(e) => clickLeftRight('left')}>
                  <img src="./icon_left.png" alt="icon left" />
                </div>
              )}
              {page.pics.length && (
                <div className="pics d-flex flex-row justify-content-center align-items-center">
                  {page.pics.map((pic, i) => {
                    return <div className={'img ' + pic} key={i}></div>;
                  })}
                </div>
              )}
              {page.contentNav && (
                <div className="navRight" onClick={(e) => clickLeftRight('right')}>
                  <img src="./icon_right.png" alt="icon right" />
                </div>
              )}
            </div>

            <div className="modal-down d-flex flex-column flex-md-row scroll_">
              {Object.values(
                page.contentNo2.map((content, i) => {
                  return (
                    <div className="d-flex flex-column w-100 w-md-50" key={i}>
                      {page.titleNo2_L1 && (
                        <h1 className={'' + page.classTitleNo2_L1}>{page.titleNo2_L1[i].entry}</h1>
                      )}
                      {page.titleNo2_L2 && (
                        <h2 className={'' + page.classTitleNo2_L2}>{page.titleNo2_L2[i]}</h2>
                      )}
                      <div className={'scroll_'}>
                        {content.entry.map((cont: any, i: number) => {
                          return <p key={i}>{cont.entry}</p>;
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CompTxtStripTxt;
