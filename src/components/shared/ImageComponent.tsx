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
  const [imageLoaded, setImageLoaded] = useState(false);

  /* After component mounts, create image, set its src, then wait for it to load, if it finishes loading, set imageLoaded to true.
  the src dependency is because when ImageComponent renders again (in a different page probably), it will probably have a new src, so you'd want the new src so you need to run useEffect again to set up the new image with the new src.
  */
  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = src;
    bgImage.onload = () => setImageLoaded(true);
  }, [src]);

  return (
    <>
      <Blurhash
        hash={blurHash}
        className={`${blurTwStyles} ${imageLoaded ? "!hidden" : "!block"}`}
      />
      <img
        className={`${originalTwStyles} ${imageLoaded ? "block" : "hidden"}`}
        src={src}
        alt={alt}
      />
    </>
  );
}
