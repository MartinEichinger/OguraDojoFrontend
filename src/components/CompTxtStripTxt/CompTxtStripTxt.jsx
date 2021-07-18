import React from 'react';

const CompTxtStripTxt = ({ content, clickLeftRight }) => {
  return (
    <React.Fragment>
      {content.map((page, i) => {
        return (
          <div
            className={
              i > 0
                ? page.customClass + ' modal-col d-flex flex-column h-100 d-out'
                : page.customClass + ' modal-col d-flex flex-column h-100'
            }
          >
            <div className="modal-up">
              {page.titleNo1_L1 && <h1 className={page.classTitleNo1_L1}>{page.titleNo1_L1}</h1>}
              {page.titleNo1_L2 && <h2 className={page.classTitleNo1_L2}>{page.titleNo1_L2}</h2>}
              <div className={'scroll_ ' + page.heightContent1}>
                <p>{page.contentNo1}</p>
              </div>
            </div>

            <div
              className={
                page.contentNav
                  ? 'modal-strip d-flex flex-row justify-content-around align-items-center'
                  : 'modal-strip'
              }
            >
              {page.contentNav && (
                <div className="navLeft" onClick={(e) => clickLeftRight('left')}>
                  <img src="./icon_left.png" alt="icon left" />
                </div>
              )}
              <div className="pics d-flex flex-row justify-content-center">
                {page.pics.map((pic, i) => {
                  return <div className={'img ' + pic} key={i}></div>;
                })}
              </div>
              {page.contentNav && (
                <div className="navRight" onClick={(e) => clickLeftRight('right')}>
                  <img src="./icon_right.png" alt="icon right" />
                </div>
              )}
            </div>

            <div className="modal-down">
              {page.titleNo2_L1 && <h1 className={page.classTitleNo2_L1}>{page.titleNo2_L1}</h1>}
              {page.titleNo2_L2 && <h2 className={page.classTitleNo2_L2}>{page.titleNo2_L2}</h2>}
              <div className={'scroll_ ' + page.heightContent2}>
                <p>{page.contentNo2}</p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CompTxtStripTxt;
