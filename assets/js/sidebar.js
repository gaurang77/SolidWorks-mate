    // console.log('side bar loaded');
    // document.getElementById("select").style.color = "crimson";

    function toggle(el) {
        let list = el.closest('h4').nextElementSibling;
        // console.log(list.style.display);
        if (list.style.display != "none") {
            list.style.display = "none";
            el.innerHTML = "&#9660;";
        } else {
            list.style.display = "block";
            el.innerHTML = "&#9650;";
        }
    }

    let url = location.href.split('/');
    let url1 = url.pop();
    let url2 = url.pop();
   // console.log(url2);
    document.getElementById(url2).innerHTML = "&#9650;"
    document.getElementById(url2+"UL").style.display = "block";

    let ids = document.querySelectorAll('ul.side-bar-list li a');
    ids.forEach(id=>{
        // console.log(id.id,url1);
        if(id.id == url1){
            id.style.color = "crimson";
        }
    })