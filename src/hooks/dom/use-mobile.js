import { useEffect, useState } from "react";

import {
  getMobileMediaHelper,
  isMobileScreenHelper,
} from "../../helpers/dom/dom-helpers";

export const useIsMobile = (breakpoint) => {
  const [isMobile, setIsMobile] = useState(() =>
    isMobileScreenHelper(breakpoint),
  );

  useEffect(() => {
    const media = getMobileMediaHelper(breakpoint);
    const onChange = (event) => setIsMobile(event.matches);

    onChange(media);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
};
