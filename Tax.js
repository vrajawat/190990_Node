let a = 1000000;

function taxcalculator(amount){
    if(amount<=250000){
        return amount;
    }
    else if(amount>=250001 && amount<=500000){
        return (amount*95)/100;
    }
    else if(amount>=500001 && amount<=750000){
        return (amount*90)/100;
    }
    else if(amount>=750001 && amount<=1000000){
        return (amount*85)/100;
    }
    else if(amount>=1000001 && amount<=1250000){
        return (amount*80)/100;
    }
    else if(amount>=1250001 && amount<=1500000){
        return (amount*75)/100;
    }
    else{
        return (amount*70)/100;
    }
    
}

let ans = taxcalculator(a);
console.log(ans);