import React, { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { IColors } from '../../App';
import './styles.css';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';

export const Modal = ({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) => {
  console.log('ModalContent: ', children);

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  return (
    <Dialog.Root open={open}>
      {(children as any)?.[0]}
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent" aria-describedby={undefined}>
          <div className="DialogBody">
            {(children as any)?.[1]}
            {/* {(children as any)?.[2]} */}
          </div>
          <ModalInNavigation config={configNav} onOpenChange={onOpenChange} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export const ModalButton = Dialog.Trigger;
export const ModalTitle = Dialog.Title;
export const ModalDescription = Dialog.Description;
export const ModalClose = Dialog.Close;
