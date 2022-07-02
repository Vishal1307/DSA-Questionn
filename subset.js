var ary=[1,2,3]
var n=3
var k=3
function subset(n,k,ary){
    var count=0
    for(var i=0;i<n;i++){
        var high=i
        var sum=0
        while(sum<k && high<n){
            sum+=ary[high]
            high++
        }
        if(sum==k){
            // return true
            count++
        }
    }
    return count
}
console.log(subset(n,k,ary),"there")
function isRec(n,k,ary){
    if(k==0){
        return true
    }
    if(n==0){
        return false
    }
    if(ary[n-1]>k){
        return isRec(n-1,k,ary)
    }
    return isRec(n-1,k-ary[n-1],ary)||isRec(n-1,k,ary)
}
// console.log(isRec(n,k,ary))
var dp=new Array(n+1).fill(new Array(k+1).fill(-1))

function isDpRec(n,k,ary){
    if(k==0){
        return true
    }
    if(n==0){
        return false
    }
    if(ary[n-1]>k){
        return dp[n][k]=isDpRec(n-1,k,ary)
    }
    return dp[n][k]=isDpRec(n-1,k-ary[n-1],ary)||isDpRec(n-1,k,ary)

}
console.log(isDpRec(n,k,ary))
