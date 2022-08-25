export const colors = {
  white: "#FFFFFF",
  black: "#101010",
  yellow: "#FFD246",
  turquoise: "#82D2CD",
  pink: "#F0BEC8",
  grey: "#CDD2D2",
  blue: "#3C7DFF",
  red: "#E63C41",
  darkBlue: "#28328C",
  burgundy: "#5F2341",
};

export const fontFamilies = {
  mainFont: '"Steelfish", Arial, sans-serif',
  subFont: '"HelveticaNeue", Arial, sans-serif',
};

export const namesOfBreakpoints = {
  desktopXXLG: "desktopXXLG",
  desktopXLG: "desktopXLG",
  desktopLG: "desktopLG",
  desktopMD: "desktopMD",
  desktopSM: "desktopSM",
  tabletLG: "tabletLG",
  tabletSM: "tabletSM",
  phone: "phone",
};

const {
  desktopXXLG,
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints;

export const subsequenceOfBreakpoints = [
  desktopXXLG, // больше чем 1920px
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
];

export const breakpointsWidth = {
  [desktopXLG]: "1920px",
  [desktopLG]: "1600px",
  [desktopMD]: "1440px",
  [desktopSM]: "1280px",
  [tabletLG]: "1024px",
  [tabletSM]: "768px",
  [phone]: "600px",
};

export const offsets = {
  [desktopXXLG]: {
    xlg: "10vw",
    sxlg: "4.75vw",
    lg: "3.75vw",
    md: "2.5vw",
    md1: "2vw",
    sm: "1vw",
    xsm: "0.75vw",
    xxsm: "0.5vw",
    none: 0,
  },
  [desktopXLG]: {
    xlg: "10vw",
    sxlg: "4.75vw",
    lg: "3.75vw",
    md: "2.5vw",
    md1: "2vw",
    sm: "1vw",
    xsm: "0.75vw",
    xxsm: "0.5vw",
    none: 0,
  },
  [desktopLG]: {
    xlg: 160,
    sxlg: 76,
    lg: 60,
    md: 40,
    md1: 32,
    sm: 16,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
  [desktopMD]: {
    xlg: 150,
    sxlg: 76,
    lg: 56,
    md: 34,
    md1: 30,
    sm: 16,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
  [desktopSM]: {
    xlg: 140,
    sxlg: 76,
    lg: 52,
    md: 28,
    md1: 26,
    sm: 14,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
  [tabletLG]: {
    xlg: 140,
    sxlg: 76,
    lg: 48,
    md: 24,
    md1: 24,
    sm: 12,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
  [tabletSM]: {
    xlg: 140,
    sxlg: 76,
    lg: 48,
    md: 24,
    md1: 24,
    sm: 12,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
  [phone]: {
    xlg: 80,
    sxlg: 48,
    lg: 32,
    md: 16,
    md1: 12,
    sm: 12,
    xsm: 12,
    xxsm: 8,
    none: 0,
  },
};

export const typesOfoffset = Object.keys(offsets[desktopLG]);

export const sizes = {
  [desktopLG]: {
    x4: "50vw",
    x3: "37.5vw",
    x2: "25vw",
    x1: "12.5vw",
    half: "6.25vw",
    count: 8,
  },
  [tabletLG]: {
    x2: "50vw",
    x1: "25vw",
    half: "12.5vw",
    count: 4,
  },
};

export const fontSizes = {
  [desktopXXLG]: {
    h1: "12.125vw",
    h2: "4.5vw",
    h3: "2vw",
    text: "1vw",
    caption: "0.875vw",
  },
  [desktopXLG]: {
    h1: "12.125vw",
    h2: "4.5vw",
    h3: "2vw",
    text: "1vw",
    caption: "0.875vw",
  },
  [desktopLG]: {
    h1: "12.125vw",
    h2: "72px",
    h3: "32px",
    text: "16px",
    caption: "14px",
    vw: "1vw",
    vw15: "1.5vw",
    vw2: "2vw",
  },
  [desktopMD]: {
    h1: "12.125vw",
    h2: "64px",
    h3: "32px",
    text: "16px",
    caption: "14px",
    vw: "1vw",
    vw2: "2vw",
  },
  [desktopSM]: {
    h1: "12.125vw",
    h2: "60px",
    h3: "32px",
    text: "16px",
    caption: "14px",
    vw: "1vw",
    vw2: "2vw",
  },
  [tabletLG]: {
    h1: "20.83vw",
    h2: "58px",
    h3: "24px",
    text: "14px",
    caption: "12px",
    vw: "1vw",
    vw2: "2vw",
  },
  [tabletSM]: {
    h1: "20.83vw",
    h2: "58px",
    h3: "24px",
    text: "14px",
    caption: "12px",
    vw: "1vw",
    vw2: "2vw",
  },
  [phone]: {
    h1: "22.22vw",
    h2: "28px",
    h3: "18px",
    text: "12px",
    caption: "12px",
    vw: "1vw",
    vw2: "2vw",
  },
};

export const zindex = {
  modal: 100,
  header: 1000,
  frontItem: 10,
  backItem: -1,
};
