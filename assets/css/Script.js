const defaultchallans = [
    // {
    //     id: 1,
    //     challanNumber: "CH-2025-000123",
    //     vehicleNumber: "LEA-18-4587",
    //     driverName: "Ali Hassan",
    //     violation: "Signal Violation",
    //     fine: 2000,
    //     date: "2025-05-18",
    //     time: "10:30 AM",
    //     status: "PAID"
    // },

    // {
    //     id: 2,
    //     challanNumber: "CH-2025-000122",
    //     vehicleNumber: "LEB-20-1234",
    //     driverName: "Usman Khan",
    //     violation: "No Helmet",
    //     fine: 1000,
    //     date: "2025-05-18",
    //     time: "09:45 AM",
    //     status: "UNPAID"
    // },

    // {
    //     id: 3,
    //     challanNumber: "CH-2025-000121",
    //     vehicleNumber: "LEC-15-9876",
    //     driverName: "Faisal Shah",
    //     violation: "Seat Belt Violation",
    //     fine: 1500,
    //     date: "2025-05-18",
    //     time: "09:10 AM",
    //     status: "PAID"
    // },

    // {
    //     id: 4,
    //     challanNumber: "CH-2025-000120",
    //     vehicleNumber: "LED-22-5678",
    //     driverName: "Hamza Tariq",
    //     violation: "Overspeeding",
    //     fine: 2500,
    //     date: "2025-05-18",
    //     time: "08:50 AM",
    //     status: "OVERDUE"
    // },

    // {
    //     id: 5,
    //     challanNumber: "CH-2025-000119",
    //     vehicleNumber: "LEA-19-1111",
    //     driverName: "Bilal Ahmed",
    //     violation: "Illegal Parking",
    //     fine: 1500,
    //     date: "2025-05-18",
    //     time: "08:20 AM",
    //     status: "UNPAID"
    // },
     {
        C_Date: "2026-09-04",
        C_Time: "03:09",
        Province: "Sindh",
        City: "Lahore",
        TrafficSector: "GulbergSector",
        ViolationLocation: "kj",

        DriverInformation: {
            D_Name: "tfy",
            D_Fname: "df",
            Address: "d",
            LicenseType: "LTV",
            Cnic: "35202-9006056-2",
            D_License: "DL-123456"
        },

        Fine: {
            fines: [2000, 2000],
            fine: 4000
        },

        OfficerInfo: {
            O_name: "jkl",
            O_beltnm: "df",
            rank: "ASI"
        },

        VehicleInfo: {
            v_registration_no: "LEA-18-4587",
            v_type: "Van",
            v_brand: "Toyota",
            v_model: "Corolla 1.6",
            v_clr: "White"
        },

        Violations: [
            "No helmet",
            "Wrong-Way Violation"
        ],

        challanNmber: "CH-2026-707114"
    },
      
];

let challans =
    JSON.parse(localStorage.getItem("challans")) || defaultchallans;
let frst_dropdown_btn = document.querySelector('.frst-angle-btn');
let scnd_dropdown_btn = document.querySelector('.scnd-angle-btn');
let frst_menu = document.getElementById('frst-menu');
let scnd_menu = document.getElementById('scnd-menu');
if(frst_dropdown_btn){
frst_dropdown_btn.addEventListener('click',()=>{
       frst_menu.classList.toggle('d-none');
});
}
// second dropdown menu
if(scnd_dropdown_btn){
scnd_dropdown_btn.addEventListener('click',()=>{
       scnd_menu.classList.toggle('d-none');
});
}
let sidebar = document.querySelector('.sidebar');
let toggle_btn = document.querySelector('.bar-toggle-btn');
let  dashboard_menu = document.querySelector('.main-dashboard-card');
if(toggle_btn){
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
}

