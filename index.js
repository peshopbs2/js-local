let items = [];

function addItemDOM(item)
{
    var list = document.getElementById("items");
    var li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li);
}

function addItemLocalStorage(item)
{
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
}

function loadData()
{
    items = localStorage.getItem("items") ?? "[]";
    items = JSON.parse(items);

    for (let item of items)
    {
        addItemDOM(item);
    }
}

function saveItem(event)
{
    event.preventDefault();
    let item = document.querySelector("#form-data input[name='item']")
    addItemDOM(item.value);
    addItemLocalStorage(item.value);    
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-data");
    form.addEventListener("submit", saveItem);
    loadData();
});