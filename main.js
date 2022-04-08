//fixed values throughout the OS calculated based on user's computer's screen size
//common constants at the highest level

/*
alert(innerWidth);
alert(innerHeight);
*/

let screenWidth = innerWidth;   //100vw
let screenHeight = innerHeight;   //100vh

let SWU = innerWidth/100;
let SHU = innerHeight/100;

let boxShadow = "0 8px 32px 0 rgba( 0, 0, 0, 0.3 )";
let borderRadius = SHU*2;
let border = 1;
let blur = 10;

let topZIndex = 10;

//menu
//let menuX = 0;
//let menuY = 0;

//let menuWidth = SWU*100;
let menuHeight = SHU*7;

//dock
let dockY = SHU*89;
let dockHeight = SHU*10;

//dock icons images
let iconSpacingY = 1;

let iconHeight = dockHeight - iconSpacingY*2;
let iconWidth = iconHeight;

let iconCount = 8;
let iconSpacingX = 10; //divides the remaining x space equally in between apps

let iconImagesNames = ["mail","notes","photos"];

//values calculated from other values, derived values
let baseWidth = "100vw";
let baseHeight = "100vh";

let dockWidth = iconWidth*iconCount + iconSpacingX*(iconCount+1);
let dockX = (innerWidth - dockWidth) / 2;

//determined by number of apps in dock and icon spacing

//values that can change after their initial value

function appendToBody(element){
    window.document.body.appendChild(element);
}

function changeStyle(element,x,y,z,width,height,borderRadius,border,boxShadow,blur){
    element.style.position = "absolute";
    element.style.left = x + "px";
    element.style.top = y + "px";
    element.style.zIndex = z;

    element.style.width = width + "px";
    element.style.height = height + "px";

    element.style.borderRadius = borderRadius + "px";
    element.style.border = border + "px solid rgba( 255, 255, 255, 0.2)";

    element.style.boxShadow = boxShadow;
    element.style.backdropFilter = "blur(" + blur + "px)";
}

//creating div tags base, menu bar, dock
//let base = document.createElement("div");
let menu = document.createElement("div");
let dock = document.createElement("div");

//appending to the document
//document.body.appendChild(base);
appendToBody(menu);
appendToBody(dock);

//giving them style so they appear on screen when page finishes loading
//changeStyle(base, 0, 0, 2, innerWidth, innerHeight, borderRadius, border, boxShadow, 0);
changeStyle(menu, 0, 0, topZIndex, innerWidth, menuHeight, 0, border, boxShadow, blur);
changeStyle(dock, dockX, dockY, topZIndex, dockWidth, dockHeight, borderRadius, border, boxShadow, blur);

/*
let mail = document.getElementById("mail");
let notes = document.getElementById("notes");
let photos = document.getElementById("photos");

iconImagesArray.push(mail);
iconImagesArray.push(notes);
iconImagesArray.push(photos);
*/

//setting icons on dock
for(i=0; i<document.images.length; i++){
    let x = dockX + iconSpacingX*(i+1) + iconWidth*i;
    let y = dockY + iconSpacingY;
    let z = topZIndex + 1;
    changeStyle(window.document.images[i], x, y, z, iconWidth, iconHeight, borderRadius, 0, 0, 0);
}

function drawContolButtons(name){
    let red = document.createElement("div");
    let yellow = document.createElement("div");
    let green = document.createElement("div");

    name.appendChild(red);
    name.appendChild(yellow);
    name.appendChild(green);

    changeStyle(red, 10, 10, 3 , 30, 30, 5, 1, 0, 0);
    changeStyle(yellow, 50, 10, 3, 30, 30, 5, 1, 0, 0);
    changeStyle(green, 90, 10, 3, 30, 30, 5, 1, 0, 0);

    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";

}


//mailMenu = ["files","mails","go"];
let windowX = 100;
let windowY = 100;

function openApp(name){
    changeStyle(name, windowX, windowY, 3, 400, 400, borderRadius, border, boxShadow, blur);
    drawContolButtons(name);
}

