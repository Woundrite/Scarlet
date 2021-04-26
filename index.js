const { app, BrowserWindow } = require('electron');
const path = require("path");
const nativeImage = require('electron').nativeImage;
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

let icn = nativeImage.createFromPath(path.join(__dirname, 'img', 'icn1.png'));

function createWindow () {
  const win = new BrowserWindow({
    width: 1320,
    height: 720,
    center: true,
    minHeight: 650,
    minWidth: 600,
    icon: icn,
    frame:false,
    backgroundColor: "#16181A",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})