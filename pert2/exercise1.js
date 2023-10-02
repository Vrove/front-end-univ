//Buatlah fungsi yang menerima 1 input angka
//dan mengembalikan string apakah angka yang dimasukan
//adalah bilangan ganjil atau genap

let fungsi1 = function(angka){
    let cekGanjilGenap = angka % 2 == 0 ? "angka genap"  : "angka ganjil"
    console.log(cekGanjilGenap);
}

fungsi1(20)

