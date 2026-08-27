nums=[1,2,3,4,5,6,7,8,9,0]
function getSum(nums){
    let total= nums.reduce((acumulado,actual)=> acumulado+actual,0)
    console.log(total)
}
 getSum(nums)