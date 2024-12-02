/* empty css                      */import{i as a,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="47332202-20d723453e83dbf57917d8670";function h(i){const s=`https://pixabay.com/api/?${new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function g(i){return i.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:n,downloads:m})=>`
        <li class="img-card">
          <div class="img-img">
            <a class="gallery-link" href="${s}">
              <img class="gallery-image" src="${t}" alt="${o}" />
            </a>
          </div>
          <div class="img-info">
            <ul class="img-info-list">
              <li><h3>Likes</h3><p>${e}</p></li>
              <li><h3>Views</h3><p>${r}</p></li>
              <li><h3>Comments</h3><p>${n}</p></li>
              <li><h3>Downloads</h3><p>${m}</p></li>
            </ul>
          </div>
        </li>
      `).join("")}function y(i,t){i.innerHTML=t}function u(i){i.innerHTML=""}a.settings({position:"topRight"});const L=document.querySelector(".js-search-form"),b=document.querySelector("#query"),d=document.getElementById("loader"),c=document.querySelector(".image-cards");let l;const v=new f(".image-cards a");L.addEventListener("submit",i=>{if(i.preventDefault(),u(c),l=b.value.trim(),!l){a.warning({title:"Error",message:"Please enter a searched word"});return}d.classList.remove("disabled"),setTimeout(()=>{h(l).then(t=>{if(t.hits.length===0){a.warning({title:"No Results",message:"No images found for your query."}),u(c);return}const s=g(t.hits);y(c,s),v.refresh()}).catch(t=>{console.error("Error fetching images:",t),a.error({title:"Error",message:`Failed to fetch images: ${t.message}`})}).finally(()=>{d.classList.add("disabled")})},2e3)});
//# sourceMappingURL=index.js.map
