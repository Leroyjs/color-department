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
  desktopXLG: "desktopXLG",
  desktopLG: "desktopLG",
  desktopMD: "desktopMD",
  desktopSM: "desktopSM",
  tabletLG: "tabletLG",
  tabletSM: "tabletSM",
  phone: "phone",
};

const {
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = namesOfBreakpoints;

export const subsequenceOfBreakpoints = [
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
};

export const fontSizes = {
  [desktopLG]: {
    h1: "12.125vw",
    h2: "72px",
    h3: "32px",
    text: "16px",
    caption: "14px",
  },
  [desktopMD]: {
    h1: "12.125vw",
    h2: "64px",
    h3: "32px",
    text: "16px",
    caption: "14px",
  },
  [desktopSM]: {
    h1: "12.125vw",
    h2: "60px",
    h3: "32px",
    text: "16px",
    caption: "14px",
  },
  [tabletLG]: {
    h1: "20.83vw",
    h2: "58px",
    h3: "24px",
    text: "14px",
    caption: "12px",
  },
  [tabletSM]: {
    h1: "20.83vw",
    h2: "36px",
    h3: "24px",
    text: "14px",
    caption: "12px",
  },
  [phone]: {
    h1: "22.22vw",
    h2: "28px",
    h3: "18px",
    text: "12px",
    caption: "12px",
  },
};

export const zindex = {
  modal:100,
  header: 1000,
  frontItem: 10,
  backItem: -1
}

// export const gridDimensions = {
//   8columns: "repeat(8, 12.5vw)",
//   4columns: "repeat(4, 25vw)",
//   2columns: "repeat(2, 50vw)",
//   1columns: "repeat(1, 100vw)",
// }