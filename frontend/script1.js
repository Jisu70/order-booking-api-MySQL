const API_URL = `http://localhost:3000`;

// Function add the orders
async function addOrders() {
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
  try {
    const response = await axios.post(`${API_URL}/savedata`, userData);
    console.log(response)
    showAllOrdersOnScreen();
  } catch (error) {
    console.log(" Error Is :", error);
  }
}

// Function to show the orders on screen

async function showAllOrdersOnScreen() {
  const itemList1 = document.getElementById("table1");
  const itemList2 = document.getElementById("table2");
  const itemList3 = document.getElementById("table3");
  const itemList4 = document.getElementById("table4");
  itemList1.innerHTML = "";
  itemList2.innerHTML = "";
  itemList3.innerHTML = "";
  itemList4.innerHTML = "";
  try {
    const response = await axios.get(`${API_URL}/all-expences`);
    const data = response.data;
    console.log(data);
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
      deleteButton.addEventListener("click", () => deleteOrders(item.id));
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      itemList.appendChild(listItem);
    });
  } catch (error) {
    console.log(" Error Is :", error);
  }
}

// To Edit the Orders
async function editItemDetails(id, itemvalue, itemprice) {
  const item = prompt("Change The Item name", itemvalue);
  const amount = prompt("Change The Item Price", itemprice);
  const updatedDetails = {
    id,
    item,
    amount,
  };

  try {
    const response = await axios.put(
      `${API_URL}/update-expences`,
      updatedDetails
    );
    showAllOrdersOnScreen();
  } catch (error) {
    console.error(error);
  }
}

// Delete function
async function deleteOrders(id) {
  try {
    console.log(id);
    const response = await axios.delete(`${API_URL}/delete-expences`, { data: { id } });
    console.log("User deleted", response);
  } catch (error) {
    console.log("Error:", error);
  }
  showAllOrdersOnScreen();
}





showAllOrdersOnScreen();
document
    .querySelector('button[type="submit"]')
    .addEventListener("click", function (event) {
        event.preventDefault();
        addOrders();
    });