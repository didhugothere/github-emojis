const div = document.getElementById("app");

fetch("https://api.github.com/emojis")
    .then(response => response.json())
    .then(data => {
        Object.entries(data).forEach(([key,value]) => {
            const img = document.createElement("img");
            const p = document.createElement("p");
            img.src = value;
            p.innerText = key;
            div.appendChild(img);
            div.appendChild(p);
        });
    })
