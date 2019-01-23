function Zaposleni(ime, prezime, radniStaz, obrazovanje){
    this.osnovica = 50000;
    this.koeZaGodinuRada = 0.05;
    this.koeFakultet = 1.2;
    this.koeVisaSkola = 1.1;
    this.koeSrednjaSkola = 1;
    this.ime = ime;
    this.prezime = prezime;
    this.radniStaz = radniStaz;
    this.obrazovanje = obrazovanje;
}

Zaposleni.prototype.koeficijent = function (){
    izbor = document.getElementById("obrazovanje").selectedIndex;
switch (document.getElementById("obrazovanje")[izbor].value) {
    case 'fakulete': this.obrazovanjeKoeficijent = this.koeFakultet;
        break;
    case 'visaSkola': this.obrazovanjeKoeficijent = this.koeVisaSkola;
        break;
    default:this.obrazovanjeKoeficijent = this.koeSrednjaSkola;
        break;
}

}

Zaposleni.prototype.prezimeIime = function () {
    return this.prezime + " " + this.ime; 
}

Zaposleni.prototype.plata = function (){
let povisica = this.osnovica * this.koeZaGodinuRada * this.radniStaz;
let minplata = this.osnovica + povisica;
return minplata * this.obrazovanjeKoeficijent;
}
nizZaposlenih = [];


function dodajZaposlenog () {
    let ime = document.getElementById("ime").value;
    let prezime = document.getElementById("prezime").value;
    let sRadniStaz = document.getElementById("staz").value;
  
    if(!isValid(ime, prezime, sRadniStaz)){
        alert ("Zaposleni " + ime + " " + prezime + " nije dodatm neispravan unos!");
        return;
    }
    let radniStaz = parseInt(sRadniStaz);
    let obrazovanje = document.getElementById("obrazovanje").value;
    let newZaposleni = new Zaposleni (ime, prezime, radniStaz, obrazovanje);

    console.log(ime)
    console.log(prezime)
    console.log(radniStaz)
    console.log(obrazovanje)

    console.log(newZaposleni)
   
this.nizZaposlenih.push(newZaposleni);
this.nizZaposlenih[nizZaposlenih.length -1].koeficijent();
alert("Zaposleni " + newZaposleni.ime + " " + newZaposleni.prezime + " je dodat! " );



}



function prikaziZaposlene () {
    let tableHtml = '<table class="table table-striped"><tr><th>Ime i prezime</th><th>plata</th></tr>';
nizZaposlenih.sort(function (w1,w2){
    return w2.plata() - w1plata()
});
for(let i = 0; i < this.nizZaposlenih.length; i++){
    tableHtml +=  '<tr><td>' + this.nizZaposlenih[i].prezimeIime() + '</td>' + 
    '<td>'  + this.nizZaposlenih[i].plata().toFixed(2) + '</td></tr>';

}
tableHtml += '</table>';
document.getElementById("nizZaposlenih").innerHTML = tableHtml;
}

function isValid (firName, sname, staz){
    if(firName.length == 0 || sname.length == 0 || staz.length == 0){
        return false;
    } 
    let n = Number(staz);
    if(isNaN(n) || n<0){
        return false;
    }
    return true;

}


