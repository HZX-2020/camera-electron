const {
  BrowserWindow,
  BrowserView,
  app,
  ipcMain,
  Notification,
  shell,
  dialog,
} = require("electron");
const path = require("path");
let win;
const createWindow = () => {
  win = new BrowserWindow({
    // width: 800,
    // height: 600,
    width: 300,
    height: 300,
    // minWidth: 200,
    // minHeight: 200,
    frame: false,
    transparent: true,
    x: 800,
    y: 400,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
      //关闭沙盒模式
      // sandbox: false,
    },
    autoHideMenuBar: false,
    // icon: "logo.png",
    // 隐藏任务栏图标
    skipTaskbar: false,
  });
  // win.webContents.openDevTools();
  win.loadFile("index.html");
  //捕获a标签的打开事件，使用系统浏览器打开，并阻止新窗口打开
  // win.webContents.setWindowOpenHandler((details) => {
  //   shell.openExternal(details.url);
  //   //action:deny 拒绝electron新建窗口打开
  //   //action:allow 允许electron新建窗口打开
  //   return { action: "deny" };
  // });
};
app.whenReady().then(async () => {
  createWindow();
  //隐藏苹果dock图标
  if (process.platform == "darwin") app.dock.hide();
});

ipcMain.on("updateTitle", (event, value) => {
  console.log(value);
  BrowserWindow.fromWebContents(event.sender).title = value;
  // 改变窗口位置
  // win.setPosition(100, 100);
  // 改变窗口尺寸
  // win.setSize(200, 200, true);
  // dialog.showErrorBox("通知", "你没有接收协议");
  // dialog.showMessageBox("通知", "你没有接收协议")
});
