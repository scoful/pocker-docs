import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
    return (
    <Zoom
      zoomMargin={20}
      wrapStyle={{
        maxWidth: '100%',
        width: '100%'
      }}
      overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
      zoomZindex={1400}
      transitionDuration={0.3}
    >
      <div style={{ position: 'relative' }}>
        <Image
          src={src}
          alt={alt}
          width={width * 5.5}
          height={height * 5.5}
          style={{
            maxWidth: '100%',
            height: 'auto',
            transform: 'scale(0.67)',
            transformOrigin: 'top left'
          }}
          quality={100}
        />
      </div>
    </Zoom>
  );
} 