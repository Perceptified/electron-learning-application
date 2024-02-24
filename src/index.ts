import { BrowserWindow } from "electron"

export default class Main {
    static mainWindow : Electron.BrowserWindow;
    static application : Electron.App;
    static BrowserWindow : Electron.BrowserWindow;
    private static onWindowAllClosed() {
        if(process.platform != "darwin") {
            Main.application.quit();
        }
    }
    private static onClose() {
        Main.mainWindow.destroy()
    }
    private static onReady() {
        Main.mainWindow = new BrowserWindow({ width : 800, height : 600});
        Main.mainWindow.loadURL("file://" + __dirname + "index.html");
        Main.mainWindow.on("closed", Main.onClose)
    }
    static main(app: Electron.App, browserWindow : typeof BrowserWindow) {
        Main.BrowserWindow = new browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}