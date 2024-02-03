let submitbtn = document.querySelector(".submitbtn");
submitbtn.addEventListener("click",function(){
    var commentboxval =  document.getElementsByClassName("commentbox-text").value;
    if(commentboxval == ""){
        alert("Please enter a valid comment!");
    }

})