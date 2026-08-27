let nums=[1, 2, 2, 3, 4, 4, 4, 5]
function duplicates(nums){
      let aux=[]
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i])!==i) {
            aux.push(nums[i])
        }
        
        
    }
    console.log(aux)
}
duplicates(nums)