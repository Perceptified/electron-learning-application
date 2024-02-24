import {app, BrowserWindow} from "electron"
import Main from "./index"

app.whenReady().then(() => {
    Main.main(app, BrowserWindow)
})
