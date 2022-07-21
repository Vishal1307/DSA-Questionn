var ary=[5,1,4,2,8]
var n=ary.length
function swap(ary,i,j){
    var temp=ary[i]
    ary[i]=ary[j]
    ary[j]=temp
}
function bubble(n,ary){
    if(n==1){
        return 
    }
    for(var i=0;i<Array.length;i++){
        if(ary[i]>ary[i+1]){
            swap(ary,i,i+1)

        }
    }

}