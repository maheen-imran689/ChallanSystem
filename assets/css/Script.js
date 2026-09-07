let frst_dropdown_btn = document.querySelector('.frst-angle-btn');
let scnd_dropdown_btn = document.querySelector('.scnd-angle-btn');
let frst_menu = document.getElementById('frst-menu');
let scnd_menu = document.getElementById('scnd-menu');
frst_dropdown_btn.addEventListener('click',()=>{
       frst_menu.classList.toggle('d-none');
});

// second dropdown menu

scnd_dropdown_btn.addEventListener('click',()=>{
       scnd_menu.classList.toggle('d-none');
});

let sidebar = document.querySelector('.sidebar');
let toggle_btn = document.querySelector('.bar-toggle-btn');
let  dashboard_menu = document.querySelector('.main-dashboard-card');
toggle_btn.addEventListener('click',()=>{
    sidebar.classList.toggle('d-none');
//    dashboard_menu.classList.add('widtth');
if(['col-8','col-sm-8','col-md-10','col-lg-10', 'col-xl-10', 'col-xxl-10'].every(chk => dashboard_menu.classList.contains(chk) )
    )
{
    dashboard_menu.classList.remove('col-8','col-sm-8','col-md-10','col-lg-10', 'col-xl-10', 'col-xxl-10');
    dashboard_menu.classList.add('col-12','col-sm-12','col-md-12','col-lg-12', 'col-xl-12', 'col-xxl-12');
}
else{
     dashboard_menu.classList.add('col-8','col-sm-8','col-md-10','col-lg-10', 'col-xl-10', 'col-xxl-10');
    dashboard_menu.classList.remove('col-12','col-sm-12','col-md-12','col-lg-12', 'col-xl-12', 'col-xxl-12');
}
});
const challans = [
    {
        id: 1,
        challanNumber: "CH-2025-000123",
        vehicleNumber: "LEA-18-4587",
        driverName: "Ali Hassan",
        violation: "Signal Violation",
        fine: 2000,
        date: "2025-05-18",
        time: "10:30 AM",
        status: "PAID"
    },

    {
        id: 2,
        challanNumber: "CH-2025-000122",
        vehicleNumber: "LEB-20-1234",
        driverName: "Usman Khan",
        violation: "No Helmet",
        fine: 1000,
        date: "2025-05-18",
        time: "09:45 AM",
        status: "UNPAID"
    },

    {
        id: 3,
        challanNumber: "CH-2025-000121",
        vehicleNumber: "LEC-15-9876",
        driverName: "Faisal Shah",
        violation: "Seat Belt Violation",
        fine: 1500,
        date: "2025-05-18",
        time: "09:10 AM",
        status: "PAID"
    },

    {
        id: 4,
        challanNumber: "CH-2025-000120",
        vehicleNumber: "LED-22-5678",
        driverName: "Hamza Tariq",
        violation: "Overspeeding",
        fine: 2500,
        date: "2025-05-18",
        time: "08:50 AM",
        status: "OVERDUE"
    },

    {
        id: 5,
        challanNumber: "CH-2025-000119",
        vehicleNumber: "LEA-19-1111",
        driverName: "Bilal Ahmed",
        violation: "Illegal Parking",
        fine: 1500,
        date: "2025-05-18",
        time: "08:20 AM",
        status: "UNPAID"
    }
];
let table = document.querySelector('.table-body');

  let rows =  challans.map((e)=>{
     console.log(e);
    return `<tr>
      <th scope="row">${e.id}</th>
      <td>${e.challanNumber}</td>
      <td>${e.vehicleNumber}</td>
      <td>${e.driverName}</td>
      <td>${e.violation}</td>
      <td>${e.fine}</td>
      <td>${e.date}</td>
      <td class="${e.status=='PAID'?'text-success':e.status=='OVERDUE'?'text-warning':'text-danger'}">${e.status}</td>
    </tr>
   `
    
        
})
table.innerHTML = rows.join("");
