import Image from "next/image";

export const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={1000} height={1000} />
);

