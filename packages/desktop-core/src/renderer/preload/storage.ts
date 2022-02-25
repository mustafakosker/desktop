import { ipcRenderer } from "electron";
import { ReservedChannels } from "../../common";

export class Storage {
    public getItem = (key: string) => {
        return ipcRenderer.invoke(ReservedChannels.storage_get, key);
    };

    public setItem = (key: string, value: any) => {
        return ipcRenderer.invoke(ReservedChannels.storage_set, key, value);
    };
}
