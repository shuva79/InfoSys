this.window.addEventListener("scroll", function(){
    let h1 = document.getElementById('bonsai');     //we take element's id and store its in a variable
    
    let scrollTop = window.pageYOffset;  //measures how much we've scrolled vertically in pixels
    let totalHeight = window.innerHeight;   //inner height means the actual height of the actual webpage
    
    h1.style.filter = 'opacity(' + (1 - ((totalHeight-scrollTop)/totalHeight)) * 100 + '%)'; //opacity reduces on scrolling
});

