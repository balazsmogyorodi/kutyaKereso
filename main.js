import{OBJEKTUMLISTA} from "./lista.js";
import {rendezesObjektum} from "./rendezes.js";

const kuka = `<img src="képek/kuka.png" alt="tölés" class="kuka"`
$(function(){
    init();


  });


function init(){
  console.log("hi");
  const articleElem = $("article");
  let tablazat = tablazatKeszit(OBJEKTUMLISTA);
  console.log(tablazat);
  articleElem.html(tablazat);
  const thElem = $("th");
  thElem.on("click", function(){
    let kulcs = $(event.target).attr("id")
    rendezesObjektum(OBJEKTUMLISTA, kulcs);
    console.log(OBJEKTUMLISTA);
    init();
  });
  const kukaIcon = $(".kuka");
  kukaIcon.on("click", function(){
    const kuka = $(this);
    const sor = kuka.attr("id");
    torles(sor);


    console.log(sor);


    
 



  });


  

}
function tablazatKeszit(OBJEKTUMLISTA){
    let tablazat = "<table class='table table-striped'>";
    tablazat += " <thead class='table-dark'>";
    tablazat += "<tr> <th id='nev'> Név: </th> <th id='kor'>Kor:</th><th id='fajta'> Fajta: </th> <th> </th></tr>"
    tablazat += "</thead>" 
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
      tablazat +="<tr>";
      tablazat += "<td>" + OBJEKTUMLISTA[index].nev + "</td>" + "<td>" + OBJEKTUMLISTA[index].kor +"</td>" + "<td>" + OBJEKTUMLISTA[index].fajta +"</td>" + "<td>" + kuka + `id="${index}">` + "</td>";
      tablazat +="</tr>";
    }
    tablazat += "</table>";
    
    return tablazat += "</table>";
  
  
  }


  function torles() {


    
  }
  