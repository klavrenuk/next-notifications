import { makeAutoObservable } from 'mobx';

class AsideStore {
    isOpenMobileAside = false;

    constructor() {
        makeAutoObservable(this);
    }

    openMobileAside() {
        this.isOpenMobileAside = true;
    }

    closeMobileAside() {
        this.isOpenMobileAside = false;
    }
}

export const asideStore = new AsideStore();