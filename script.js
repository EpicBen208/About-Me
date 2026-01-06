const mouse=document.querySelector('.mouse')


document.addEventListener('mouseenter',()=>{
    mouse.style.display='block';
});

document.addEventListener('mouseleave',()=>{
    mouse.style.display='none';
});


const mouse2=document.querySelector('.mouse2')


document.addEventListener('mouseenter',()=>{
    mouse2.style.display='block';
});

document.addEventListener('mouseleave',()=>{
    mouse2.style.display='none';
});

document.addEventListener('mousemove',TrackCursor);

function TrackCursor(e){
    let x = e.pageX;
    let y = e.pageY;
    
    mouse.style.left=`${x}px`;
    mouse.style.top=`${y}px`;
    
    mouse2.style.left=`${x}px`;
    mouse2.style.top=`${y}px`;
}

