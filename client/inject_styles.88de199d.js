export default function(e){return Promise.all(e.map((function(e){return new Promise((function(t,n){var r=new URL(e,import.meta.url),l=(""+r).substring(document.baseURI.length),o=document.querySelector('link[rel=stylesheet][href="'+l+'"]')||document.querySelector('link[rel=stylesheet][href="'+r+'"]');o||((o=document.createElement("link")).rel="stylesheet",o.href=r,document.head.appendChild(o)),o.sheet?t():(o.onload=function(){return t()},o.onerror=n)}))})))}
