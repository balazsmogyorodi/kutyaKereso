export function searchKereses(){
  let elemek = 
  `<input type="text" id="searchBar" placeholder="Search...">
  <ul id="results"></ul>`;
  return elemek;

}




export function listabaUjelem() {
  let elem = `<div class="ujKutya"> <h2>Kutya hozzáadása:</h2>
  <div class="kutya">
    <div class="menu">
      <form action="get">
      <div>
        <label for="nev">Kutya neve:</label>
        <br />
        <input type="text" id="nev" name="nev" placeholder="pl: Rex" required />  
      </div>     
      <div>
        <label for="kor">Kutya életkora:</label>
        <br />
        <input type="text" id="kor" name="kor" placeholder="pl: 5" required />
      </div>
      <div>
        <label for="fajta">Kutya fajta:</label>
        <br />
        <input type="text" id="fajta" name="fajta" placeholder="pl: labrador" required />
    </div>
    <div class="gombok">
      <br>
      <input type="button" id="feltolt" name="feltolt" value="küldés" />
      <input type="reset" value="adat törlés">
      </div>
      </form>
    </div>
  </div>
  </div>
  <div class="warning"></div>
          `;
  return elem;
}
export function alapNav() {
  let elem = `<h2>Keresés</h2>
  <div class="kutya">
  
    <div class="menu">
   
      <form action="get">
      <div>
        <label for="nev">Kutya neve:</label>
        <br />
        <input type="text" id="nevKeres" name="nevKeres" /> 
        <ul id="nevResult"></ul> 
      </div>     
      <div>
        <label for="kor">Kutya életkora:</label>
        <br />
        <input type="text" id="korKeres" name="korKeres" />
        <ul id="korResult"></ul> 
      </div>
      <div>
        <label for="fajta">Kutya fajta:</label>
        <br />
        <input type="text" id="fajtaKeres" name="fajtaKeres" />
        <ul id="fajtaResult"></ul> 
    </div>
    <div class="gombok">
      <br>
      <input type="button" id="add" value="hozzáad" />
      </div>
      </form>
    </div>
  </div>`;
  return elem;
}


export function sorvaltozo(ertek){
  const kiiras = `<td><input type="text" name="neve" id="neve" value="${ertek.nev}"></td>
  <td><input type="text" name="kora" id="kora" value="${ertek.kor}"></td>
  <td><input type="text" name="fajtaja" id="fajtaja" value="${ertek.fajta}"></input></td>
  <td><input type="button" value="módositás" name="modosit" id="modosit" class="modos"></td>
  <td> <input type="button" value="mégse" name="vissza" id="vissza"></td>`;
  return kiiras



}