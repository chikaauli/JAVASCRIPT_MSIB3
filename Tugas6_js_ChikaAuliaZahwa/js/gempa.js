//----------- Membuat Class -------------
let nomor = 0
  class gempa {
    constructor(lokasi, skala) {
      this.lokasi = lokasi;
      this.skala = skala;

      nomor++
      this.nomor = nomor
    }

    dampak() {
      if (this.skala <= 2) this.dampakGempa = "Tidak Terasa";
      else if (this.skala >= 2 && this.skala <= 4)
        this.dampakGempa = "Bangunan retak-retak";
      else if (this.skala >= 4 && this.skala <= 6)
        this.dampakGempa = "Bangunan Roboh";
      else if (this.skala >= 6) this.dampakGempa = "Berpotensi Tsunami";
      else this.dampakGempa = "";

      return this.dampakGempa;
    }
    infoGempa() {
      return `
      <tr>
        <td>${this.nomor}</td>
        <td>${this.lokasi}</td>
        <td>${this.skala}</td>
        <td>${this.dampak()}</td>
      </tr>`;
    }
  }
//--------------- Membuat Object -----------------
  g1 = new gempa('Bukit Tinggi', 2);
  g2 = new gempa('Suka bumi', 3);
  g3 = new gempa('Aceh', 5);
  g4 = new gempa('Kabumen', 7);
  g5 = new gempa('kabupaten Ladak', 2);
  g6 = new gempa('Bandung', 4);
  g7 = new gempa('Jakarta', 6);
  g8 = new gempa('Bengkulu', 3);
  g9 = new gempa('Bali', 5);
  g10 = new gempa('Bengkulu', 8);
  
  let isiTabel = ""
//------------ attribute from class ---------------
isiTabel += g1.infoGempa();
  isiTabel += g2.infoGempa();
  isiTabel += g3.infoGempa();
  isiTabel += g4.infoGempa();
  isiTabel += g5.infoGempa();
  isiTabel += g6.infoGempa();
  isiTabel += g7.infoGempa();
  isiTabel += g8.infoGempa();
  isiTabel += g9.infoGempa();
  isiTabel += g10.infoGempa();  

  let div = document.getElementById("isitabel");
  div.innerHTML = isiTabel