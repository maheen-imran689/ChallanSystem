let defaultViolations = [
    {
        v_id:"V-67",
        v_name:"Signal Violation",
        v_category:"Traffic Signal",
        v_effectiveDate:'2026-09-16'
        ,v_jurisdiction:"Punjab",
        v_fineAmount:'2000',
        v_status:'active'
    }
];
let obj;
let violations  =  JSON.parse(localStorage.getItem("violations")) || defaultViolations;
// console.log(violations);
function AddViolation() {
    let violationId = "V-";
    for(let i=0;i<2;i++){
        let rand = Math.floor(Math.random()*10);
       violationId+=rand;   
 }   
 obj ={};
 let violationValidationHdng = document.querySelector('.violationValidationHdng');
 let name = document.querySelector('#name').value;
 let category = document.querySelector('#category').value;
 let jurisdiction = document.querySelector('#jurisdiction').value;
 let status = document.querySelector('#status').value;
 let fineAmount = document.querySelector('#fineAmount').value;
 let validationForFine = document.querySelector('.validationForFine');
 if(name == "" && category == "" && jurisdiction == "" && status == "") {
    violationValidationHdng.innerText = "Fill all required fields";
 }
 else{
   violationValidationHdng.innerText = "";
   obj.v_id = violationId;
   obj.v_name = name;
   obj.v_category = category;
   obj.v_effectiveDate = new Date().toISOString().split('T')[0] ;
   obj.v_jurisdiction = jurisdiction;
   obj.v_status = status;
 }
   if(fineAmount<0){
       validationForFine.innerText = "Enter Valid Fine Amount";
   }
   else{
    validationForFine.innerText = "";
    obj.v_fineAmount = fineAmount;
   }
   violations.push(obj);
   localStorage.setItem('violations',JSON.stringify(violations));
 
}
function ClickOnTrashIcon() {
    let clickedViolationId = localStorage.getItem('SlctdViolation');
    let data = JSON.parse(localStorage.getItem('violations'));
    let flag = false;
     data.map(e => {
        if(clickedViolationId == e.v_id){
            data = data.filter((e) =>{
                return clickedViolationId !== e.v_id;
            })
        }
    });
    localStorage.setItem('violations',JSON.stringify(data));
    flag = true;
     let filterData = JSON.parse(localStorage.getItem('violations'));
    ViolationRender(filterData,flag);

}
function ViolationRender(filterData = false,flag = false) {
    let id = 0;
    let ViolationListTable = document.querySelector('#ViolationListTable');
    let data = JSON.parse(localStorage.getItem('violations'));
    let tableData;
    if(flag){
        tableData = filterData.map((e) =>{
         id++;
             return `<tr class ="tableRow">
                 <td>${id}</td>
                 <td class ="vId">${e.v_id}</td>
                 <td>${e.v_name}</td>
                 <td>${e.v_category}</td>
                 <td>${e.v_jurisdiction}</td>
                 <td>${e.v_fineAmount}</td>
                 <td>${e.v_status}</td>
                 <td>${e.v_effectiveDate}</td>
                 <td><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
             </tr>
             `
         })

    }
    else{
        tableData = data.map((e) =>{
         id++;
             return `<tr class ="tableRow">
                 <td>${id}</td>
                 <td class ="vId">${e.v_id}</td>
                 <td>${e.v_name}</td>
                 <td>${e.v_category}</td>
                 <td>${e.v_jurisdiction}</td>
                 <td>${e.v_fineAmount}</td>
                 <td>${e.v_status}</td>
                 <td>${e.v_effectiveDate}</td>
                 <td><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
             </tr>
             `
         })
    }
    ViolationListTable.innerHTML = tableData.join("");
    
}
function NavigationTowardsEditForm() {
    window.location.href = "EditViolations.html";
    return true;

}


