var ary=[5,1,4,2,8]

function swap(ary,i,j){
    var temp=ary[i];
    ary[i]=ary[j];
    ary[j]=temp;
}
function bubbl(ary){
    for(var i=0;i<=ary.length-1;i++){
        var k=i
        for(var j=i+1;j<ary.length;j++){
            if(ary[k]>ary[j]){
                swap(ary,k,j)
                k=j
            }
        }
    }
}
bubbl(ary)
console.log(ary)