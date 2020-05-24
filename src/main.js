const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')
const config = require('./config')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    alwaysOnTop: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (config.url != '') mainWindow.loadURL(config.url)
  else mainWindow.loadFile('./initialPage/index.html')

}

const toggleDevTools = () => {
  mainWindow.webContents.toggleDevTools()
}

const createShortcuts = () => {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).then(createShortcuts)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})