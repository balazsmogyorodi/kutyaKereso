import { OBJEKTUMLISTA } from "./lista.js";
import { rendezesObjektum } from "./rendezes.js";
import { listabaUjelem, alapNav, sorvaltozo, searchKereses } from "./webkkiras.js";
import { szuLista } from "./kereses.js";
let kapcsolo = true;
const kuka = `<img src="képek/kuka.png" alt="tölés" class="kuka"`;
const round = `class="szort"`;
const kutya = "";
const atalakitoIcon = `<img src="képek/ceruza.png" alt="tölés" class="cerka" width="3%"`
const szortirozo = `<tr id ='semmi'> <th id='nev'${round}> Név: </th> <th id='kor'  ${round}>Kor:</th><th id='fajta'  ${round} > Fajta: </th> <th class='üres'> </th> <th class="üres"> </th></tr>`;
console.log(szortirozo);
$(function () {
  $("nav").html(alapNav());
  init(OBJEKTUMLISTA);
});
function init(lista) {
  const articleElem = $("article");
  let tablazat = tablazatKeszit(lista);
  articleElem.html(tablazat);
  const thElem = $(".szort");
  thElem.on("click", function () {
    let kulcs = $(event.target).attr("id");
    rendezesObjektum(lista, kulcs);
    init(lista);
  });
  modifikalas();
  kukazas();
  const gomb = $("#add");
  gomb.on("click", function () {
    const ujElemek = $("nav");
    let uj = listabaUjelem();
    ujElemek.html(uj);
    hozzaad();
  });
  feketeFeher();
  search();


}

function feketeFeher() {

  const kapcsol = $("#villany")
  kapcsol.on("click", function () {
    kapcsolo = !kapcsolo;
    if (kapcsolo == true) {
      $("body").removeClass("sotet");
      $("body").addClass("vilagos");
    }
    else {
      $("body").removeClass("vilagos");
      $("body").addClass("sotet");


    }










  });
}


function search() {

  let kutyaKor = "";
  let kutyaFaj = "";
  let kutyaNev = "";
  $("#nevKeres").keyup(function () {
    console.log("hello");
    kutyaNev = $(this).val();
    let szuresEredmeny = szuLista("nev", OBJEKTUMLISTA, kutyaNev);
    init(szuresEredmeny);
  });
  $("#korKeres").keyup(function () {
    kutyaKor = $(this).val();
    let szuresEredmeny = szuLista("kor", OBJEKTUMLISTA, kutyaKor);
    init(szuresEredmeny);
  });
  $("#fajtaKeres").keyup(function () {
    kutyaFaj = $(this).val();
    let szuresEredmeny = szuLista("fajta", OBJEKTUMLISTA, kutyaFaj);
    init(szuresEredmeny);
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
      init(OBJEKTUMLISTA);
    }
  });
}

function modifikalas() {
  const modificIcon = $(".cerka");
  modificIcon.on("click", function () {
    const ceruzaSor = $(this).attr("id");
    console.log(ceruzaSor);
    const sorValtozas = $(`#sor${ceruzaSor}`);
    const ujAdatSor = sorvaltozo(OBJEKTUMLISTA[ceruzaSor]);
    sorValtozas.html(ujAdatSor);

    const megse = $("#vissza");

    megse.on("click", function () {
      init(OBJEKTUMLISTA);

    });
    adatVarialas(ceruzaSor);

  });

}



function adatVarialas(ceruzaSor) {
  let kutyaKor = OBJEKTUMLISTA[ceruzaSor].kor;
  let kutyaFaj = OBJEKTUMLISTA[ceruzaSor].fajta;
  let kutyaNev = OBJEKTUMLISTA[ceruzaSor].nev;
  $("#neve").keyup(function () {
    kutyaNev = $(this).val();
  });
  $("#kora").keyup(function () {
    kutyaKor = $(this).val();
  });
  $("#fajtaja").keyup(function () {
    kutyaFaj = $(this).val();
  });
  $(".modos").on("click", function () {
    if ((kutyaNev.length < 3) || (kutyaFaj.length < 3) || (kutyaKor == "")) {
      console.log("visszza");
      console.log(kutyaNev);
      console.log(kutyaKor);
      console.log(kutyaFaj);
      modifikalas();
    }
    else {
      OBJEKTUMLISTA[ceruzaSor] = { nev: kutyaNev, kor: kutyaKor, fajta: kutyaFaj };
      init(OBJEKTUMLISTA)
    }
  });
}





function kukazas() {
  const kukaIcon = $(".kuka");
  kukaIcon.on("click", function () {
    const kuka = $(this);
    const sor = kuka.attr("id");
    OBJEKTUMLISTA.splice(sor, 1);
    init(OBJEKTUMLISTA);
  });
}

function tablazatKeszit(OBJEKTUMLISTA) {
  let tablazat = "<table class='table table-striped'>";
  tablazat += "<thead class='table-dark'>";
  tablazat += szortirozo;
  tablazat += "</thead>";
  for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
    tablazat += `<tr id="sor${index}">`;
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
    tablazat += "<td>" + atalakitoIcon + `id="${index}">` + "</td>" + "</tr>";
  }
  tablazat += "</table>";
  return tablazat;
}
