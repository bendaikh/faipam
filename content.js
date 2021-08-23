chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse){
	//console.log('this is the message: ' + message.txt);
	if(message.txt === 'show frame information'){
		let information = document.getElementsByClassName('_1OUGS');
		for(elt of information){
			for(i=0; i<3; i++){
				var infos = ["shipping information: ","Estimated Delivery: ","seller feedback: "]
				var node = document.createElement("div");
				var textNode = document.createTextNode(infos[i]);
				node.appendChild(textNode);
				elt.getElementsByClassName("_3L3yc")[0].appendChild(node);
				node.style['background-color'] = '#FF00FF';
			}
	
		}
	}
}
