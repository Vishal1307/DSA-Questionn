
var ary=[1,2,3,6,3,6,1]
var n=ary.length
function dup(n,ary){
    for(var i=0;i<n;i++){
        var j=Math.abs(ary[i])
        if(ary[j]>=0){
            ary[j]=-ary[j]
        }
        else{
            console.log(j+" ")
        }
    }

}
