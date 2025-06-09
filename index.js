const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600, 
    webPreferences: {
	preload: path.join( __dirname, 'renderer.js'), 
	contextIsolation: false, 
	nodeIntegration: true,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})


app.on('window-all-closed', () => {
	if (process.platform != 'darwin') {
		app.quit();
	}
});