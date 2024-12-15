import React from 'react';
import { IContentImpressum } from './ModalImpressum';

const ModalCompL1Impressum = ({ content }: { content: IContentImpressum }) => {
  const debug = false;

  if (debug) console.log('ModalComp_L1_Impressum: ', content);

  return (
    <div className="modal-col">
      <div className="imageBg"></div>
      <h1 className="bigger">{content.title}</h1>
      <div className="impressum scroll_">
        <div dangerouslySetInnerHTML={{ __html: content?.impressum?.translations?.[0]?.impressum }} />
      </div>
    </div>
  );
};

export default ModalCompL1Impressum;
