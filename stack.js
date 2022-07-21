var que1=[]
var que2=[]
function isTrue(k,n){
    if(k==0){
        que2.push(n)
        while(que1.length!=0){
            que2.unshift(que1[que1.length-1])
            que1.pop()
        }
        var temp=que1
        que1=que2
        que2=temp
    }
    else if(k==1){
        que1.pop()
    }
    else if(k==2){
        console.log(que1[que1.length-1])
    }

}