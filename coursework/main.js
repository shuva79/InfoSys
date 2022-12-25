let h1 = document.querySelector('#bonsai');

window.onscroll = () =>{
    let pos = window.scrollY - 800;
    h1.style.left = `$(pos)px`;
}