var TSLTLanguage = "Chinese";
var TSLT = {"Unload":true}
var XHR = new XMLHttpRequest();
XHR.open("get",`./Languages/${TSLTLanguage}.json`)
XHR.send()
XHR.onreadystatechange = (()=>{
    console.log(XHR.response)
    if(XHR.response != ""){
        TSLT = JSON.parse(XHR.response)
        localStorage.setItem(TSLTLanguage,XHR.response);
    }
})

window.addEventListener("load",()=>{
    if(TSLT.Unload){
        if(localStorage.getItem(TSLTLanguage)){
            TSLT = JSON.parse(localStorage.getItem(TSLTLanguage));
        }else{
            window.location.reload();
        }
    }
    for(var i = 1 ; i<document.all.length ; i++){
        v = document.all[i];
        if(v.getAttribute("tslt")!=null){
            v.innerText = TSLT[v.getAttribute("tslt")]
        }
    }
})