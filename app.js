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
    
    //GETS THE AMOUNT OF COINS LEFT AFTER DIVIDING 
    let coinsLeft= (coinAmounts_arr[i] % coinWrapperCapacity_arr[i]);

    //UPDATE ARRAY 
    coinsLeft_arr[i]=coinsLeft;

    //GETS THE NUMBER OF COINS THAT CAN BE WRAPPED
    let coinsToWrap=coinAmounts_arr[i]-coinsLeft_arr[i];

    //GET NUMBER OF WRAPPERS NEEDED
    let wrappedCoins= coinsToWrap/coinWrapperCapacity_arr[i];

    //UPDATE ARRAY
    filledWrappers_arr[i]=wrappedCoins;

    //OUTPUT TO CONSOLE WRAPPERS NEEDED
    console.log(coinName[i], " wrappers needed ", filledWrappers_arr[i] );

    //OUTPUT TO CONSOLE COINS LEFT
    console.log(coinName[i], " left over ", coinsLeft_arr[i] );

    totalValue += coinAmounts_arr[i]*coinValues_arr[i];
}//end for loop

//output total value of all coins
console.log(`"Total value of all coins in dollars:${totalValue}"`);
