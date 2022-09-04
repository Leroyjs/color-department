import { makeAutoObservable } from "mobx";

class StateStorage {
  hasInteractionWithPreloader = false;

  constructor() {
    makeAutoObservable(this);
  }

  setPreloaderInteraction(flag) {
    this.hasInteractionWithPreloader = flag;
  }
}

export default new StateStorage();
