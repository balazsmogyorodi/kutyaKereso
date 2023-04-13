
export function szuLista(kulcs, adatLista, szuresiFeltetel) {

                      //OBJEKTUMLISTA//
            const szurtiLista = adatLista.filter(function (elem) {
                let szf = "";
                if (typeof elem[kulcs] == "number") {
                    if(szuresFeltetel[0] == "=") {
                        szf = "==" + szuresFeltetel;
                    } else{
                            szf = szuresFeltetel;
                    }
                        return eval(elem[kulcs] + szf);
                } else {
                    return elem[kulcs].toUpperCase().includes(szuresiFeltetel.toUpperCase());
                        
                }
                

            });
            return szurtiLista;


    


}