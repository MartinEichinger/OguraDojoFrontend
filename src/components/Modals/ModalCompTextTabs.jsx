/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';
import React from 'react';

const ModalCompTextTabs = ({ contentWir, mq, colors }) => {
  const style = {
    '&.Wir': {
      '& .modal-col': {
        '& .modal-up': {
          '& .rect_var2': {
            position: 'relative',
            marginLeft: '2vh',
            width: 'calc(100% - 2vh)',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: '5px',
            padding: '1vh',

            [mq[2]]: {
              width: 'calc(100%)',
              padding: '1vh',
              margin: '0',
            },

            [mq[1]]: {
              width: 'calc(100%)',
              padding: '1vh',
              margin: '0',
            },

            overflowY: 'auto',

            '&::-webkit-scrollbar': {
              width: '10px',
            },

            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '5px',
            },

            '&::-webkit-scrollbar-thumb': {
              borderRadius: '5px',
              background: '#888',
            },

            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555',
            },
          },
          '& .cards': {
            marginLeft: '2vh',
            padding: '1vh',
            overflow: 'auto',

            '& .body': {
              height: '300px',
              width: '250px',
              borderRadius: '5px',
              position: 'relative',
              margin: '5px',

              '& .image': {
                width: '100%',
                height: '55%',
                borderRadius: '5px',
                //backgroundImage: 'url(./training_pic_2.png)',
              },

              '& .text': {
                width: '100%',
                height: '40%',
                borderRadius: '5px',
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            },
          },
        },
      },
    },
  };

  return (
    <div className="Wir d-none" css={style}>
      <div className="modal-col d-flex flex-column h-100">
        <div className="modal-up">
          <div className="bg-training"></div>
          <h1 className="big">{contentWir.title}</h1>
          <div
            className="table d-flex flex-column justify-content-around"
            css={style}
          >
            <div className="rect_var2 h31">
              <p className="mb-2">{contentWir.text}</p>
            </div>
            <div className="cards d-flex flex-row flex-wrap justify-content-around h40">
              {contentWir.tabs.map((item, i) => {
                return (
                  <div
                    className="body d-flex flex-column justify-content-between"
                    key={i}
                  >
                    <div
                      className="image"
                      style={{ backgroundImage: item.img }}
                    ></div>
                    <div className="text d-flex flex-column align-items-center">
                      <h2>{item.head1}</h2>
                      <h5>{item.head2}</h5>
                      <p className="white text-center mb-2 small">
                        {item.head3}
                      </p>
                      <img src="email_24px_outlined.png" alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCompTextTabs;
