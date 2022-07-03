const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
  onUpdateAvailable: (callback) => ipcRenderer.on('update_available', callback),
  onUpdateDownloaded: (callback) => ipcRenderer.on('update_downloaded', callback),
  restartApp: () => ipcRenderer.send('restart_app')
});
