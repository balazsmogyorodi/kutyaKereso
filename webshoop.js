import { OBJEKTUMLISTA } from "./lista.js";
const lista = OBJEKTUMLISTA
const kosar = [{szam: 1}];

$(function () {
  $("section").html(articleElemek());
  $("aside").html(asideElemek());
});



function articleElemek() {
  let kutyaDobozok = "";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    kutyaDobozok += `<div class="kutya">
       <img src="${OBJEKTUMLISTA[index].kep}" alt="kutya" class="kutyusKepek">     
       <h3>${OBJEKTUMLISTA[index].nev}</h3>
       <h4>kora ${OBJEKTUMLISTA[index].kor} éves</h4>
       <h5>${OBJEKTUMLISTA[index].fajta}</h5>
       <button class="elem" id="${index}">kosar</button>
   </div>`;
  }
  console.log(kutyaDobozok);
  return kutyaDobozok;
}


function asideElemek() {
  const termek = $(".elem");
  termek.on("click", function () {
    const kutya = $(this);
    const doboz = kutya.attr("id");
    kosar[0] = OBJEKTUMLISTA[doboz];
    console.log(kosar.nev);

   

  });
}