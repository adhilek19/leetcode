/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
let friendSet = new Set(friends);
return order.filter(id => friendSet.has(id));

};