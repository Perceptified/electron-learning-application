import { ipcRenderer } from "electron";
import { Stuff } from "./doStuff";

window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector : string, text : string) => {
        const element = document.getElementById(selector);
        if(element) {
            element.innerText = text;
        }
    };
    for(const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions] ?? "");
    }
    let myButton = document.getElementById("stuffButton");
    myButton?.addEventListener("click", function() {
        let myField = document.getElementById("stuffField");
        if(myField) {
            myField.innerText = "I AM STUFFED";
        }
    })
});
