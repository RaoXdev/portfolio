VANTA.GLOBE({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x33a2a2,
    color2: 0x4297f0,
    backgroundColor: 0x8132d
  })
  var loader=document.getElementById("preloader");
        window.addEventListener("load",function(){
            loader.style.display="none"; 
        })
        const checker=document.getElementById("ico");
        const sider=document.getElementById("side");
        let i=1;
        document.onclick=function(e){
            if(e.target.id !== 'side' && e.target.id !=='ico')
            {
                sider.classList.remove('active');
            if(sider.classList.contains("active")){
                checker.className='bx bx-menu-alt-right';
            }
            else{
                checker.className='bx bx-menu-alt-right';
            }
            }
        }
        checker.onclick=function(){
            sider.classList.toggle('active');
            if(sider.classList.contains("active")){
                checker.className='bx bx-x bx-tada';
            }
            else{
                checker.className='bx bx-menu-alt-right';
            }
}