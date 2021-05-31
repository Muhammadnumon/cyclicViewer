'use strict';
let index=0;
const photos=[
{id:1,src:'./img/1.png',alt:'1',},
{id:2,src:'./img/2.png',alt:'2',},
{id:3,src:'./img/3.png',alt:'3',},
{id:4,src:'./img/4.png',alt:'4',},
];
const viewEl=document.querySelector('[data-id="viewer"]');
const imgEl=viewEl.querySelector('[data-id="photo"]');
const prevEl=viewEl.querySelector('[data-action="prev"]');
const nextEl=viewEl.querySelector('[data-action="next"]');

const viewerWidget={
 rootEl:viewEl,
 imgEl,
 prevEl,
 nextEl,
};
viewerWidget.nextEl.onclick=evt=>{
if (index<3) {
    index++;
    viewerWidget.nextEl.disabled=false;
}
if (index==3) {
    viewerWidget.imgEl.src=photos[1].src;
    viewerWidget.nextEl.disabled=false;
}
bindPhotoToViewer(photos,viewerWidget.imgEl);
viewerWidget.prevEl.disabled=false;
console.log(evt);
};
viewerWidget.prevEl.onclick=evt=>{
    if (index<3) {
        index--;
        viewerWidget.imgEl.src=photos[3].src;
        viewerWidget.imgEl.alt=photos[3].alt;
    }
    if (index==3) {
        index--;
        viewerWidget.prevEl.disabled=false;
    }
    if (index<=2) {
        viewerWidget.prevEl.disabled=false;
    }
    if (index<1) {
        viewerWidget.prevEl.disabled=false;
    }

    bindPhotoToViewer(photos,viewerWidget.imgEl);
    viewerWidget.nextEl.disabled=false;
    console.log(evt);
    };

function bindPhotoToViewer(photo,el) {
    el.src=photo[index].src;
    el.alt=photo[index].alt;
}