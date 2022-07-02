var ary=[2,3,4,7,8,9]
var k=9
function binary(k,ary){
    var low=0
    var high=ary.length-1
    while(low<=high){
        var mid=Math.floor(low+(high-low)/2)
        if(ary[mid]==k){
            return true
        }
        else if(ary[mid]>k){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    return false
}
console.log(binary(k,ary))
 