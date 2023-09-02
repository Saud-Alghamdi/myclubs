import { imageComponentProps } from "../../types/customTypes";
import { Blurhash } from "react-blurhash";
import { useState, useEffect } from "react";

export default function ImageComponent({
  src,
  blurHash,
  blurTwStyles,
  originalTwStyles,
  alt,
}: imageComponentProps) {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  /* After component mounts, create image, set its src, then wait for it to load, if it finishes loading, set bgImageLoaded to true.
  the src dependency is because when ImageComponent renders again (in a different page probably), it will probably have a new src, so you'd want the new src so you need to run useEffect again to set up the new image with the new src.
  */
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = src;
    bgImage.onload = () => setBgImageLoaded(true);
  }, [src]);

  return (
    <>
      {!bgImageLoaded && <Blurhash hash={blurHash} className={blurTwStyles} />}
      <img className={originalTwStyles} src={src} alt={alt} />
    </>
  );
}
