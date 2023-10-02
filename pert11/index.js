//class-in-js

//Object Literal
// const mobil1 = {
//     transmisi: 'manual',
//     bahanBakar: 'bensin',
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`mobil ${this.transmisi} dinyalakan`)
//     },
// }

// const mobil2 = {
//     transmisi: 'automatic',
//     bahanBakar: 'solar',
//     mesin: 2000,
//     nyalakanMesin: function(){
//         console.log(`mobil ${this.transmisi} dinyalakan`)
//     },
// }

class Mobil{
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi
        this.bahanBakar = bahanBakar
        this.mesin = mesin
    }
    nyalakanMesin(){
        console.log(`Mobil ${this.transmisi} dinyalakan`)
    }
}

// const mobil1 = new Mobil('manual','bensin',1500)
// mobil1.nyalakanMesin()
// const mobil2 = new Mobil('automatic','solar',1500)
// mobil2.nyalakanMesin()
// console.log(mobil1,mobil2)

class Toyota extends Mobil{
    constructor(merek, warna, transmisi, bahanBakar, mesin){
        super(transmisi,bahanBakar,mesin)
        this.merek = merek
        this.warna = warna
    }
    //overiding
    nyalakanMesin(){
        console.log(`Mobil merek ${this.merek} dinyalakan`)
    }    
}

const yaris = new Toyota('Yaris','Putih','Automatic','Bensin',2500)
yaris.nyalakanMesin()
console.log(yaris)
