const urlIdRegex = /\/([\d]|[a-zA-Z]){15}\/|\/([\d]|[a-zA-Z]){18}\//g
const urlObjcRegex = /\/r\/([\d]|[a-zA-Z_])+\//g
const urlHostRegex = /\/([\d]|[a-zA-Z_-])+\./g

const idRegex = /([\d]|[a-zA-Z]){15}\/|\/([\d]|[a-zA-Z]){18}/g

const inspUrl = 'chrome-extension://aodjmnfhjibkcdimpodiifdjnnncaafh/inspect.html?host=';

chrome.commands.onCommand.addListener(function (command) {
	if (command == 'openInsp') {
		openInsp();
  	}
})


function openInsp () {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		console.log(tabs)
		let url = tabs[0].url
		let host = cleanStr(url.match(urlHostRegex)[0]);
		let objc = cleanStr(url.match(urlObjcRegex)[0]);
		let sfid = cleanStr(url.match(urlIdRegex)[0])

		url = createUrl(host, objc, sfid);
		console.log(url);
		window.open(url);

	})
}

function cleanStr(str) {
	return str.replaceAll('/r', '').replaceAll('/', '').replaceAll('.', '');
}

function createUrl (host, objc, sfid) {
	return inspUrl + host + '.my.salesforce.com&objectType=' + objc + '&recordId=' + sfid;
}