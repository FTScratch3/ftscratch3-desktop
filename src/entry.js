const {app, BrowserWindow} = require('electron');

// Global reference to the window
let win;

function createWindow() {
    win = new BrowserWindow({width: 1100, height: 800});
    win.loadFile('index.html');

    win.on('closed', () => {
        win = null
    })
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
