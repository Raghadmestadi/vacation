 
 let menu= document.getElementById("m-icon")
 let nav= document.getElementById("nav")
 let exit= document.getElementById("exit")
 
    menu.addEventListener('click',function(){
        nav.classList.toggle("hide-m")
    
    })

    exit.addEventListener('click',function(){
        nav.classList.add("hide-m")
    
    })