const API_URL = "https://ut7rwv3c62.execute-api.ap-south-1.amazonaws.com/prod/employees"

function addEmployee(){

    const employee = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value
    }

    fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        alert("Employee Added Successfully")
        loadEmployees()
    })
}

function loadEmployees(){

fetch(API_URL)
.then(res => res.json())
.then(data => {

const list = document.getElementById("employeeList")
list.innerHTML=""

data.forEach(emp=>{
const li = document.createElement("li")
li.innerText = emp.name + " - " + emp.department
list.appendChild(li)
})

})

}

loadEmployees()