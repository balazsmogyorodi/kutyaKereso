import { OBJEKTUMLISTA } from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
const kuka = `<img src="képek/kuka.png" alt="tölés" class="kuka"`;
const round = `class="szort"`;
const szortirozo = `"<tr id ='semmi'> <th id='nev'${round}> Név: </th> <th id='kor'  ${round}>Kor:</th><th id='fajta'  ${round} > Fajta: </th> <th class='üres'> </th></tr>";`
console.log(szortirozo);
$(function () {
  init();
});

function init() {
  console.log("hi");
  const lista = OBJEKTUMLISTA; 
  const articleElem = $("article");
  let tablazat = tablazatKeszit(lista);
  console.log(tablazat);
  articleElem.html(tablazat);
  const thElem = $(".szort");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(lista, kulcs);
    console.log(lista);
    init();
  });
  kukazas();

}
function kukazas() {
  const kukaIcon = $(".kuka");
  kukaIcon.on("click", function () {
    const kuka = $(this);
    const sor = kuka.attr("id");
    OBJEKTUMLISTA.splice(sor,1)
    init()
  });
 
}




function tablazatKeszit(OBJEKTUMLISTA) {
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";
  tablazat += szortirozo;
  tablazat += "</thead>";

  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    console.log(OBJEKTUMLISTA[index])
    console.log(index)
    tablazat += `<tr id="${OBJEKTUMLISTA[index].id}">`;
    tablazat +=
      "<td>" +
      OBJEKTUMLISTA[index].nev +
      "</td>" +
      "<td>" +
      OBJEKTUMLISTA[index].kor +
      "</td>" +
      "<td>" +
      OBJEKTUMLISTA[index].fajta +
      "</td>" +
      "<td>" +
      kuka +
      `id="${OBJEKTUMLISTA[index].id}">` +
      "</td>";
    tablazat += "</tr>";
  }
  tablazat += "</table>";

  return (tablazat);
}
