import { useEffect } from "react";

export function useLockBodyScroll(open: boolean) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.paddingRight = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [open]);
}
