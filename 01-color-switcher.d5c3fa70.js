let t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(()=>{t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),a.addEventListener("click",(()=>{clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.d5c3fa70.js.map
