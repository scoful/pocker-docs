declare module 'react-medium-image-zoom' {
  import { ReactElement } from 'react';

  export interface ZoomProps {
    children: ReactElement;
    zoomMargin?: number;
    wrapStyle?: {
      maxWidth?: string;
      width?: string;
    };
    overlayBgColorEnd?: string;
    zoomZindex?: number;
    transitionDuration?: number;
  }

  export default function Zoom(props: ZoomProps): JSX.Element;
} 