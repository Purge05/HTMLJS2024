window.onload = function(){
    document.querySelector('h1').innerHTML = "South Park Slideshow";

    var image = 0;
    var images = [
        "KennyMcCormick.png",
        "eric-cartman_380.jpg",
        "KyleBroflovski.png",
        "StanMarsh.png"
    ];
    var siteBtn = document.querySelector('#slideshow-button');

    function changeImage(){
        siteBtn.removeEventListener('click', changeImage);
        if(image >= images.length){
            image = 0;
        }
        
        document.querySelector("#site-image").src = `images/${images[image]}`;
        setTimeout(changeImage, 2000);
        image++;
    }
    siteBtn.addEventListener('click', changeImage)
}