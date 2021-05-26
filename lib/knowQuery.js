function $(param) {
    if (typeof param == 'string'|| param instanceof String) {
        return document.querySelector(param);
    }
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

    if (Object.values(headers).indexOf('application/json') > -1) {
        return response.json();
    } else {
        return response.text();
    }
}