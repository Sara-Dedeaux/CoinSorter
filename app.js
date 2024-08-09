//DECLARE VARIABLES
//CONSTANTS
const coinName=["Penny", "Nickel", "Dime", "Quarter"]; 
const coinValues_arr=[.01,.05,.10,.25];
const coinWrapperCapacity_arr =[50,40,50,40];

//DATA TO MANIPULATE
let coinAmounts_arr=[300,300,300,300];
let filledWrappers_arr =[];
let coinsLeft_arr=[];
let totalValue=0;



//CALCULATIONS/PROCESS

//using the for loop to look through the arrays
for(let i=0; i<coinAmounts_arr.length; i++){
    
    //GETS THE AMOUNT OF COINS LEFT AFTER DIVIDING COINS BY WRAPPER CAPACITY
    let coinsLeft= (coinAmounts_arr[i] % coinWrapperCapacity_arr[i]);

    //UPDATE ARRAY 
    coinsLeft_arr[i]=coinsLeft;

    //GETS THE NUMBER OF COINS THAT CAN BE WRAPPED WITH NO LEFT OVERS
    let coinsToWrap=coinAmounts_arr[i]-coinsLeft_arr[i];

    //GET NUMBER OF WRAPPERS NEEDED
    let wrappedCoins= coinsToWrap/coinWrapperCapacity_arr[i];

    //UPDATE ARRAY
    filledWrappers_arr[i]=wrappedCoins;

    //GET COIN VALUE
    let coinValue= coinAmounts_arr[i]*coinValues_arr[i]
    console.log(coinName[i], " value: $", coinValue );

    //OUTPUT TO CONSOLE WRAPPERS NEEDED
    console.log(coinName[i], " wrappers needed ", filledWrappers_arr[i] );

    //OUTPUT TO CONSOLE COINS LEFT
    console.log(coinName[i], " left over ", coinsLeft_arr[i] );

    totalValue += coinAmounts_arr[i]*coinValues_arr[i];
}//end for loop

//output total value of all coins
console.log(`"Total value of all coins in dollars: $${totalValue}"`);






console.log("BEGIN CHALLENGE DATA");

//? Give me the total amount of each coin;
// ex. dime = 234;
//? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc

let sortedCoins= [0,0,0,0];
let nameOfCoin=["penny", "nickel", "dime", "quarter"];
let coinValues =[.01, .05, .10, .25];
let coinTotValue=[0,0,0,0];
let totValue=0;


var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel',
    'dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime',
    'nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter',
    'dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel',
    'nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime',
    'dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel',
    'penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel',
    'quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime',
    'dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter',
    'nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter',
    'quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime',
    'penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter',
    'penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime',
    'nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel',
    'penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter',
    'quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime',
    'quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel',
    'nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter',
    'dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter',
    'penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter',
    'nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime',
    'penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter',
    'quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny',
    'nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime',
    'quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel',
    'dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'
]//END challengeData ARRAY SET
 

//LOOP THROUGH challengeData ARRAY TO SORT - EACH TIME A COIN IS IDENTIFIED - 1 IS ADDED TO THE SPECIFIED LOCATION OF THE PARALLELL ARRAY sortedCoins
for (let i=0; i<challengeData.length; i++){

    if(challengeData[i]=== "penny"){
        sortedCoins[0]+=1;
    }else if(challengeData[i]=== "nickel"){
        sortedCoins[1]+=1;
    }else if(challengeData[i]=== "dime"){
        sortedCoins[2]+=1;
    }else if(challengeData[i]=== "quarter"){
        sortedCoins[3]+=1
    }//end if else tree

}//end for loop


//LOOP HANDLES CALCULATIONS AND OUTPUT BY USING DATA IN PARALLELL ARRAYS TO GET AMOUNT AND VALUES OF COINS
for(let i=0; i<sortedCoins.length; i++){
    //CALC. DOLLAR VALUE OF EACH COIN TYPE
    coinTotValue[i]=sortedCoins[i]*coinValues[i];

    //OUTPUT AMOUNT OF SORTED COINS
    console.log(` ${nameOfCoin[i]} amount :  ${sortedCoins[i]}`)

    //OUTPUT TOTAL DOLLAR VALUE OF EACH COIN TYPE
    console.log(`dollar amount of  ${nameOfCoin[i]} :  $${coinTotValue[i]}`)

    //CALC. DOLLAR VALUE OF ALL COINS
    totValue+= sortedCoins[i]*coinValues[i];
    

}//end for loop

//OUTPUT TOTAL DOLLAR VALUE OF ALL COINS
console.log(`Total dollar amount: $${totValue.toFixed(2)}`);


