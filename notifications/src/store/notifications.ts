import { makeAutoObservable } from 'mobx';

class NotificationsStore {
    isShowModalDelete:boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    showModalDelete() {
        this.isShowModalDelete = true
    }

    closeModalDelete() {
        this.isShowModalDelete = false
    }
}

export const notificationsStore = new NotificationsStore();