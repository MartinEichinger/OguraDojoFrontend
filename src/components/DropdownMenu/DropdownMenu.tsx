// your-dropdown-menu.jsx
import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import './styles.css';

const debug = false;

export default function Dropdown({
  children,
  open,
  setOpen,
  className,
}: {
  children: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  className?: any;
}) {
  if (debug) console.log('Dropdown: ');

  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={setOpen}>
      {children}
    </DropdownMenuPrimitive.Root>
  );
}

function DropdownButton(props: { children: any; disabled: any; className?: any }) {
  if (debug) console.log('DropdownButton: ', props);
  const { children, disabled, className } = props;

  return (
    <DropdownMenuPrimitive.Trigger className={className} disabled={disabled}>
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
}

function DropdownMenu({
  children,
  className,
  sideOffset,
  align,
}: {
  children: any;
  className?: any;
  sideOffset?: any;
  align?: any;
}) {
  if (debug) console.log('DropdownMenu: ');

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={`DropdownMenuContent ${className}`}
        sideOffset={sideOffset}
        align={align}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({ children, className }: { children: any; className?: any }) {
  if (debug) console.log('DropdownMenu: ');

  return (
    <DropdownMenuPrimitive.Item className="DropdownMenuItem">{children}</DropdownMenuPrimitive.Item>
  );
}

function DropdownMenuRadioGroup({
  children,
  setValue,
}: {
  children: any;
  setValue: (value: string) => void;
}) {
  if (debug) console.log('DropdownMenuRadioGroup: ');

  return (
    <DropdownMenuPrimitive.RadioGroup onValueChange={setValue}>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
}

function DropdownMenuRadioItem({
  children,
  value,
  className,
}: {
  children: any;
  value?: any;
  className?: any;
}) {
  if (debug) console.log('DropdownMenuRadioItem: ');

  return (
    <DropdownMenuPrimitive.RadioItem className={`DropdownMenuRadioItem ${className}`} value={children}>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;
Dropdown.RadioGroup = DropdownMenuRadioGroup;
Dropdown.RadioItem = DropdownMenuRadioItem;
Dropdown.Button = DropdownButton;
