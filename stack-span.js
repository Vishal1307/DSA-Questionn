var ary=[100,80,60,70,60,75,85]
var n=ary.length
function Span(n,ary){
    var sp=[]
    sp[0]=1
    for(var i=1;i<n;i++){
        sp[i]=1
       for(var j=i-1;j>=0 && ary[i]>=ary[j];j--){
        sp[i]++
       }
    }
    console.log(sp)
}
Span(n,ary)
var span=[]
function stSpan(n,ary,span){
    // var span=[]
    var st=[]
    st[0]=0
    span[0]=1
    for(var i=i;i<n;i++){
        while(st.length!=0 && ary[i]>=ary[st[stSpan.length-1]]){
            st.pop()
        }
        span[i]=st.length==0?i+1:i-st[stSpan.length-1]
        st.push(i)
    }
    return span

}
console.log(stSpan(n,ary,span))