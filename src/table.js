
function getData() {
    return JSON.parse(localStorage.getItem('MyCustList') || "[]");
}

const showData = () => {
    const tableBody = document.querySelector("#table-body");
    const data = getData();
    
    data.forEach((customer) => {
        const tableRow = document.createElement('tr');
        const nameColumn = document.createElement('td');
        nameColumn.textContent = customer.name;
        tableRow.append(nameColumn);

        const emailColumn = document.createElement('td');
        emailColumn.textContent = customer.email;
        tableRow.append(emailColumn);

        const phoneColumn = document.createElement('td');
        phoneColumn.textContent = customer.phone;
        tableRow.append(phoneColumn);
        
        const srvcratingColumn = document.createElement('td');
        srvcratingColumn.textContent = customer.serviceRating;
        tableRow.append(srvcratingColumn);

        const bvgratingColumn = document.createElement('td');
        bvgratingColumn.textContent = customer.bvgRating;
        tableRow.append(bvgratingColumn);

        const clnratingColumn = document.createElement('td');
        clnratingColumn.textContent = customer.cleanRating;
        tableRow.append(clnratingColumn);

        const dineratingColumn = document.createElement('td');
        dineratingColumn.textContent = customer.dineRating;
        tableRow.append(dineratingColumn);

        const messageColumn = document.createElement('td');
        messageColumn.textContent = customer.message;
        tableRow.append(messageColumn);
       
       
        tableBody.append(tableRow);
    })
}

showData();