nums=[1,2,3,4,5,6,7,8,9,0]
function getOdds(nums){
    let impar= nums.filter(num=> num% 2 !==0)
    console.log(impar)
}
getOdds(nums)