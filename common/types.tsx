import { CSSProperties } from 'react';

export interface CustomButtonTypes {
  icon?: string;
  value: string;
  size?: 'small' | 'medium' | 'large' | undefined;
  color?: 'primary' | 'secondary' | undefined;
  variant?: 'contained' | undefined;
  className?: string;
  href: string;
  type: 'link' | 'default' | 'ghost' | 'primary' | 'dashed' | 'danger';
  block?: boolean;
  style?: CSSProperties;
}

export interface TextTypes {
  algin?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit';
  className?: string;
  style?: CSSProperties;
  value: any;
}

<<<<<<< HEAD
interface DrawerList {
  label: string;
  href: string;
}

export interface CustomDrawerTypes {
  anchor: 'top' | 'left' | 'bottom' | 'right';
  lists: any;
  open: any;
  className?: string;
  toggle: any;
=======
export interface XsNavTypes {
  visible: boolean;
  setVisible: any;
>>>>>>> f84867de3cbba6d8b1b854bb4acaac886181de43
}
