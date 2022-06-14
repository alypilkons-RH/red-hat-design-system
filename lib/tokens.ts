import { unsafeCSS } from 'lit';

/* min-width mobile breakpoints */
export const mobilePortraitBreakpoint = unsafeCSS`320px`;
export const mobileLandscapeBreakpoint = unsafeCSS`576px`;
/* max-width mobile breakpoints*/
export const mobileBreakpoint = unsafeCSS`700px`;
export const mobileXlBreakpoint = unsafeCSS`1008px`;
/* min-width tablet breakpoints */
export const tabletPortaitBreakpoint = unsafeCSS`768px`;
export const tabletLandscapeBreakpoint = unsafeCSS`992px`;
/* min-width desktop breakpoints */
export const desktopSmallBreakpoint = unsafeCSS`1200px`;
export const desktopLargeBreakpoint = unsafeCSS`1368px`;

export const pfGlobalSpacer = {
  xs: '--pf-global--spacer--xs', // 4px
  sm: '--pf-global--spacer--sm', // 8px
  md: '--pf-global--spacer--md', // 16px
  lg: '--pf-global--spacer--lg', // 24px
  xl: '--pf-global--spacer--xl', // 32px
  twoXL: '--pf-global--spacer--2xl', // 48px
  threeXL: '--pf-global--spacer--3xl', // 64px
  fourXL: '--pf-global--spacer--4xl', // 80px
};
