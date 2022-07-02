var n=23
function square(n){
    var low=0
    var high=n
    while(low<=high){
        var mid=Math.floor(low+(high-low)/2)
        if(mid*mid==n){
            return mid

        }
        else if (mid*mid>n){
            high=mid-1


        }
        else{
            low=mid+1
        }
    }
    return false

}
console.log(square(n))