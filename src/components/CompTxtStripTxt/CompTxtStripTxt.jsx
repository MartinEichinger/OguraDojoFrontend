import React from 'react';

const CompTxtStripTxt = ({ content, clickLeftRight }) => {
  var debug = false;
  if (debug) console.log(content);

  return (
    <React.Fragment>
      {content.map((page, i) => {
        if (debug) console.log(Object.values(page.contentNo2));

        return (
          <div
            className={i > 0 ? page.customClass + ' modal-col d-out' : page.customClass + ' modal-col'}
            key={i}
          >
            <div className="modal-up d-flex flex-column">
              {page.titleNo1_L1 && <h1 className={'' + page.classTitleNo1_L1}>{page.titleNo1_L1}</h1>}
              {page.titleNo1_L2 && <h2 className={'' + page?.classTitleNo1_L2}>{page.titleNo1_L2}</h2>}
              <div className={'scroll_ '}>
                <p>{page.contentNo1}</p>
              </div>
            </div>

            <div
              className={
                page.contentNav
                  ? 'modal-strip d-flex flex-row justify-content-around align-items-center'
                  : 'modal-strip d-flex flex-row justify-content-around align-items-center' //////
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

            <div className="modal-down d-flex flex-column">
              {page.titleNo2_L1 && <h1 className={'' + page.classTitleNo2_L1}>{page.titleNo2_L1}</h1>}
              {page.titleNo2_L2 && <h2 className={'' + page.classTitleNo2_L2}>{page.titleNo2_L2}</h2>}
              <div className={'scroll_ '}>
                {Object.values(page.contentNo2).map((content, i) => {
                  return <p key={i}>{content}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CompTxtStripTxt;
