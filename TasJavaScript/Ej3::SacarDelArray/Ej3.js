function removeFromArray(array,item){
    for (let i = 0; i < array.length; i++) {
        if (array[i]==item) {
            array.splice(i,1);
        }
        
    }
}
let array=[1,2,3,4,5];
removeFromArray(array,3);
console.log(array)