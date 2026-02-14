/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice=Infinity;
    let maximumpro=0;
    for(i=0;i<prices.length;i++){
        if( prices[i] < minprice ){
           minprice=prices[i] 
        }else{
            let profit=prices[i]-minprice;
            if(profit > maximumpro){
                maximumpro=profit
            }
             

        }
        
    }

   return maximumpro
};