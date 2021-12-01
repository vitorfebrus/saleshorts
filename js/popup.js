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


document.getElementById('btn').onclick = () => {
  	const sfid = document.getElementById('sfid').value
  	openId(sfid)
}



function openId (sfid) {
	chrome.tabs.query({ lastFocusedWindow: true, active: true }, tabs => {
		console.log(tabs);
		let url = tabs[0].url

		if (sfid.match(idRegex)) {
			url = splitUrl(url);
			url = url + '/' + sfid
			console.log(url);
			window.open('https://' + url, '_blank')

		}
	})
}

function splitUrl (url) {
	url = url.replace('https://', '')
	url = url.replace('http://', '')
	return url.split('/')[0]
}