function ShowDataOnPlaceHolders() {
    let slctedId =  localStorage.getItem('VidOnPenClick');
    let data = JSON.parse(localStorage.getItem('violations'));
    let VName = document.querySelector('#VName');
    let jurisdiction = document.querySelector('#jurisdiction');
    let status = document.querySelector('#status');
    let category = document.querySelector('#category');
    let fineAmount = document.querySelector('#fineAmount');

    data.forEach((e) =>{
        if(slctedId == e.v_id){
           VName.placeholder = e.v_name;
           jurisdiction.placeholder = e.v_jurisdiction;
           category.placeholder = e.v_category;
           status.placeholder = e.v_status;
           fineAmount.placeholder = e.v_fineAmount;

        }
    })
}
function DataSaveOnEditClick() {
    let slctedId =  localStorage.getItem('VidOnPenClick');
    let data = JSON.parse(localStorage.getItem('violations'));
    let VName = document.querySelector('#VName').value;
    let jurisdiction = document.querySelector('#jurisdiction').value;
    let status = document.querySelector('#status').value;
    let category = document.querySelector('#category').value;
    let fineAmount = document.querySelector('#fineAmount').value;
     let info = document.querySelector('.info-upd');
    data.forEach((e) =>{
        if(slctedId == e.v_id){
           VName = VName =="" ? e.v_name : VName ;
           e.v_name = VName;
           jurisdiction = jurisdiction == "" ? e.v_jurisdiction:jurisdiction;
           e.v_jurisdiction = jurisdiction;
           category = category == "" ? e.v_category:category;
           e.v_category = category;
           status = status == "" ? e.v_status:status;
           e.v_status = status;
           fineAmount = fineAmount == ""? e.v_fineAmount:fineAmount;
           e.v_fineAmount = fineAmount;

        }
    })
    localStorage.setItem('violations',JSON.stringify(data));
     info.innerText = "Information Updated";
}
 function searchWithStatus() {
     let table = document.querySelector('#ViolationListTable');
    let data = JSON.parse(localStorage.getItem('violations'));
    let AvailableStatus = document.querySelector('#AvailableStatus').value;
    if(AvailableStatus == "") {
        return;
    }       
     let id=0;
     let FilterData = data.map((e) =>{
        id++;
        if(AvailableStatus == e.v_status){
        return `<tr class ="tableRow">
                 <td>${id}</td>
                 <td class ="vId">${e.v_id}</td>
                 <td>${e.v_name}</td>
                 <td>${e.v_category}</td>
                 <td>${e.v_jurisdiction}</td>
                 <td>${e.v_fineAmount}</td>
                 <td>${e.v_status}</td>
                 <td>${e.v_effectiveDate}</td>
                 <td><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
             </tr>
             `
        }
       })
       table.innerHTML = FilterData.join("");
  }

   function searchWithJurisdiction() {
     let table = document.querySelector('#ViolationListTable');
    let data = JSON.parse(localStorage.getItem('violations'));
    let AvailableJurisdiction = document.querySelector('#Jurisdiction').value;
    if(AvailableJurisdiction == "") {
        return;
    }       
     let id=0;
     let FilterData = data.map((e) =>{
        id++;
        if(AvailableJurisdiction.toLowerCase() == e.v_jurisdiction.toLowerCase()){
        return `<tr class ="tableRow">
                 <td>${id}</td>
                 <td class ="vId">${e.v_id}</td>
                 <td>${e.v_name}</td>
                 <td>${e.v_category}</td>
                 <td>${e.v_jurisdiction}</td>
                 <td>${e.v_fineAmount}</td>
                 <td>${e.v_status}</td>
                 <td>${e.v_effectiveDate}</td>
                 <td><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
             </tr>
             `
        }
       })
       table.innerHTML = FilterData.join("");
  }

