const form1 = document.querySelector(".form");
const form = document.querySelector("form");
const btn = document.querySelector("button");
const row = document.querySelector(".row");


form.addEventListener("submit", e => {
    
    e.preventDefault();
    const name = form.Name.value.trim();
    const tag = form.Tag.value.trim();
    const color = form.Color.value.trim();
    console.log(name);
    form1.style.display="none";
    row.style.display="block";
    new Vue ({
        el:".row",
        data:{
            name : name,
            tag : tag
        }
    })
});

