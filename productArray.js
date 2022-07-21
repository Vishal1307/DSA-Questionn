var ary=[10,3,5,6,2]
var n=ary.length
function prod(n,ary){
    var ar=[]
    for(var i=0;i<n;i++){
        var sol=1
        for(var j=0;j<n;j++){
            if(i!=j){
                sol*=ary[j]

            }
        }
        ary[i]=sol

    }
    console.log(ar)
    
}
// when time complexity is O(n**2) and space complexity is O(1)
// prod(n,ary)
// "----------------------------------------------------------------------"

function twoAry(n,ary) {
    var left=new Array(n+1)
    var right=new Array(n+1)
    var rn=right.length
    var pr=[]
    left[0]=1
    right[rn-1]=1
    for(var i=0;i<n;i++){
        var tem=left[i]
        left[i+1]=ary[i]*tem

    }
    for(var i=n-1;i>=0;i--){
        var tem=right[i]
        right[n]=ary[n]*tem

    }
    for(var i=0;i<left.length;i++){
        prod[i]=left[i]*right[i]
    }
    console.log(prod)

}
twoAry(n,ary) 