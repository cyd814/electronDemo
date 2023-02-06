const { BrowserWindow, app } = require('electron')
const createWin = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    alwaysOnTop: true,
  })
  win.loadURL("http://localhost:5173/")
  // win.loadFile("http://localhost:5173/")
}
app.whenReady().then(() => {
  createWin()
})