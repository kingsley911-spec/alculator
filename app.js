for (let number =3; number <=20; number++) {
    document.getElementsByTagName("input")[number].addEventListener("click", function() {
         document.getElementById("screen").value += document.getElementsByTagName("input")[number].value
   })
}


// The code below is for the AC btn
document.getElementsByTagName("input")[1].addEventListener("click", function() {

    document.getElementById("screen").value = ""
})

// The code below is for the DEL btn
document.getElementsByTagName("input")[2].addEventListener("click", function() {

    document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1);
})

// The code is for the equal to btn
document.getElementsByTagName("input")[24].addEventListener("click", function() {

    document.getElementById("screen").value = eval(document.getElementById("screen").value)
})


 
























