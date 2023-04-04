function rendezesSzovegSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
      if(a[kulcs] > b[kulcs]){
          return +1;
      }else{
          return -1;
      }
    });
  }
  function rendezesKorSzerint(lista, kulcs) {
    lista.sort(function (a, b) {
      return a[kulcs] - b[kulcs];
    });
  }
  export function rendezesObjektum(lista, kulcs) {
    if (typeof kulcs == "number") {
      rendezesKorSzerint(lista, kulcs);
    } else {
      rendezesSzovegSzerint(lista, kulcs);
    }
  }