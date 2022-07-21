"implantaion of que using stack"

var st1=[]
var st2=[]
function istrue(k,n){
    if(k==0){
        st1.push(n)
    }
    else if (k==2){
        if(st2.length==0){
            if(st1.length==0){
                console.log("st1 is empty")
            }
            else{
                while(st1.length!=0){
                    st2.push(st1.pop())
                }

            }
        }
        st2.pop()

    }
    else if(k==1){
        console.log(st2[st2.length-1])
    }
}
istrue(0,1)
istrue(0,2)
istrue(0,2)
istrue(1)
istrue(2)
istrue(1)