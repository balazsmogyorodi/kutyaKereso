
export function szuLista(kulcs, adatLista, szuresiFeltetel) {

                      //OBJEKTUMLISTA//
            const szurtiLista = adatLista.filter(function (elem) {
                let szf = "";
                if (typeof elem[kulcs] == "number") {
                    if(szuresiFeltetel == "=") {
                        szf = "==" + szuresiFeltetel;
                    } else{
                            szf = szuresiFeltetel;
                    }
                        return eval(elem[kulcs] + szf);
                } else {
                    return elem[kulcs].toUpperCase().includes(szuresiFeltetel.toUpperCase());
                        
                }
            });
            return szurtiLista;


    


}