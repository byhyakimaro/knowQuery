# KnowQuery JS Lib 

> uma lib para facilitar o uso no front end!

## **Funçoes**
* Requests Promise!
* QuerySelector with $

### Features

- [x] Requests Promise
- [x] QuerySelector
- [x] onClick

![Alt Text](https://i.imgur.com/txGtREu.gif)

Site Example - [Examples](https://knowquery.knownetworkssec.repl.co/examples)

### Usage

```html
<script src="https://knowquery.knownetworkssec.repl.co/lib/knowQuery.js"></script>
```

<details><summary><b>Examples</b></summary>

```js
(async() => {
		const response = await $.get({
				url: 'https://www.proxyscan.io/api/proxy?port=80&level=elite',
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
		});
		$('body').html(`<p>${response[0].Ip}:${response[0].Port}</p>`);
		$('p').on('click', () => {
			alert('knowQuery');
		});
		$('p').css('color', 'red');
})();
```
  
</details>
