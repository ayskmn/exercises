document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementsByTagName("form");
    let btn = document.getElementById("btn");


    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const meme = document.createElement("div");
        const topTxt = document.createElement("div");
        let bottomTxt = document.createElement("div");
        const img = document.createElement("img");
        const memeHere = document.getElementById("memeHere");

        img.src = document.getElementById("imageUrl").value;
        topTxt.innerHTML = document.getElementById("topText").value;
        topTxt.classList.add("topText");
        bottomTxt.innerHTML = document.getElementById("bottomText").value;
        bottomTxt.classList.add("bottomText");
        meme.classList.add("meme");
        meme.append(img);
        meme.append(topTxt);
        meme.append(bottomTxt);
        memeHere.append(meme);
    })

})

