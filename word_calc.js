var text=document.getElementById("words")


var btn=document.querySelector(".btn")
var answer=document.querySelector(".result")
function word_calc(){
    var total=text.value 
    var arr=total.split(" ")
    var result=arr.length
    answer.innerHTML=result+" Words"
}