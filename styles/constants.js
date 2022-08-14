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
    lg: 60,
    md: 40,
    md1: 30,
    sm: 16,
    xsm: 12 ,
    xxsm: 8,
    none: 0,
  },
};

export const typesOfoffset = Object.keys(offsets[desktopLG]);

//TODO
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
};

export const zindex = {
  modal: 100,
  header: 1000,
  frontItem: 10,
  backItem: -1,
};
