var dataset = require('./dataset.json').bankBalances;


/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
  */
  var hundredThousandairs = null;
  function gethundredThousandairs(element, index, array){

    return parseInt(element.amount) > 100000.00;

  }

  hundredThousandairs = dataset.filter(gethundredThousandairs);
// console.log("show me",hundredThousandairs);





/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
  */
  var roundedDollar = null;
  function roundIt(element){
   element.rounded = Math.round(parseFloat(element.amount));

   return element;
 }

 roundedDollar = dataset.map(roundIt);



/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
  */

  var roundedDime = null;
  function round10(element){
    var obj = {};
    obj.amount = element.amount;
    obj.state = element.state;
    obj.roundedDime = Math.round(element.amount*10)/10;
    return obj;
  }

  roundedDime = dataset.map(round10);


// set sumOfBankBalances to the sum of all amounts in bankBalances
var sumOfBankBalances = null;
/*  function sumItUp(element){
    var sums = 0;
    var sums += element.amount;
    return sums;
  }*/

  var sumItUp = function(previous, current) {
    current = parseFloat(current.amount);
    return previous + current;
  };
  sumOfBankBalances = Math.round(dataset.reduce(sumItUp,0)* 1000)/1000;


/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
  */
  var sumOfInterests = null;
  var selectStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE']
  function filterStates(elem) {

    return selectStates.indexOf(elem.state) > -1;
  }

  console.log(dataset.filter(filterStates));

  function totalTax(prev, elem) {
    var bal = parseFloat(elem.amount);
    var amount = parseFloat((bal * 0.189).toFixed(2));
    return prev + amount;
  }

  sumOfInterests = Number(dataset.filter(filterStates).reduce(totalTax, 0).toFixed(2));




/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
  */
  var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
      */
      var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state
  where the sum of amounts in the state is
    less than 1,000,000
    */
    var lowerSumStates = null;

/*
  set higherStateSums to be the sum of
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
      */
      var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
  */
  var areStatesInHigherStateSum = null;

/*
  Stretch Goal && Final Boss

  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
  */
  var anyStatesInHigherStateSum = null;


  module.exports = {
    hundredThousandairs : hundredThousandairs,
    roundedDollar : roundedDollar,
    roundedDime : roundedDime,
    sumOfBankBalances : sumOfBankBalances,
    sumOfInterests : sumOfInterests,
    sumOfHighInterests : sumOfHighInterests,
    stateSums : stateSums,
    lowerSumStates : lowerSumStates,
    higherStateSums : higherStateSums,
    areStatesInHigherStateSum : areStatesInHigherStateSum,
    anyStatesInHigherStateSum : anyStatesInHigherStateSum
  };
