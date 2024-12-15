import React from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const CompTxtStripVids = ({ content, clickLeftRight }) => {
  var debug = false;
  if (debug) console.log('CompTxtStripVids: ', content, clickLeftRight);

  return (
    <React.Fragment>
      {content.map((page, i) => {
        if (debug) console.log(page);

        return (
          <div
            className={i > 0 ? page.customClass + ' modal-col d-out' : page.customClass + ' modal-col'}
            key={i}
          >
            <div className="modal-up d-flex flex-column">
              {page.titleNo1_L1 && <h1 className={'' + page.classTitleNo1_L1}>{page.titleNo1_L1}</h1>}
              <div className="scroll_">
                {
                  // eslint-disable-next-line
                  page.contentNo1.map((line, i) => {
                    if (line.type === 'h2') return <h2 key={i}>{line.content}</h2>;
                    if (line.type === 'p') return <p key={i}>{line.content}</p>;
                  })
                }
              </div>
            </div>

            <div
              className={
                page.contentNav
                  ? 'modal-strip d-flex flex-row justify-content-around align-items-center'
                  : 'modal-strip d-flex flex-row justify-content-around align-items-center'
              }
            >
              {page.contentNav && (
                <div className="navLeft" onClick={(e) => clickLeftRight('left')}>
                  <IconChevronLeft size={36} color={'white'} />
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
                  <IconChevronRight size={36} color={'white'} />
                </div>
              )}
            </div>

            <div className="modal-down d-flex flex-column scroll_">
              {page.titleNo2_L1 && <h1 className={'' + page.classTitleNo2_L1}>{page.titleNo2_L1}</h1>}
              {page.titleNo2_L2 && (
                <h2 className={'' + page.classTitleNo2_L2} key={i}>
                  {page.titleNo2_L2}
                </h2>
              )}
              <div className="vids d-flex flex-row flex-wrap">
                {page.vids.map((vids, i) => {
                  return (
                    <iframe
                      title="Panzi Gong Video"
                      src={vids}
                      allowFullScreen="allowfullscreen"
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default CompTxtStripVids;
