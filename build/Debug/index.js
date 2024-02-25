"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class Main {
    static createWindow() {
        let win = new electron_1.BrowserWindow({
            width: 800,
            height: 600
        });
        win.loadFile("./pages/index.html");
    }
    static onWindowAllClosed() {
        if (process.platform != "darwin") {
            Main.application.quit();
        }
    }
    static onClose() {
        Main.mainWindow.destroy();
    }
    static main(app, browserWindow) {
        Main.BrowserWindow = new electron_1.BrowserWindow;
        Main.application = app;
        Main.application.on("window-all-closed", Main.onWindowAllClosed);
    }
}
exports.default = Main;
electron_1.app.whenReady().then(() => {
    Main.createWindow();
});
//# sourceMappingURL=index.js.map