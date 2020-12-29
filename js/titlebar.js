let remote = require('electron').remote;
let app = require('electron').app;

document.getElementById('maximize').onclick = function() {
	remote.BrowserWindow.getFocusedWindow().maximize();
}

document.getElementById('minimize').onclick = function() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}

document.getElementById('quit').onclick = function() {
    remote.getCurrentWindow().close();
    app.quit();
    quit();
}