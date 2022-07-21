var ary=[1,2,3,3,4]
var n=ary.length
function missing(n,ary){
    var data={}
    var sum=0
    for(var i=0;i<n;i++){
        var k=ary[i]
        sum+=k
        if(data[k]==undefined){
            data[k]=1
        }
        else{
            var prev=data[k]
            data[k]=prev+1
        }
    }
    var dup=0
    for(key in data){
        if(data[key]==2){
            dup=+key

        }
    }
    var final_sum=sum-dup
    var miss_num=(n*(n+1)/2)-final_sum
    console.log(miss_num,dup)

    
}
missing(n,ary)