const { app, BrowserWindow, BaseWindow, } = require('electron');
const mpv = require('./mpv');



function play(nativeWinHandle, url) {
    const handle = mpv.mpv_create();

    mpv.mpv_set_option(handle, 'wid', 4, nativeWinHandle);
    mpv.mpv_initialize(handle);
    mpv.mpv_command(handle, ['loadfile', url, null]);
}


async function createWindow() {
    const win = new BaseWindow({
        frame: true,
        transparent: true,
    });

    const hwnd = win.getNativeWindowHandle();
    play(hwnd, 'https://www.youtube.com/watch?v=9bZkp7q19f0');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});