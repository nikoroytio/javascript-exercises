 const removeFromArray = function() {

     const argumentArray = Array.prototype.slice.call(arguments);

     let array = argumentArray[0] ;
     const itemsToRemove = argumentArray.slice(1);

     itemsToRemove.forEach(item => {
 const index = array.indexOf(item);
         if (index > -1) {
             array.splice(index, 1);
         }
   });

    console.log(array);
    return array
    
 };

 // Do not edit below this line
 module.exports = removeFromArray;

