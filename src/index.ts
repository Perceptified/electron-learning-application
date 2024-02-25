import { app, BrowserWindow } from "electron";
import { IpcMain } from "electron";
import * as path from "path";

export default class Main {
    static mainWindow : Electron.BrowserWindow;
    static application : Electron.App;
    static BrowserWindow : Electron.BrowserWindow;

    static createWindow() {
        let win = new BrowserWindow( {
            width: 800,
            height: 600,
            webPreferences : {
                preload : path.join(__dirname, "preload.js")
            }
        })
        win.loadFile("./pages/index.html")
    }

    private static onWindowAllClosed() {
        if(process.platform != "darwin") {
            Main.application.quit();
        }
    }
    private static onClose() {
        Main.mainWindow.destroy()
    }
    static main(app: Electron.App, browserWindow : typeof BrowserWindow) {
        Main.BrowserWindow = new BrowserWindow;
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
    }
}
app.whenReady().then(() => {
    Main.createWindow()
})