//   searchWithCategory();
 function searchWithCategory() {
     let table = document.querySelector('#ViolationListTable');
    let data = JSON.parse(localStorage.getItem('violations'));
    let AvailableCategory = document.querySelector('#Searchcategory').value;
    console.log(data);
    console.log(AvailableCategory);
    if(AvailableCategory == "") {
        return;
    }       
     let id=0;
     let FilterData = data.map((e) =>{
        id++;
        if(AvailableCategory.toLowerCase() == e.v_category.toLowerCase()){
            console.log('djkf');
        return `<tr class ="tableRow">
                 <td>${id}</td>
                 <td class ="vId">${e.v_id}</td>
                 <td>${e.v_name}</td>
                 <td>${e.v_category}</td>
                 <td>${e.v_jurisdiction}</td>
                 <td>${e.v_fineAmount}</td>
                 <td>${e.v_status}</td>
                 <td>${e.v_effectiveDate}</td>
                 <td><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
             </tr>
             `
        }
       })
    //  let FilterData = data.filter((e) => {
    //     return AvailableCategory.toLowerCase() == e.v_category.toLowerCase();
    // });

    // FilterData = FilterData.map((e) => {
    //     id++;

    //     return `<tr class="tableRow">
    //                 <td>${id}</td>
    //                 <td class="vId">${e.v_id}</td>
    //                 <td>${e.v_name}</td>
    //                 <td>${e.v_category}</td>
    //                 <td>${e.v_jurisdiction}</td>
    //                 <td>${e.v_fineAmount}</td>
    //                 <td>${e.v_status}</td>
    //                 <td>${e.v_effectiveDate}</td>
    //                 <td>
    //                     <i class="fa-solid fa-pen text-success me-2"></i>
    //                     <i class="fa-solid fa-trash text-danger"></i>
    //                 </td>
    //             </tr>`;
    // });

       table.innerHTML = FilterData.join("");
  }
let ViolationPageBody = document.querySelector('#ViolationPageBody');
if(ViolationPageBody){
    ViolationRender();
    let violationAddBtn = document.querySelector('.violationAddBtn');
    violationAddBtn.addEventListener('click',() =>{
        AddViolation();
    })
    let ViolationListTable = document.querySelector('#ViolationListTable');
    ViolationListTable.addEventListener('click',(e) =>{
        if(e.target.classList.contains('fa-trash')){
            let row = e.target.closest('.tableRow');
            let violationId = row.querySelector('.vId');
            localStorage.setItem('SlctdViolation',violationId.innerText);
            ClickOnTrashIcon();
        }
    })
    ViolationListTable.addEventListener('click',(e) =>{
        if(e.target.classList.contains('fa-pen')){
            let row = e.target.closest('.tableRow');
            let violationId = row.querySelector('.vId');
            localStorage.setItem('VidOnPenClick',violationId.innerText);
            // console.log(violationId);
            NavigationTowardsEditForm();
        }
    })
    
    let Category = document.querySelector('#Searchcategory');
   Category.addEventListener('change',() =>{
       searchWithCategory();
   })
    let AvailableStatus = document.querySelector('#AvailableStatus');
    AvailableStatus.addEventListener('change',() =>{
        searchWithStatus();
    })

    let Jurisdiction = document.querySelector('#Jurisdiction');
    Jurisdiction.addEventListener('change',() =>{
        searchWithJurisdiction();
    })


}
let EditFormForViolations = document.querySelector('#EditFormForViolations');
if(EditFormForViolations){
   ShowDataOnPlaceHolders();
   let editBtnForViolation = document.querySelector('.editBtnForViolation');
   editBtnForViolation.addEventListener('click',(e) =>{
    e.preventDefault();
    DataSaveOnEditClick();
   })
}
// Signal Violation	Traffic Signal
// No Helmet	Motorcycle
// Seat Belt Violation	Safety
// Wrong-Way Driving	Driving
// Overspeeding	Speed
// Illegal U-Turn	Driving
// Mobile Phone While Driving	Driving
// Illegal Parking	Parking/Road
// Missing Number Plate	Vehicle Documentation
let data = JSON.parse(localStorage.getItem('violations'));
console.log(data);
