const urlIdRegex = /\/([\d]|[a-zA-Z]){15}\/|\/([\d]|[a-zA-Z]){18}\//g
const urlObjcRegex = /\/r\/([\d]|[a-zA-Z_])+\//g
const urlHostRegex = /\/([\d]|[a-zA-Z_-])+\./g

const idRegex = /([\d]|[a-zA-Z]){15}\/|\/([\d]|[a-zA-Z]){18}/g

const baseUrl = 'chrome-extension://aodjmnfhjibkcdimpodiifdjnnncaafh'
const inspPath = '/inspect.html?host=';
const dataExportPath = '/data-export.html?host=';

chrome.commands.onCommand.addListener(function (command) {
	if (command == 'openInsp') {
		openInsp();
  	} else if(command == 'openSetup') {
		openSetup();
	} else if(command == 'openDevConsole') {
		openDevConsole();
	} else if(command == 'duplicateTab'){
		duplicateTab();
	} else if (command == 'openDataExport') {
		openDataExport();
	}
})


function openInsp() {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		try {
			console.log(tabs)
			let url = tabs[0].url
			let host = cleanStr(url.match(urlHostRegex)[0]);
			let objc = cleanStr(url.match(urlObjcRegex)[0]);
			let sfid = cleanStr(url.match(urlIdRegex)[0])
	
			url = createUrl(host, objc, sfid, url);
			console.log(url);
			window.open(url);	
		} catch (error) {
			console.log(error);
		}
	})
}

function duplicateTab() {
	try {
		chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
			console.log(tabs)
			let url = tabs[0].url
			window.open(url)
			chrome.tabs.update(tabs[0].id, {
				active: true
			});
		});
	} catch (error) {
		console.log(error);
	}
}

function cleanStr(str) {
	return str.replaceAll('/r', '').replaceAll('/', '').replaceAll('.', '');
}

function createUrl(host, objc, sfid, url) {
	if (url.includes('sandbox')) {
		return baseUrl + inspPath + host + '.sandbox.my.salesforce.com&objectType=' + objc + '&recordId=' + sfid;
	} else if (url.includes('develop')) {
		return baseUrl + inspPath + host + '.develop.my.salesforce.com&objectType=' + objc + '&recordId=' + sfid;
	} else {
		return baseUrl + inspPath + host + '.my.salesforce.com&objectType=' + objc + '&recordId=' + sfid;
	}
}

function openSetup() {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		try {
			console.log(tabs)
			let url = tabs[0].url
			let host = cleanStr(url.match(urlHostRegex)[0])
			console.log("url", url)
			if (url.includes('sandbox')) {
				window.open('https://' + host + '.sandbox.lightning.force.com/lightning/setup/SetupOneHome/home');
			} else if(url.includes('develop')) {
				window.open('https://' + host + '.develop.lightning.force.com/lightning/setup/SetupOneHome/home');
			} else {
				window.open('https://' + host + '.lightning.force.com/lightning/setup/SetupOneHome/home');
			}
		} catch (error) {
			console.log(error);
		}
	})
}

function openDevConsole() {

	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {

		try {
			console.log(tabs)
			let url = tabs[0].url
			let host = cleanStr(url.match(urlHostRegex)[0])
			console.log(host);

			if (url.includes('sandbox')) {
				window.open('https://' + host + '.sandbox.my.salesforce.com/_ui/common/apex/debug/ApexCSIPage', '_blank', 'resizable=0')
			} else if(url.includes('develop')) {
				window.open('https://' + host + '.develop.my.salesforce.com/_ui/common/apex/debug/ApexCSIPage', '_blank', 'resizable=0')
			} else {
				window.open('https://' + host + '.my.salesforce.com/_ui/common/apex/debug/ApexCSIPage', '_blank', 'resizable=0')
			}
		} catch (error) {
			console.log(error);
		}
	});
}

function openDataExport() {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		try {
			console.log(tabs)
			let url = tabs[0].url
			let host = cleanStr(url.match(urlHostRegex)[0]);
	
			if (url.includes('sandbox')) {
				url = baseUrl + dataExportPath + host + '.sandbox.my.salesforce.com';
			} else if(url.includes('develop')) {
				url = baseUrl + dataExportPath + host + '.develop.my.salesforce.com';
			} else {
				url = baseUrl + dataExportPath + host + '.my.salesforce.com';
			}
			
			console.log(url);
			window.open(url);
		} catch (error) {
			console.log(error);
		}
	});
}
