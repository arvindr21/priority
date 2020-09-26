const { app, BrowserWindow, screen, Tray, Menu } = require('electron');
const path = require('path');
let mainWindow = null;

// Live Reload
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
    awaitWriteFinish: true
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    // eslint-disable-line global-require
    app.quit();
}

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    app.allowRendererProcessReuse = false;

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: width / 1.25,
        height: height,
        center: true,
        resizable: false,
        minimizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

app.on('ready', () => {
    appIcon = new Tray('public/icons/icon.dark.16.png');

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Open', click: () => mainWindow.show() },
        {
            label: 'Quit',
            click: () => {
                mainWindow.destroy();
                app.quit();
            }
        }
    ]);

    appIcon.setContextMenu(contextMenu);
});