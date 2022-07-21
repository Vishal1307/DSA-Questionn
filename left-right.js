var ary=[
    ["R","R","D","R"],
    ["L","L","U","D"],
    ["L","L","L","L"]
]
var n=ary.length
var m=ary[0].length
function Find(n,m,ary){
    var i=0
    var j=0
    var count=0
    while(i>=0 && i<n && j>=0 && j<m){
        if(ary[i][j]==1){
            return count
        }
        var temp=ary[i][j]
        ary[i][j]=1
        if(temp=="R"){
            j++
        }
        else if(temp=="L"){
            j--
        }
        else if(temp=="U"){
            i--
        }
        else{
            i++
        }
        count++
    }

}
console.log(Find(n,m,ary))