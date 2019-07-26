const electron = require ("electron");
const { ipcRenderer } = electron;

// eslint-disable-next-line @lwc/lwc/no-document-query
const utilElectron  = document.querySelector ('#utilElectron');

const evMap = {
    lastId : 0,
    callbacks : {}
}
utilElectron.addEventListener ("toelectron", event => {
    const callBackId = evMap.lastId ++;
    if (evMap.callbacks[callBackId]) {
        throw new Error("Callback ID already used");
    }
    const detail = event.detail;
    detail.callBackId = callBackId;
    evMap.callbacks[callBackId] = detail.callback;

    switch (detail.type) {
        case "showDialog" :
            ipcRenderer.send("showDialog", detail);
            break;
        default :
            // eslint-disable-next-line no-alert
            alert("Invalid request");
            break;
    }
});
ipcRenderer.on ("fromElectron", (event, detail) => {
    const callBackId = detail.callBackId;
    const callback = evMap.callbacks[callBackId];

    delete evMap.callbacks[callBackId];

    callback (detail);
});