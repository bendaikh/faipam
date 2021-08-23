chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab){
    
let msg = {
txt : "show frame information"}
chrome.tabs.sendMessage(tab.id, msg);
}