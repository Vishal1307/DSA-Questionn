var ary=[1,4,20,3,10,5]
var k=33
function isSOrt(k,ary){
    var high=0
    var sum=0
    for(var i=0;i<ary.length;i++){
        while(sum<k && high<ary.length){
            sum+=ary[high]
            high++
        }
        if(sum==k){
            // console.log(i,high-1)
            return (i,high-1)
        }
        sum-=ary[i]
    }
}
console.log(isSOrt(k,ary))