let sideBar = document.getElementsByClassName("side-bar")[0];
        fetch('../sidebar.html')
        .then(data => data.text())
        .then(data=> {
            sideBar.innerHTML = data;
            const script = document.createElement('script');
            document.body.appendChild(script);
            script.async = true;
            script.src = '../assets/js/sidebar.js';
        });

function floor(num) {
    return (Math.floor(num * 100)) / 100;
}

function zoom(event,el){
        // Get the bounding rectangle of target
    const rect = el.getBoundingClientRect();

    // Mouse position
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    let height = rect.bottom - rect.top;
    let width = rect.right - rect.left;

    let xOrig = (x/width)*100;
    let yOrig = (y/height)*100;
    xOrig = floor(xOrig);
    yOrig = floor(yOrig);
    //console.log(xOrig,yOrig);

    if(el.getAttribute("zoom") == "0" ){
        //console.log(el.getAttribute("zoom"));
        el.style.transformOrigin = `${xOrig}% ${yOrig}0%`;
        el.style.transform = "scale(2.5)";
        el.setAttribute("zoom","1");
        el.style.cursor = "zoom-out";
        el.parentElement.style.overflow = "scroll";
    }else{
        //console.log(el.getAttribute("zoom"));
        el.setAttribute("zoom","0");
        el.style.transform = "scale(1.0)";
        el.style.cursor = "zoom-in";
        el.parentElement.style.overflow = "hidden";
    }
    
}        