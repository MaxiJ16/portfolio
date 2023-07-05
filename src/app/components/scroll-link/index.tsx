// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
export const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");

    useEffect(() => {
      const elem = document.getElementById(targetId);
      console.log(elem);
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }, [targetId]);
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
