let items = [];

function addItemDOM(item)
{
    var list = document.getElementById("items");
    var li = document.createElement("li");
    li.className = "bg-white shadow-md rounded p-4 text-center";
    li.innerHTML = `<h2>${item.name}</h2><span>$${item.price}</span>`;
    //TODO: add edit functionality
    //TODO: add delete button icon
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
    let name = document.querySelector("#form-data input[name='name']");
    let price = document.querySelector("#form-data input[name='price']");
    
    //TODO: add id property
    let item = {
        "name": name.value,
        "price": price.value
    };

    addItemDOM(item);
    addItemLocalStorage(item);    
}

//TODO: add delete functionality which deletes element by id and updates localStorage

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-data");
    form.addEventListener("submit", saveItem);
    loadData();
});