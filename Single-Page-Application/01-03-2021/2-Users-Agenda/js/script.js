// fetch('https://jsonplaceholder.typicode.com/users').then(function(response){

// })

const tableBody = document.getElementById('tableBody');

fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    if(response.status === 200) {
        response.json().then(data => {
            console.log(data);
            data.forEach(element => {
                const htmlRow = `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>${element.address.street} ${element.address.suite}, ${element.address.zipcode}</td>
                <td>${element.phone}</td>
                <td>${element.website}</td>
                <td>${element.company.name}</td>
                <td><button onclick="showAgenda(${element.id})" class="btn btn-success">Agenda</td>
              </tr>`;
              tableBody.innerHTML += htmlRow;
            });
        })
    }
})