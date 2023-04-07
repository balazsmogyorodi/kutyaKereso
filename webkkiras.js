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
        <input type="text" id="nev" name="nev" />  
      </div>     
      <div>
        <label for="kor">Kutya életkora:</label>
        <br />
        <input type="text" id="kor" name="kor" />
      </div>
      <div>
        <label for="fajta">Kutya fajta:</label>
        <br />
        <input type="text" id="fajta" name="fajta" />
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