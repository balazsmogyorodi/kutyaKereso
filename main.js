const kutyaLista = [
    { nev: "Dézi", kor: "14", fajta: "keverék" },
    { nev: "Fruzsina", kor: "12", fajta: "foxiterrier" },
    { nev: "Bodri", kor: "10", fajta: "puli" },
    { nev: "Daci", kor: "7", fajta: "keverék" },
]
const neve = "név";
const kora = "kor";
const fajtaja = "fajta";







$(function () {
    const tablazatMegjelolo = $("article")
    const kiiras = tablazatHTML(rendezo);
    tablazatMegjelolo.append(kiiras);
    const sorrend = $('#rendezo th')
    sorrend.on("click", rendezes);





});


function tablazatHTML(rendezo) {
    let kiiras = "<table class='table table-bordered table-striped'>";
    kiiras += `<tr class="table-dark" id="rendezo"> <th id="nev"> ${neve} &#8645 </th > <th id="kor"> ${kora} &#8645 </th> <th id="faj"> ${fajtaja} &#8645 </th> </tr>`
    for (let index = 0; index < rendezo.length; index++) {
        kiiras += "<tr>"
        kiiras += "<td>" + rendezo[index].nev + "</td> <td>" + rendezo[index].kor + "</td> <td>" + rendezo[index].fajta + "</td>";
        kiiras += "</tr>"
    }
    kiiras += "</table>";
    return kiiras
}

function rendezes() {
    const esemeny = $(event.target);
    kulcs = esemeny.attr("id");
    console.log(kulcs);
    rendezo(kulcs);

}



function rendezesSzovegszerint(kulcs) {
    kutyaLista.sort(function (a, b) {
        if (a[kulcs] > b[kulcs]) {
            return +1;
        } else {
            return -1;
        }
    });
}
function rendezesSzamszerint(kulcs) {
    kutyaLista.sort(function (a, b) {
      return a[kulcs] - b[kulcs];
    });
  }


function rendezo(kulcs) {
    if (kulcs == "nev") {
        rendezesSzovegszerint(kulcs);
    }
    if (kulcs == "kor") {
        rendezesSzamszerint(kulcs);
    }
    if (kulcs == "faj") {
        rendezesSzovegszerint(kulcs);
    }
}