/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

let a=init;

return {
    
    'reset':function(){
        a=init;
        return init;
    },
    'increment':function(){

       a+=1;
       return a;

    },

    'decrement':function(){
        a-=1;
      return a;
    }
    
}


};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */