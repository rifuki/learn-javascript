var noAngkot = 1;
var totalAngkot = 10;
var angkotOperating = 6;

for(noAngkot; noAngkot <= totalAngkot; noAngkot++){
    if(noAngkot <= angkotOperating && noAngkot !== 5) {
        console.log(`Angkot No. ${noAngkot} is operating well`);
    }
    else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10){
        console.log(`Angkot No. ${noAngkot} is overtime`);
    }
    else{
        console.log(`Angkot No. ${noAngkot} is not operating`);
    }
}