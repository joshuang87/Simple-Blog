// Blog
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click",function(){
    // console.log(title.value);
    // console.log(content.value);
    // console.log(list.innerHTML);

    // add a new div chunk
    list.innerHTML = list.innerHTML + `
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
        <hr>
    </div>
    `;
    title.value = "";
    content.value = "";
})