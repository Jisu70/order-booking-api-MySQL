# Restaurant Order Tracking

This script file is designed for tracking ordered items in a restaurant. It provides functionality for waiters to manage and track orders placed by customers. The script interacts with a REST API and utilizes a MySQL database for data storage.

## Features

- REST API: The script communicates with a REST API hosted at `http://localhost:3000` to perform various operations related to order tracking.
- MySQL: The order data is stored in a MySQL database, allowing for efficient retrieval and management.
- Add Order: Waiters can add orders by specifying the item name, price, and table number. The order details are sent to the API for storage.
- View Orders: The script fetches and displays all orders on the screen, grouped by table number, enabling waiters to easily track which orders are placed at each table.
- Edit Order: Waiters can modify the details of an existing order, including the item name and price. The updated data is sent to the API for updating the order.
- Delete Order: Waiters have the option to delete an order. The deletion request is sent to the API, and the corresponding order is removed from the database.

## Usage

To use this script file, follow these steps:

1. Ensure that the REST API and MySQL database are properly set up and running.
2. Open the script file and update the `API_URL` variable with the appropriate URL of your REST API.
3. Incorporate the script into your project or application, ensuring that you have the necessary dependencies and libraries installed.
4. Implement the required logic and functionality around the script, such as user interfaces or command-line interactions, to utilize the order tracking features.
5. Customize and adapt the script to fit your specific use case and requirements, such as integrating it with other components or systems.

Note: This readme assumes that you have prior knowledge of setting up a REST API and MySQL database. If not, please refer to the documentation or seek assistance in setting up the required backend components.