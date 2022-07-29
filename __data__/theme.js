import { makeAutoObservable } from "mobx";
import { themeNames } from "../styles/theme";

class Theme {
  themeNamesArray = Object.values(themeNames);
  currentIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setNextThemeName() {
    if (this.themeNamesArray.length - 1 > this.currentIndex) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }

  get currentThemeName() {
    return this.themeNamesArray[this.currentIndex];
  }
}

export default new Theme();
