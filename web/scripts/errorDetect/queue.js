/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// pseudo coda
function Queue(array) {
    array = [];
    var reversearray;
    //--Define the max size of the stack
    var MAX_SIZE = 1;

    /*function isEmpty() {
        if (array.length < 1){
            console.log("Queue is empty");
            return true;
        } 
        else
            return false;
    };*/

    return {
        isEmpty: function() {
        if (array.length < 1){
            //console.log("Queue is empty");
            return true;
        }
        else
                return false;
        },
        
        insert: function(ele) {
            if (array.length < MAX_SIZE) {
                array.push(ele);
                reversearray = array.reverse();
                return reversearray;
            } else {
                console.log("Queue Overflow");
            }
        },
        delete: function() {
            if (array.length >= 1) {
                //reversearray = array.reverse();
                array.pop();
                return array;
            } else {
                console.log("Queue Underflow");
            }
        },
        shift: function(){
            if(array.length <= MAX_SIZE){
                //console.log("item: " + array[0]);
                return array[0];
            }
            //else
                //console.log("Queue is empty");
        }
    };
};

/*
var queue = Queue();

var item = {name: 'asd', time: 0.2147124};

console.log(queue.isEmpty());
console.log(queue.insert(item));
temp = queue.shift();
console.log(temp.name, temp.time);
console.log(queue);
*/