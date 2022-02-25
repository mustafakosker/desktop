import { WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ipcMain } from "electron";
import { ReservedChannels } from "../../common";
import { storageService } from "../storage";

export const storageIpcEvents = () => {
    ipcMain.handle(ReservedChannels.storage_get, async (_, key: string) => {
        const storage = storageService.fromNamespace(WellKnownNamespace.desktop);
        return storage?.instance?.get(key);
    });

    ipcMain.handle(ReservedChannels.storage_set, async (_, key: string, value: any) => {
        const storage = storageService.fromNamespace(WellKnownNamespace.desktop);
        await storage?.instance?.set(key, value);
    });
};
