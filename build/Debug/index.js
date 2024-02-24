"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class Main {
    static onWindowAllClosed() {
        if (process.platform != "darwin") {
            Main.application.quit();
        }
    }
    static onClose() {
        Main.mainWindow.destroy();
    }
    static onReady() {
        Main.mainWindow = new electron_1.BrowserWindow({ width: 800, height: 600 });
        Main.mainWindow.loadURL("file://" + __dirname + "index.html");
        Main.mainWindow.on("closed", Main.onClose);
    }
    static main(app, browserWindow) {
        Main.BrowserWindow = new browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    }
}
exports.default = Main;
//# sourceMappingURL=index.js.map