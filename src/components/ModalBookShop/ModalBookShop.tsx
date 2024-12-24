/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx } from '@emotion/react';

import { useState } from 'react';
import { Modal, ModalButton, ModalTitle, ModalDescription } from '../Modal/Modal';
import { IColors } from '../../App';

export default function ModalBookShop({ mq, colors }: { mq: string[]; colors: IColors }) {
  const [open, setOpen] = useState(false);

  console.log('ModalBookShop: ');
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalButton onClick={() => setOpen(true)}>Bücher</ModalButton>
      <ModalTitle className="DialogTitle">Bücher</ModalTitle>
      <ModalDescription className="DialogDescription">Inhalt</ModalDescription>
    </Modal>
  );
}

/* {/* <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Bücher</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" defaultValue="Pedro Duarte" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="username">
              Username
            </label>
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root> */
