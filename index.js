/* empty css                      */import{i as a,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="47332202-20d723453e83dbf57917d8670";function h(i){const s=`https://pixabay.com/api/?${new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function g(i){return i.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:n,downloads:m})=>`
        <li class="img-card">
          <div class="img-img">
            <a class="gallery-link" href="${s}">
              <img class="gallery-image" src="${r}" alt="${o}" />
            </a>
          </div>
          <div class="img-info">
            <ul class="img-info-list">
              <li><h3>Likes</h3><p>${e}</p></li>
              <li><h3>Views</h3><p>${t}</p></li>
              <li><h3>Comments</h3><p>${n}</p></li>
              <li><h3>Downloads</h3><p>${m}</p></li>
            </ul>
          </div>
        </li>
      `).join("")}function y(i,r){i.innerHTML=r}function u(i){i.innerHTML=""}a.settings({position:"topRight"});const L=document.querySelector(".js-search-form"),b=document.querySelector("#query"),d=document.getElementById("loader"),c=document.querySelector(".image-cards");let l;const v=new f(".image-cards a");L.addEventListener("submit",i=>{if(i.preventDefault(),u(c),l=b.value.trim(),!l){a.warning({title:"Error",message:"Please enter a searched word"});return}d.classList.remove("disabled"),h(l).then(r=>{if(r.hits.length===0){a.warning({title:"No Results",message:"No images found for your query."}),u(c);return}const s=g(r.hits);y(c,s),v.refresh()}).catch(r=>{console.error("Error fetching images:",r),a.error({title:"Error",message:`Failed to fetch images: ${r.message}`})}).finally(()=>{d.classList.add("disabled")})});
//# sourceMappingURL=index.js.map
