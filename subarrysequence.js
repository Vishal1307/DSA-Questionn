var ary=["1","2","3"]
var new_ary=[]
var current=0
function isSum(ary,new_ary,current){
  // console.log(new_str)
  if(new_ary.length>0){
    console.log(new_ary)
  }
  if(current==ary.length){
    return
  }
  for(var i=current;i<ary.length;i++){
    new_ary.push(ary[i])
    
    isSum(ary,new_ary,i+1)
    new_ary.pop()
  }
}
isSum(ary,new_ary,current)