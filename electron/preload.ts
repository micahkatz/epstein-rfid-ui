const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    require: (callback) => window.require(callback),
});
