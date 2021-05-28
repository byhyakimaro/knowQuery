const appContent = collection => {
	collection.on = (eventName, handler) => {
    collection.addEventListener(eventName, handler);
  };
	collection.html = (data) => {
		collection.innerHTML = data;
	};
	collection.css = (event, data) => {
		collection.style[event] = data;
	};
	collection.addClass = (data) => {
		collection.classList.add(data);
	};
	collection.removeClass = (data) => {
		collection.classList.remove(data);
	};
	collection.attr = (atribute, element) => {
		collection.setAttribute(atribute, element);
	};
	collection.add = (element) => {
		collection.appendChild(document.createElement(element));
	};
}

function $(param) {
  if (typeof param == 'string'|| param instanceof String) {
		appContent(document.querySelector(param));
    return document.querySelector(param);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$.get = async function ({url, method, headers, body}) {
	const response = await fetch('https://knowquery.knownetworkssec.repl.co', {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({url: url,method: method, headers: headers, body: body})
	})
	.catch((err) => console.log(err));

	if (headers && Object.values(headers).indexOf('application/json') > -1) {
		return response.json();
	} else {
		return response.text();
	}
}