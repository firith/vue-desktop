const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
  onUpdateAvailable: (callback) => ipcRenderer.on('update_available', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update_downloaded', callback),
  onAppQuit: (callback) => ipcRenderer.on('quit_app', callback),
  onOperatingSystem: (callback) => ipcRenderer.on('operating_system', callback),
  quit: () => ipcRenderer.send('quit'),
  fetchOperatingSystem: () => ipcRenderer.send('operating_system'),
  restartApp: () => ipcRenderer.send('restart_app'),
})
