# github2codeSandBox
This bookmarklet opens codeSandBox page from github page.

## Compressed code
```js
javascript: (function(){if("github.com"!==location.hostname)alert("Not Github");else{var a=location.href.split("/");if("tree"===a[5])a=a.slice(3,7).join("/");else if("pull"===a[5])a=document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable head-ref")[0].innerHTML.match(/href=".+?"/)[0].match(/".+"/)[0].replace(/"\//,"").replace(/"/,"");else if(5===a.length||6===a.length)a=a.slice(3,5).join("/");else{alert("Unsupported URL");return}window.open("https://codesandbox.io/s/github/"+a,
"_blank")}})();
```
