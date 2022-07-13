
const inizializeNav= nav => {
    nav.style.position= "fixed";
    nav.style.top= "0";
    nav.style.width="100vw";
    nav.style.display= "flex";
    nav.style.justifyContent= "end";
}

const inizializeMenu = (nav, menuTextElements) => {
    const menu = nav.querySelector("menu");
    const menuBtns = nav.querySelectorAll("button");

    menu.style.display= "flex";
    menu.style.flexDirection= "column";
    menu.style.position= "absolute";
    menu.style.width= "100%";
    menu.style.height= "100vh";
    menu.style.listStyleType= "none";
    

    menuBtns.forEach(element => {
        element.querySelector("img").style.width= "2rem";
        element.style.margin= "0.5rem 0.5rem 0.5rem 0";
        element.style.border= "none";
        element.style.borderRadius= "8px";
        element.style.background= "#474242";
    });
    menuBtns[1].style.alignSelf= "end";
    menuBtns[1].style.marginBottom= "2rem";
    
    for(let i=0; i<menuTextElements.length; i++){
        const createLi = document.createElement("li");
        const createA = document.createElement("a");
        const createHref = createA.href= "#";
        const textNode = document.createTextNode(menuTextElements[i]);
        createA.appendChild(textNode);
        createLi.appendChild(createA);
        menu.appendChild(createLi);
        createA.style.textDecoration= "none";
        createA.style.color="white";
        createA.style.fontSize= "1.5rem";
        createLi.style.margin= "0 0 2rem 1rem";
    }
}

const resetMenuPos = nav => {
    const menu = nav.querySelector("menu");
    menu.style.transform= "translateX(100%)";
};

const btnsFunc = (nav, menuOpCl) => {
    const menu = nav.querySelector("menu");
    const menuBtns = nav.querySelectorAll("button");
    
    menuBtns.forEach((element) => {
        element.onclick = () => {
            if(menuOpCl==0){
                menu.style.transition = "transform 0.5s";
                nav.style.width= "100vw";
                menu.style.transform= "translateX(0%)";
                menuOpCl+=1;
            }
            else{
                menu.style.transition = "transform 0s";
                resetMenuPos(nav);
                menuOpCl-=1;
            }
        };
    });
};

const nav = document.querySelector("nav");

let menuOpCl = 0;
const menuTextElements = ["INFORMAZIONI SUL GIOCO", "MULTIMEDIA", "NOVITA'", "CLASSIFICA", "SUPPORTO", "SOCIAL", "ESPORT", "MERCHANDISE"];

inizializeNav(nav);
inizializeMenu(nav, menuTextElements);
resetMenuPos(nav);
btnsFunc(nav, menuOpCl);