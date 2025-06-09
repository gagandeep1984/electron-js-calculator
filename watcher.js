const { ipcRenderer } = require("electron");
const fs = require("fs");

(async () => {
  const watcher = fs.watch("./index.html");
  watcher.on("change", () => {
	console.log("content changed");
    ipcRenderer.send("re-render");
  });
})();