import { OBJEKTUMLISTA } from "./lista.js";

$(function() {
    $("article").html(aruk());




});


function aruk() {
    let kiiras = ""
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        kiiras += `<div> <img src="${OBJEKTUMLISTA[index].kep}" alt=""> <h2> ${OBJEKTUMLISTA[index].nev} </h2>  <h3> fajtája: ${OBJEKTUMLISTA[index].fajta}</h3> <p> ${OBJEKTUMLISTA[index].kor} éves </p>  </div>`

        
    }
    console.log(kiiras)


}

