const API_URL = `http://localhost:3000`;
async function addExpences() {
    const priceInput = document.getElementById("price");
    const dishInput = document.getElementById("dish");
    const tableInput = document.getElementById("table");
    if (priceInput.value.trim() === "" || dishInput.value.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
    }
    const userData = {
        amount: priceInput.value,
        item: dishInput.value,
        table: tableInput.value,
    };
    console.log(userData.tableName);
    const response = await fetch(`${API_URL}/savedata`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    let data = await response.json();
    console.log(data);
    showAllExpencesOnScreen();
}
async function showAllExpencesOnScreen() {
    const response = await fetch(`${API_URL}/all-expences`);
    const data = await response.json();
    const itemList1 = document.getElementById("table1");
    const itemList2 = document.getElementById("table2");
    const itemList3 = document.getElementById("table3");
    const itemList4 = document.getElementById("table4");
    itemList1.innerHTML = "";
    itemList2.innerHTML = "";
    itemList3.innerHTML = "";
    itemList4.innerHTML = "";
    data.forEach((item) => {
        const itemList = document.getElementById(item.table);
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = `Dish Name: ${item.item}, Price: ${item.amount}`;
        const editButton = document.createElement("btn");
        editButton.className = "btn btn-info rounded";
        editButton.style.float = "right";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () =>
            editItemDetails(item.id, item.item, item.amount)
        );
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-warning rounded";
        deleteButton.style.float = "right";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteItem(item.id));
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        itemList.appendChild(listItem);
    });
}
// To Edit the Orders
async function editItemDetails(id, itemvalue, itemprice) {
    const item = prompt(" Change The Item name ", itemvalue);
    const amount = prompt(" Change The Item Price ", itemprice);
    const updatedDetails = {
        id,
        item,
        amount,
    };
    const response = await fetch(`${API_URL}/update-expences`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedDetails),
    });
    showAllExpencesOnScreen();
}
// Delete function
async function deleteItem(id) {
    const response = await fetch(`${API_URL}/delete-expences`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id
        }),
    });
    console.log(" User deleted", response);
    showAllExpencesOnScreen();
}
showAllExpencesOnScreen();
document
    .querySelector('button[type="submit"]')
    .addEventListener("click", function (event) {
        event.preventDefault();
        addExpences();
    });