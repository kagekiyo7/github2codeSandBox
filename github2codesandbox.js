javascript: (() => {
    if (location.hostname !== "github.com") {
        alert("Not Github");
        return
    }
        
    const nowUrlArray = location.href.split("/");
    let githubUrl = "";

    if (nowUrlArray[5] === "tree" || nowUrlArray[5] === "blob") {
        githubUrl = nowUrlArray.slice(3, 7).join("/");
    } else if (nowUrlArray[5] === "pull") {
        githubUrl = document.querySelector(".commit-ref.css-truncate.user-select-contain.expandable.head-ref > .no-underline")
        .getAttribute("href").replace(/\//, "");
    } else {
        githubUrl = nowUrlArray.slice(3, 5).join("/");
    }
    
    window.open("https://codesandbox.io/s/github/" + githubUrl);
    })();
    
   //https://github.com/kagekiyo7/motocal/tree/Separate-additionalDamage3
   //https://codesandbox.io/s/github/kagekiyo7/motocal/tree/Separate-additionalDamage3
