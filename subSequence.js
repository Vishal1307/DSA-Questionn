var str="123"
var new_str=""
var current=0
function subString(current,new_str,str){
    if(new_str.length>0){
        console.log(new_str)
    }
    if(current==str.length){
        return
    }
    else{
        for(var i=current;i<str.length;i++){
            new_str=new_str.concat(str[i])
            subString(i+1,new_str,str)
            new_str=new_str.slice(0,-1)
        }
    }
}
subString(current,new_str,str)