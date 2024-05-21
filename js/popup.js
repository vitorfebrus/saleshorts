var urlRegex = /\/([\d]|[a-zA-Z]){15}\/|\/([\d]|[a-zA-Z]){18}\//g
var idRegex = /([\d]|[a-zA-Z]){15}|([\d]|[a-zA-Z]){18}/g

var sfid = document.getElementById('sfid');

sfid.focus();
sfid.onkeyup = (ev) => {
	if (ev.key == 'Enter') {
		ev.preventDefault();
		document.getElementById('btn').click();
	}
}

sfid.onpaste = (ev) => {
	console.log('paste');
	sfid.value = '';
}

createAutocomplete();

document.getElementById('btn').onclick = () => {
  	const sfid = document.getElementById('sfid').value
  	openId(sfid)
}



function openId (sfid) {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		let url = tabs[0].url
		url = splitUrl(url);

		if (sfid.match(idRegex)) {
			
			url = url + '/' + sfid
			console.log(url);
			window.open('https://' + url, '_blank')
		} else {
			var selected = document.getElementById("sfid").value;
			var config = sfConfigs.find((config) => {return config.configName == selected});
			
			if(config) {
				url = url + config.configURI;
				window.open('https://' + url);
			}
		}
	})
}

function splitUrl (url) {
	url = url.replace('https://', '')
	url = url.replace('http://', '')
	return url.split('/')[0]
}

function createAutocomplete() {
	var datalist = document.getElementById('sf-configs');
	for(var config of sfConfigs) {
		var option = document.createElement('option');
		option['value'] = config.configName;
		option['data-uri'] = config.configURI;
		datalist.appendChild(option);
	}
}

function getConfigNamesAndURI(configs) {
	var configList = [];
	for(var config of configs) {
		configList.push({configName: config.innerText, configURI : config.hash});
	}
	return configList;
}