import { WebPreferences } from "electron";

export const defaultWebPreferences: WebPreferences = {
    allowRunningInsecureContent: false,
    backgroundThrottling: false,
    contextIsolation: true,
    devTools: true,
    enableRemoteModule: false,
    enableWebSQL: false,
    experimentalFeatures: false,
    images: true,
    navigateOnDragDrop: false,
    nodeIntegration: false,
    nodeIntegrationInSubFrames: false,
    nodeIntegrationInWorker: false,
    plugins: false,
    safeDialogs: true,
    sandbox: true,
    scrollBounce: false,
    spellcheck: true,
    textAreasAreResizable: false,
    webSecurity: true,
    webviewTag: false,
    worldSafeExecuteJavaScript: true,
};
