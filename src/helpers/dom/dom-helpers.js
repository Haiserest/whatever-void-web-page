// breakpoint เดียวกับ antd `md` ที่ GridLayout ใช้ (xs < 576, sm < 768)
const MOBILE_BREAKPOINT = 768;

export const getMobileMediaHelper = (breakpoint = MOBILE_BREAKPOINT) => {
  return window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
};

export const isMobileScreenHelper = (breakpoint = MOBILE_BREAKPOINT) => {
  return getMobileMediaHelper(breakpoint).matches;
};
