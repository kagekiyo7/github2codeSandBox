# github2codeSandBox
This bookmarklet opens codeSandBox page from github page.

## Compressed code
```js
javascript:(function(){if("github.com"!==location.hostname)alert("Not Github");else{var a=location.href.split("/");a="tree"===a[5]||"blob"===a[5]?a.slice(3,7).join("/"):"pull"===a[5]?document.querySelector(".commit-ref.css-truncate.user-select-contain.expandable.head-ref > .no-underline").getAttribute("href").replace(/\//,""):a.slice(3,5).join("/");window.open("https://codesandbox.io/s/github/"+a)}})();
```