let table = document.querySelector('.table-body');

  let rows =  defaultchallans.map((e)=>{
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
if(table){

    table.innerHTML = rows.join("");
}
  
let newObj;
function ChallanInfoValidation(newObj){
     let challanDateField = document.querySelector('#challandate');
    let challanDate = document.querySelector('#challandate').value;
    let challanTime = document.querySelector('#Time').value;
    let Province = document.querySelector('#Province').value;
    let City = document.querySelector('#City').value;
    let TrafficSector = document.querySelector('#TrafficSector').value;
    let ViolationLocation = document.querySelector('#ViolationLocation').value;
    let error_text = document.querySelector('.error-text');
    if(challanDate.trim()=="" || challanTime.trim()=="" || City.trim()=="" || TrafficSector.trim()=="" || ViolationLocation.trim()=="" || Province.trim()==""){
        error_text.innerText = "Fill all fields .... all fields are required";
    }
    else{
        newObj.C_Date = challanDate;
        newObj.C_Time = challanTime;
        newObj.Province = Province;
        newObj.City = City;
        newObj.TrafficSector = TrafficSector;
        newObj.ViolationLocation = ViolationLocation;
        error_text.innerText = "";
    }
    let currentDate = new Date();
    let eneteredDate = new Date(challanDate);
    // it returns the enetered date
    if(eneteredDate > currentDate){
          challanDateField.classList.remove('is-valid');
        challanDateField.classList.add('is-invalid');
    }
    else{
        challanDateField.classList.remove('is-invalid');
         challanDateField.classList.add('is-valid');
        }
    if(challanDate!=="" && challanTime!=="" && Province!=="" && City!=="" && TrafficSector!=="" && ViolationLocation!==""){
        return true;
        }
    else{
            return false;
         }
   
    
}
function DriverInfoValidation(newObj){
     
    let DriverName = document.querySelector('#d_name').value;
    let FatherName = document.querySelector('#f_name').value;
    let CNICField = document.querySelector('#CNIC');
    let CNIC = document.querySelector('#CNIC').value;
    let DriverLicenseField = document.querySelector('#D_license');
    let DriverLicense = document.querySelector('#D_license').value;
    let LicenseType = document.querySelector('#LicenseType').value;
    let MobileNumberField = document.querySelector('#mob_no');
    let MobileNumber = document.querySelector('#mob_no').value;
    let error_text2= document.querySelector('.error-text2');
    regex_for_cnic =/(^\d{5})-(\d{7})-(\d{1}$)/;
    regex_for_LicenseNo = /(^[A-Za-z]{2})-(\d{4})-(\d{5}$)/
    regex_for_MobNo = /(^\d{4})-(\d{7}$)/;
    let address = document.querySelector('#address').value;
    if(DriverName.trim()=="" || FatherName.trim()=="" || LicenseType.trim()=="" || address.trim()==""){
        error_text2.innerText = "Fill all fields .... all fields are required";
    }
    else{
        newObj.DriverInformation  = {};
        newObj.DriverInformation.D_Name = DriverName;
        newObj.DriverInformation.D_Fname = FatherName;
        newObj.DriverInformation.Address= address;
        newObj.DriverInformation.LicenseType = LicenseType;
          error_text2.innerText = "";
    }
   if(regex_for_cnic.test(CNIC)){
    CNICField.classList.remove('is-invalid');
     CNICField.classList.add('is-valid');
     newObj.DriverInformation.Cnic = CNIC;
    }
    else{
        CNICField.classList.remove('is-valid');
        CNICField.classList.add('is-invalid');
    }
      if(regex_for_LicenseNo.test(DriverLicense)){
        DriverLicenseField.classList.remove('is-invalid');
     DriverLicenseField.classList.add('is-valid');
     newObj.DriverInformation.LicenseNumber = DriverLicense;
    }
    else{
        DriverLicenseField.classList.remove('is-valid');
        DriverLicenseField.classList.add('is-invalid');
    }

      if(regex_for_MobNo.test(MobileNumber)){
         MobileNumberField.classList.remove('is-invalid');
     MobileNumberField.classList.add('is-valid');
       newObj.DriverInformation.MobNumber = MobileNumber;
    }
    else{
         MobileNumberField.classList.remove('is-valid');
        MobileNumberField.classList.add('is-invalid');
    }
   if(DriverName!=="" && DriverLicense!=="" && FatherName!=="" && CNIC!=="" && LicenseType!=="" && MobileNumber!=="" && address!==""){
    return true;
   }
   else{
    return false;
   }
}
function StoringVehicleInfo(newObj){
    let RegistrationNo = document.querySelector('#reg_no').value;
    let VehicleType = document.querySelector('#V_type').value;
    let VehicleBrand = document.querySelector('#v_brand').value;
    let VehicleModel = document.querySelector('#v_model').value;
    let VehicleColor = document.querySelector('#V_clr').value;
      newObj.VehicleInfo = {};
      newObj.VehicleInfo.v_registration_no = RegistrationNo;
      newObj.VehicleInfo.v_type = VehicleType;
      newObj.VehicleInfo.v_brand = VehicleBrand;
      newObj.VehicleInfo.v_model = VehicleModel;
      newObj.VehicleInfo.v_clr = VehicleColor;
      if(RegistrationNo!=="" && VehicleType!=="" && VehicleBrand!=="" && VehicleModel!=="" && VehicleColor!==""){
        return true;
      }
      else{
        return false;
      }
}
function ViolationsValidation(newObj){
   
      let error_text3 = document.querySelector('.error-text3');
    let checkboxes =  document.querySelectorAll("input[type = 'checkbox']");
    // console.log(checkboxes);
    newObj.Violations = [];
    checkboxes.forEach((boxes)=>{
        if(boxes.checked){
            // console.log(boxes.value);
            newObj.Violations.push(boxes.value);
            error_text3.innerText = "";
        }
         else{
         error_text3.innerText ='Choose a Violation';
    }
    })  
   return true;
}
function OfficerValidation(newObj){
    let error_text4 = document.querySelector('.error-text4');
    let officerName = document.querySelector('#Officer_name').value;
    let BeltNo = document.querySelector('#Belt_no').value;
    let Rank =  document.querySelector("#rank").value;
    if(officerName.trim()=="" || BeltNo.trim()=="" || Rank.value==""){
        error_text4.innerText = "fill all the fields";
    }
    else{
        newObj.OfficerInfo = {};
        newObj.OfficerInfo.O_name = officerName;
        newObj.OfficerInfo.O_beltnm = BeltNo;
        newObj.OfficerInfo.rank = Rank;
        error_text4.innerText = "";
        return true;
    }
}
function fineCalculation(newObj) {
    let checkboxes = document.querySelectorAll(
        ".violation_list_hol .form-check-input"
    );
    let sum = 0;
    let fines = [],v_fine;
    checkboxes.forEach((chkBox) =>{
        if(chkBox.checked){
            let target = chkBox.closest(".form-check");
            let fine = target.nextElementSibling;
             v_fine = Number(
                fine.innerText.replace(/,/g, "")
            );
            fines.push(v_fine);
            sum += v_fine;
        }
    });
    newObj.Fine = {
        fines: fines,
        fine: sum
    };
    return newObj;
}
function validation(){
    let newObj = {};
   let CI =  ChallanInfoValidation(newObj);
   let DI =  DriverInfoValidation(newObj);
   let SV =  StoringVehicleInfo(newObj);
   let VV =  ViolationsValidation(newObj);
   let OV =  OfficerValidation(newObj);

             fineCalculation(newObj);

   let challan_nm = RandomChallanNumGenerator();
    newObj.challanNmber = challan_nm;
//    console.log(CI);
//    console.log(DI);
//    console.log(SV);
//    console.log(VV);
//    console.log(OV);
   if(CI && DI && SV && VV && OV){
    return newObj;
   }
else{
    return null;
}
}

function RandomChallanNumGenerator(){
    let rand,nm ="CH-2026-"; 
   for(let i=0 ;i<6 ;i++){
     rand = Math.floor(Math.random()*10);
     nm+=rand;
   }
   return nm;
//    console.log(nm);
}
function showData(){

    let data2 = JSON.parse(localStorage.getItem("latestData")) ||  defaultchallans;
    // data2.push()
    for(let i=0;i<data2.length;i++){
        console.log(data2[i]);
    }
}
// fineCalculation();

let PreviewBtn = document.querySelector('.Preview-btn');
if(PreviewBtn){
PreviewBtn.addEventListener('click',()=>{
   let newObj =  validation();
   if(!newObj){
         return;
     }
           challans.push(newObj);
      localStorage.setItem("challans",JSON.stringify(challans));
     localStorage.setItem("latestData",JSON.stringify(newObj))  || [] ;
    window.location.href = "Challan.html";

}
)}
let cancel_btn  =  document.querySelector('.cncl-btn');
if(cancel_btn){
cancel_btn.addEventListener('click',()=>{
    let data = document.querySelectorAll(".forms .form-control");
    let select_data = document.querySelectorAll('.forms .form-select');
    let checkBoX_data = document.querySelectorAll('.Violation_list .form-check-input');

    checkBoX_data.forEach((e)=>{
        e.checked = false;
    })
    data.forEach((e)=>{
        e.value = "";
    });
    select_data.forEach((e)=>{
        e.value = "";
    })
})}

let challanList = document.querySelector(".frst_list");
function AccessingDataFromObject(object,path){
    return path.split('.').reduce((value,key)=>{
        return value?.[key];
    },object);
}
function dataOnNewChallan(){
 let dta = JSON.parse(localStorage.getItem("latestData"));
    let table_violation = document.querySelector('#tble-body');
    let fine_card = document.querySelector('#fine-card');
    let print_btn = document.querySelector('.print-btn');
    print_btn.addEventListener('click',()=>{
        window.print();
    })

    let violation = dta.Violations;
    let array_of_fines = dta.Fine.fines;
    let total_fine = dta.Fine.fine;
  
    // console.log(array_of_fines);
  let v =  violation.map((e,index)=>{
     return `<tr class="r">
        <td>${e}</td>
        <td>${array_of_fines[index]}</td>
        </tr>
        `
    });
    table_violation.innerHTML = v.join("");

    let chlan_nm = document.querySelector('.ch-nm');
    chlan_nm.innerText = dta["challanNmber"];
    fine_card.innerText =total_fine;
    let spans = document.querySelectorAll(".frst_list .span_data");

    spans.forEach((ele) => {
        let field = ele.dataset.field;  
        ele.innerText = AccessingDataFromObject(dta,field);

    });

}
if (challanList) {
   dataOnNewChallan();
//    newData();
}

// showData();
// localStorage.removeItem("challans");
// let t = JSON.parse(localStorage.getItem("latestData"));
// console.log(t);
let newData = JSON.parse(localStorage.getItem("challans"));

 newData = newData.filter((objects)=>{
    return objects.id!==5 && objects.id!==4 && objects.id!==3 && objects.id!==2 && objects.id!==1
 });
 localStorage.setItem("newData",JSON.stringify(newData));
 let table_for_challans = document.querySelector('#table-for-all-challans');
 function renderDaata(){
    
    let challans_data = JSON.parse(localStorage.getItem('newData'));
    let id=0;
    console.log(challans_data);
   let render_table_data = challans_data.map((e)=>{
        id++;
         return `<tr class="table-row">
         <td>${id}</td>
              <td id="challanNm">${e.challanNmber}</td>
              <td>${e.C_Date}</td>
              <td>${e.C_Time}</td>
              <td>${e.VehicleInfo.v_registration_no}</td>
              <td>${e.DriverInformation.D_Name}</td>
              <td>${e.Fine?.fine}</td>
              <td class="icons-hol"><i class="fa-regular fa-eye text-primary"></i> <i class="fa-solid ms-4 fa-trash text-danger"></i></td>
              
         </tr>`
    });
    table_for_challans.innerHTML = render_table_data.join("");
}
function filterByChallanNumber(){
  let id=0;
    let searchInp =  document.querySelector('.ch-nm-inp');
  
    let srchData = searchInp.value.trim();
        let challanData = JSON.parse(localStorage.getItem('newData'));
        let filterData =  challanData.map((e)=>{
            if(e.challanNmber == srchData){
                id++;
                return `<tr class="table-row">
               <td>${id}</td>
              <td id="challanNm">${e.challanNmber}</td>
              <td>${e.C_Date}</td>
              <td>${e.C_Time}</td>
              <td>${e.VehicleInfo.v_registration_no}</td>
              <td>${e.DriverInformation.D_Name}</td>
              <td>${e.Fine?.fine}</td>
              <td class="icons-hol"><i class="fa-regular fa-eye text-primary"></i> <i class="fa-solid ms-4 fa-trash text-danger"></i></td>
         </tr>`
            }
        });
        let renderTable =  document.querySelector('#table-for-all-challans');
        renderTable.innerHTML  =  filterData.join("");
}
function filterByViolationStatus(optionValue){
    let id=0;
    let challanData = JSON.parse(localStorage.getItem('newData'));
        let filterData =  challanData.map((e)=>{
            for(let i=0 ;i<7;i++){
            if(e.Violations[i] == optionValue){
                id++;
                return `<tr class="table-row">
               <td>${id}</td>
              <td id="challanNm">${e.challanNmber}</td>
              <td>${e.C_Date}</td>
              <td>${e.C_Time}</td>
              <td>${e.VehicleInfo.v_registration_no}</td>
              <td>${e.DriverInformation.D_Name}</td>
              <td>${e.Fine?.fine}</td>
              <td class="icons-hol"><i class="fa-regular fa-eye text-primary"></i> <i class="fa-solid ms-4 fa-trash text-danger"></i></td>
         </tr>`
            }
        }
        });
        let renderTable =  document.querySelector('#table-for-all-challans');
        renderTable.innerHTML  =  filterData.join("");
}

// function DataShowOnEyeIconClick(challanNmuber){
//  let dta = JSON.parse(localStorage.getItem("newData"));
//     let table_violation = document.querySelector('#tble-body');
//     let fine_card = document.querySelector('#fine-card');
//     let print_btn = document.querySelector('.print-btn');
//      let chlan_nm = document.querySelector('.ch-nm');
//     print_btn.addEventListener('click',()=>{
//         window.print();
//     }) 
// console.log(dta);
//     dta.map((e)=>{
//         if(e.challanNmber == challanNmuber){
//             console.log()
//            chlan_nm.innerText = challanNmuber;

//         }
//     })

//     let violation = dta.Violations;
//     let array_of_fines = dta.Fine.fines;
//     let total_fine = dta.Fine.fine;
//     // console.log(array_of_fines);
//   let v =  violation.map((e,index)=>{
//      return `<tr class="r">
//         <td>${e}</td>
//         <td>${array_of_fines[index]}</td>
//         </tr>
//         `
//     });
//     table_violation.innerHTML = v.join("");

//    
//     fine_card.innerText =total_fine;
//     let spans = document.querySelectorAll(".frst_list .span_data");

//     spans.forEach((ele) => {
//         let field = ele.dataset.field;  
//         ele.innerText = AccessingDataFromObject(dta,field);

    // });

// }
 function Latest(){
    table_for_challans.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-eye')){
              let row = e.target.closest('.table-row');
              let chllanNm = row.querySelector('#challanNm');
              let eye_icon = row.querySelector('.icons-hol .fa-eye');
              console.log(eye_icon);
              window.location.href = "Challan.html";
              dataOnNewChallan(chllanNm);
        }
    })
}
// DataShowOnEyeIconClick();
if(table_for_challans){
    renderDaata();
    let ViolationListHol = document.querySelector('#violation-status');   
    let optionValue = "";
    ViolationListHol.addEventListener('change',(e)=>{
        optionValue = e.target.value;
        console.log()
        filterByViolationStatus(optionValue);
    })
    let searchBtn = document.querySelector('.srch-btn');
    searchBtn.addEventListener('click',()=>{
        filterByChallanNumber();

        let searchInp =  document.querySelector('.ch-nm-inp');
        searchInp.addEventListener('focusin',()=>{
            renderDaata();
        })
    });
    Latest();
   
}
// }
