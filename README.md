# github2codeSandBox
This bookmarklet opens codeSandBox page from github page.

## Compressed code
```js
javascript: (function(){if("github.com"!==location.hostname)alert("Not Github");else{var a=location.href.split("/");a="tree"===a[5]||"blob"===a[5]?a.slice(3,7).join("/"):"pull"===a[5]?document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable head-ref")[0].innerHTML.match(/href=".+?"/)[0].match(/".+"/)[0].replace(/"\//,"").replace(/"/,""):a.slice(3,5).join("/");window.open("https://codesandbox.io/s/github/"+a)}})();
```
