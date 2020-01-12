javascript: (() => {
    if (location.hostname !== "github.com") {
        alert("Not Github");
        return
    }
        
    const nowUrlArray = location.href.split("/");
    const codeSandBoxUrl = "https://codesandbox.io/s/github/";
    let githubUrl = "";

    if (nowUrlArray[5] === "tree") {
        githubUrl = nowUrlArray.slice(3, 7).join("/");
    } else if (nowUrlArray[5] === "pull") {
        const innerHTML = document.getElementsByClassName("commit-ref css-truncate user-select-contain expandable head-ref")[0].innerHTML;
        //<a title="kagekiyo7/motocal:Separate-additionalDamage3" class="no-underline" href="/kagekiyo7/motocal/tree/Separate-additionalDamage3"><span class="css-truncate-target">kagekiyo7</span>:<span class="css-truncate-target">Separate-additionalDamage3</span></a>
        githubUrl = innerHTML.match(/href=".+?"/)[0].match(/".+"/)[0].replace(/"\//, "").replace(/"/, "");
    } else if (nowUrlArray.length === 5 || nowUrlArray.length === 6) {
        githubUrl = nowUrlArray.slice(3, 5).join("/");
    } else {
        alert("Unsupported URL");
        return
    }
    
    window.open(codeSandBoxUrl + githubUrl, "_blank");
    })();
    
   //https://github.com/kagekiyo7/motocal/tree/Separate-additionalDamage3
   //https://codesandbox.io/s/github/kagekiyo7/motocal/tree/Separate-additionalDamage3