import { app, BrowserWindow } from "electron"

export default class Main {
    static mainWindow : Electron.BrowserWindow;
    static application : Electron.App;
    static BrowserWindow : Electron.BrowserWindow;

    static createWindow() {
        let win = new BrowserWindow( {
            width: 800,
            height: 600
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