//Angkot is operating well
var noAngkot = 1;
var angkotOperating = 6;
var totalAngkot = 10;

while (noAngkot <= angkotOperating) {
    console.log(`Angkot No. ${noAngkot} is operating well`);
        noAngkot++;
}

for (noAngkot; noAngkot <= totalAngkot; noAngkot++) {
    console.log(`Angkot No. ${noAngkot} is not operating properly`);
}