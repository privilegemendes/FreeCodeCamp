function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  //console.log(UNIT_AMOUNT['PENNY'] + 9)

  // total cid
  let totalcid = 0
  for (let amount in cid){
    totalcid += cid[amount][1]
  }
  //console.log(totalcid)
  // total cash - price
  let sell = cash - price
  let forsell = cash - price
  console.log(forsell)

  // set rule machie
  let newChange = cid.map(x => [x[0],0] ).reverse()
  let reTrue = []
  //console.log(newChange)
  if (sell > totalcid.toFixed(2)){
    return {status: "INSUFFICIENT_FUNDS", change: []} // first rule
  }else if (sell === totalcid){
    return {status: "CLOSED", change:[...cid]} // sec rule
  }else{ // Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,sorted in highest to lowest order
    let count = 0
    cid = cid.reverse()
    //console.log(cid)
    for (let i = 0;i < cid.length ; i++){
      if (forsell.toFixed(2) >= UNIT_AMOUNT[cid[i][0]] && cid[i][1] >= UNIT_AMOUNT[cid[i][0]] ){ //console.log(UNIT_AMOUNT[cid[i][0]])
        console.log(forsell.toFixed(2))
        console.log(cid)
        forsell -= UNIT_AMOUNT[cid[i][0]]
        newChange[i][1] += UNIT_AMOUNT[cid[i][0]]
        cid[i][1] -= UNIT_AMOUNT[cid[i][0]]
        i = 0
      }
    }// check process
    if  (forsell > 0){
      //console.log(cid)
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  }for (let i in newChange){
    if (newChange[i][1] > 0){
      reTrue.push(newChange[i])
    }
  }return {status: "OPEN", change: [...reTrue]}
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