//creating apps. they come in pair. one is blurred side bar, other is content area
let mail = document.createElement("div");
let notes = document.createElement("div");
let reminders = document.createElement("div");
let photos = document.createElement("div");
let safari = document.createElement("div");
let preferences = document.createElement("div");
let xcode = document.createElement("div");
let final_cut_pro = document.createElement("div");

//let appsArray = [mail,notes,reminders,photos,safari,preferences,xcode];
let appsArray = [];

appsArray.push(mail);
appsArray.push(notes);
appsArray.push(reminders);
appsArray.push(photos);
appsArray.push(safari);
appsArray.push(preferences);
appsArray.push(xcode);
appsArray.push(final_cut_pro);

/*
for(let i=0;i<appsArray.length;i++){
    appendToBody(appsArray[i]);
}
*/

appendToBody(mail);
appendToBody(notes);
appendToBody(reminders);
appendToBody(photos);
appendToBody(safari);
appendToBody(preferences);
appendToBody(xcode);
appendToBody(final_cut_pro);

window.document.images[0].addEventListener("click",whichApp);
window.document.images[1].addEventListener("click",whichApp);
window.document.images[2].addEventListener("click",whichApp);
window.document.images[3].addEventListener("click",whichApp);
window.document.images[4].addEventListener("click",whichApp);
window.document.images[5].addEventListener("click",whichApp);
window.document.images[6].addEventListener("click",whichApp);
window.document.images[7].addEventListener("click",whichApp);

//dock.addEventListener("click",whichApp);

function whichApp(e){
    console.log(e);
    console.log(e.srcElement);

    /*
    let selected;
    for(let i=0;i<appsArray.length;i++){
        if(e.x >= (dockX + iconSpacingX*(i+1) + iconWidth*i) && e.x <= (dockX + iconSpacingX*(i+1) + iconWidth*(i+1))){
            selected = i;
            break;
        }
    }
    openApp(selected);
    */

    if(e.srcElement.id == "mail"){
        openApp(mail);
    }
    else if(e.srcElement.id == "notes"){
        openApp(notes);
    }
    else if(e.srcElement.id == "reminders"){
        openApp(reminders);
    }
    else if(e.srcElement.id == "photos"){
        openApp(photos);
    }
    else if(e.srcElement.id == "safari"){
        openApp(safari);
    }
    else if(e.srcElement.id == "preferences"){
        openApp(preferences);
    }
    else if(e.srcElement.id == "xcode"){
        openApp(xcode);
    }
    else if(e.srcElement.id == "final_cut_pro"){
        openApp(final_cut_pro);
    }
}


/*
let menu1 = document.createElement("canvas");
let menu2 = document.createElement("canvas");
let menu3 = document.createElement("canvas");
let menu4 = document.createElement("canvas");
let menu5 = document.createElement("canvas");

let menuArray = [menu1, menu2, menu3, menu4, menu5];
*/

//activatetDiv(mail,"m","100px","500px",3,iconSize+"px",iconSize+"px",0);
//let mail = new Image();

/*
for( i=1 ; i<=20 ; i++ ){
    cdock.fillStyle = "white";
    cdock.fillRect(iconSpacing*i + iconSize*(i-1),iconSpacing,iconSize,iconSize);
}

function whichMenu(e){
    for(i=1 ; i<=countMenus ; i++){
        if(e.x <= iconSize * i){
            displayThatMenu(i);
            return;
        }
    }
}

function displayThatMenu(i){
    //menu[i].style.visible = true;//rough sketch
    createCanvas(menuArray[i],"abc",bodyW/10,bodyH/4,3,iconSize*(i-1) + "px",bodyH/20 + "px",0,blurValue);

}

function whichApp(e){
    e.x = 10;
    openThatApp(files);
}

function openThatApp(name){
    createCanvas(name,"abc",bodyW/2,bodyH/2,3,bodyW/4+"px",bodyH/4+"px",borderRadius,blurValue);
}

menu.addEventListener("click",whichMenu);
dock.addEventListener("click",whichApp);
*/





