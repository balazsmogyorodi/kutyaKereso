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
    const kiiras = tablazatHTML();
    tablazatMegjelolo.append(kiiras);





});


function tablazatHTML() {
    let kiiras = "<table class='table table-bordered table-striped'>";
    kiiras += `<tr class="table-dark"> <th> ${neve} </th> <th> ${kora} </th> <th> ${fajtaja} </th> </tr>`
    for (let index = 0; index < kutyaLista.length; index++) {
        kiiras += "<tr>"
        kiiras += `<td> ${kutyaLista[index].nev} </td> <td> ${kutyaLista[index].kor} </td> <td> ${kutyaLista[index].fajta} </td>`
        kiiras += "</tr>"
    }
    kiiras += "</table>";
    return kiiras
}