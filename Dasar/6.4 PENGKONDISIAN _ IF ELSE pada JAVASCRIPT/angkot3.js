var noAngkot = 1;
var totalAngkot = 10;
var angkotOperating = 6;

for (noAngkot; noAngkot <= totalAngkot; noAngkot++) {
    if (noAngkot <= angkotOperating) {
        console.log(`Angkot No. ${noAngkot} is operating well`);
    }
    else{
        console.log(`Angkot No. ${noAngkot} is not operating properly`);
    }
}