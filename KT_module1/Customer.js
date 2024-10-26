class Customer {
    constructor(id, name, phone, address, email) {
        this.id = id
        this.name = name
        this.phone = phone
        this.address = address
        this.email = email
    }
}

let customers = []

function display(customersList) {
    const customerContainer = document.getElementById("customerContainer")
    customerContainer.innerHTML = ""
    customersList.forEach(customer => {
        const customerRow = document.createElement("tr")
        customerRow.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
            <td>${customer.email}</td>
        `;
        customerContainer.appendChild(customerRow)
    });
}

function addCustomer() {
    const id = document.getElementById("customerId").value
    const name = document.getElementById("customerName").value
    const phone = document.getElementById("customerPhone").value
    const address = document.getElementById("customerAddress").value
    const email = document.getElementById("customerEmail").value

    if (id && name && phone && address && email) {
        const newCustomer = new Customer(id, name, phone, address, email)
        customers.push(newCustomer)
        display(customers)
        clearInputs()
    } else {
        alert("Vui lòng điền đầy đủ thông tin!")
    }
}

function clearInputs() {
    document.getElementById("customerId").value = ''
    document.getElementById("customerName").value = ''
    document.getElementById("customerPhone").value = ''
    document.getElementById("customerAddress").value = ''
    document.getElementById("customerEmail").value = ''
}

document.getElementById("add").onclick = addCustomer

window.onload = () => display(customers)

customers.push(new Customer("123", "Nguyễn Văn A", "0981111111", "Hà Nội", "123@gmail.com"))
customers.push(new Customer("456", "Trần Thị B", "0985555555", "Bắc Cạn", "456@gmail.com"))
customers.push(new Customer("789", "Ajax Đặng", "0989999999", "Italy", "789@gmail.com"))
