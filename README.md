# KnowQuery JS Lib 
:star: Star us on GitHub

> uma lib para facilitar o uso no front end!

## **Funçoes**
* Requests Promise!
* QuerySelector with $

### Features

- [x] Requests Promise
- [x] QuerySelector
- [ ] onClick

![Alt Text](https://i.imgur.com/OG7q05G.gif)

### Usage

```html
<script src="https://knowquery.knownetworkssec.repl.co/knowQuery.js"></script>
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
    $('body').innerHTML = `<p>${response[0].Ip}:${response[0].Port}</p>`;
})();
```
  
</details>
