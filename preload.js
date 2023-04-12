const { contextBridge, ipcRenderer, shell } = require('electron')

contextBridge.exposeInMainWorld('api',{
  changeTitle: (newTitle) => {
    ipcRenderer.send('updateTitle', newTitle)
    // 主进程关闭沙盒模式后，可以使用shell打开网页
    // shell.openExternal('https://www.baidu.com')
  }
})