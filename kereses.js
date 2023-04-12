
export function szuLista(mit, OBJEKTUMLISTA, adatLista) {

    if (OBJEKTUMLISTA == ""){
        return adatLista
    }else{                      //OBJEKTUMLISTA//
            const szurtiLista = adatLista.filter(function (elem) {
                let szf = "";
                if (typeof elem[mit] == "number") {
                    if(szuresFeltetel[0] == "=") {
                        szf = "==" + szuresFeltetel;
                    } else{
                            szf = szuresFeltetel;
                    }
                        return eval(elem[mit] + szf);
                } else {
                    return elem[mit].toUpperCase().includes(szuresiFeltetel.toUpperCase());
                        
                }
                

            });
            return szurtiLista;


    }


}