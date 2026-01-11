// menu.addEventListener('click',()=>{

//     const navbar = document.querySelector('.navbar')
//     let x = navbar.style.display
//     const menu=document.getElementById("menu")
//     if(x !== 'block') {
//         navbar.style.display="block"
//         document.querySelector("#menu-img").setAttribute("src","./assets/images/remove.png")
//         document.querySelector("#menu-img").setAttribute("width","5%")
        
//         // menu.style.display="none"
//     }  else{
//         navbar.style.display="none"
//         document.querySelector("#menu-img").setAttribute("src","./assets/images/menu-01.png")
//         document.querySelector("#menu-img").setAttribute("width","3%")
//         menu.style.background="transparent"
//         menu.style.border="none"
//         // menu.style.zIndex="18"
//         // document.querySelector("#menu-img").setAttribute("width","10%")
//         // menu.style.display="block"
//     } 
// })

function closesidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="none";

}

function opensidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="flex";
}