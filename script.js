

function TrackCursor(e){
    let x = e.pageX;
    let y = e.pageY;
    
    mouse.style.left=`${x}px`;
    mouse.style.top=`${y}px`;
    
    mouse2.style.left=`${x}px`;
    mouse2.style.top=`${y}px`;
}

const today= new Date();
const born = new Date('2008-09-04');
let age = today.getFullYear()-born.getFullYear();
let agem = today.getMonth()-born.getFullYear();
let aged = today.getDay()-born.getFullYear();

if (agem<0|| agem===0&&aged<0){
    age--;
}


document.getElementById("age").textContent = age + document.getElementById("age").textContent;