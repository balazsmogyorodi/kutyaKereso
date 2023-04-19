import  {OBJEKTUMLISTA} from "./lista.js";
const lista = OBJEKTUMLISTA

$(function () {
  $("article").html(articleElemek());
});



function articleElemek() {
  let kutyaDobozok = "";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    kutyaDobozok += `<div class="kutya">
       <img src="${OBJEKTUMLISTA[index].kep}" alt="kutya" class="kutyusKepek">     
       <h3>${OBJEKTUMLISTA[index].nev}</h3>
       <h4>kora ${OBJEKTUMLISTA[index].kor} éves</h4>
       <h5>${OBJEKTUMLISTA[index].fajta}</h5>
       <button id="${index}">kosar</button>
   </div>`;
  }
  console.log(kutyaDobozok);
  return kutyaDobozok;
}
