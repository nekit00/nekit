const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const content = document.getElementById("content");

catBtn.addEventListener("click", function() {

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {

            content.innerHTML = "";

            const img = document.createElement("img");
            img.src = data[0].url;

            content.appendChild(img);
        });
});

dogBtn.addEventListener("click", function() {

    fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
        .then(response => response.json())
        .then(data => {

            content.innerHTML = "";

            const img = document.createElement("img");
            img.src = data.message;

            content.appendChild(img);
        });
});