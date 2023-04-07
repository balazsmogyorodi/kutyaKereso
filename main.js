import { OBJEKTUMLISTA } from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
import { listabaUjelem, alapNav } from "./webkkiras.js";
const kuka = `<img src="képek/kuka.png" alt="tölés" class="kuka"`;
const round = `class="szort"`;
const kutya = "";
const szortirozo = `"<tr id ='semmi'> <th id='nev'${round}> Név: </th> <th id='kor'  ${round}>Kor:</th><th id='fajta'  ${round} > Fajta: </th> <th class='üres'> </th></tr>";`;
console.log(szortirozo);
$(function () {
  init();
});
function init() {
  $("nav").html(alapNav());
  const articleElem = $("article");
  const lista = OBJEKTUMLISTA;
  let tablazat = tablazatKeszit(lista);
  console.log(tablazat);
  articleElem.html(tablazat);
  const thElem = $(".szort");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(lista, kulcs);
    init();
  });
  kukazas();
  const gomb = $("#add");
  gomb.on("click", function () {
    const ujElemek = $("nav");
    let uj = listabaUjelem();
    ujElemek.html(uj);
    hozzaad();
  });
}

function hozzaad() {
  const ujAdat = $("#feltolt");
  let kutyaKor = "";
  let kutyaFaj = "";
  let kutyaNev = "";
  $("#nev").keyup(function () {
    kutyaNev = $(this).val();
  });
  $("#kor").keyup(function () {
    kutyaKor = $(this).val();
  });
  $("#fajta").keyup(function () {
    kutyaFaj = $(this).val();
  });
  ujAdat.on("click", function () {
    if ((kutyaNev.length < 3) || (kutyaFaj.length < 3) || (kutyaKor == "")) {
      const hiba = $(".warning");
      hiba.html("<p>Kérem mindegyik mezőbe írjon megfelelő mennyiségű karaktert!</p>")
        kutyaNev == "";
        kutyaKor == "";
        kutyaFaj == "";
      hozzaad();
    } else {
      OBJEKTUMLISTA.push({ nev: kutyaNev, kor: kutyaKor, fajta: kutyaFaj });
      console.log(kutyaNev);
      console.log(kutyaKor);
      console.log(kutyaFaj);
      init();
    }
  });
}

function meghatarozo(ertek) {
  ertek.keyup(function () {
    kutya = $(this).val();
    return kutya;
  });
}

function kukazas() {
  const kukaIcon = $(".kuka");
  kukaIcon.on("click", function () {
    const kuka = $(this);
    const sor = kuka.attr("id");
    OBJEKTUMLISTA.splice(sor, 1);
    init();
  });
}

function tablazatKeszit(OBJEKTUMLISTA) {
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";
  tablazat += szortirozo;
  tablazat += "</thead>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    console.log(OBJEKTUMLISTA[index]);
    console.log(index);
    tablazat += `<tr id="${index}">`;
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
      `id="${index}">` +
      "</td>";
    tablazat += "</tr>";
  }
  tablazat += "</table>";
  return tablazat;
}
