import { WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { IStorageService } from "../storage";
import { IWorkspaceService } from "./iWorkspaceService";
import { IWorkspace } from "./iWorkspace";
import { IUidGenerator } from "../ids";
import { StorageKeys } from "../storage/storageKeys";

export class DefaultWorkspaceService implements IWorkspaceService {
    private readonly storageService: IStorageService;
    private readonly uidGenerator: IUidGenerator;
    private readonly workspacesStorageKey = "workspaces";
    private readonly workspaces = new Map<string, IWorkspace>();

    public current?: IWorkspace;

    public constructor(storageService: IStorageService, uidGenerator: IUidGenerator) {
        this.storageService = storageService;
        this.uidGenerator = uidGenerator;
    }

    public all() {
        return Array.from(this.workspaces.values());
    }

    public create(name = "Default") {
        const uid = this.uidGenerator.generate();

        const workspace: IWorkspace = {
            name,
            instances: [],
            uid,
        };

        this.workspaces.set(uid, workspace);

        return workspace;
    }

    public async restore() {
        const storage = this.storageService.fromNamespace(WellKnownNamespace.desktop);
        if (storage === undefined) {
            throw new Error("No storage found for workspaces");
        }

        const workspaces = await storage.instance.get<IWorkspace[]>(this.workspacesStorageKey, []);
        workspaces?.forEach((workspace) => {
            this.workspaces.set(workspace.uid, workspace);
        });

        const currentUid = await storage.instance.get<string | undefined>(StorageKeys.currentWorkspaceStorageKey, undefined);
        if (currentUid !== undefined) {
            this.current === this.workspaces.get(currentUid);

            return;
        }

        const defaultWorkspace = this.create();

        this.switch(defaultWorkspace.uid);
    }

    public switch(uid: string) {
        this.current = this.workspaces.get(uid);

        const storage = this.storageService.fromNamespace(WellKnownNamespace.desktop);
        if (storage === undefined) {
            throw new Error("No storage found for workspaces");
        }

        return storage.instance.set(StorageKeys.currentWorkspaceStorageKey, uid);
    }
}
