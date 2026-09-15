let defaultofficers = [
    {
        name:'Arif',
        rank:'IG',
        beltNm:'0-1273',
        sector:'raiwind Sector',
        status:'active'
    }
]
let officers =
    JSON.parse(localStorage.getItem("officers")) || defaultofficers;
function renderOfficersData(pageData){
     let Officertable = document.querySelector('#Officertable');
    console.log(pageData);
     let id=0;
     let addData = pageData.map((e) =>{
        id++;
            return `<tr class="t-row">
            <td>${id}</td>
            <td>${e.name}</td>
            <td class="beltNm">${e.beltNm}</td>
            <td>${e.rank}</td>
             <td>${e.sector}</td>
              <td>${e.status}</td>
              <td><i class="fa-solid fa-eye text-primary me-2"></i><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
            </tr>`
        })
        // console.log(addData);
      Officertable.innerHTML = addData.join("");
    }

    let obj;
function ValidationForOfficerDetail(){
    let beltNm ="0-";
     for(let i=0;i<4 ;i++ ) {
         let Number=Math.floor(Math.random()*10);
         beltNm += Number;
     }
     obj ={};
    //  console.log(beltNm);
        let Sector = document.querySelector('#Sector').value;
        let rank = document.querySelector('#rank').value;
        let officerName = document.querySelector('#officerName').value;
        let status = document.querySelector('#status').value;

        let validationHdng = document.querySelector('.validationHdng');
        
        if(Sector == "" || rank == "" || officerName == "" || status == ""){
            validationHdng.innerText = 'Fill all fields accurately';
        }
        else{
             obj.name = officerName;
             obj.rank = rank;
             obj.beltNm = beltNm;
             obj.sector = Sector;
             obj.status =status;
            officers.push(obj);
             localStorage.setItem('officers',JSON.stringify(officers));
            validationHdng.innerText = "Officer Data Added";
        }
      return  obj;
      
    }
     function paginationEngine(currentPageNumber = "1",filterData=false,flag=false){
     let officersData = JSON.parse(localStorage.getItem("officers"));
    let currentPage  = currentPageNumber;
    let rowsPerPage = 5;
    let start = (currentPage - 1) * rowsPerPage;
    let end ,pageData;
   
    if(flag){
     end = Math.min(start + rowsPerPage, filterData.length);
       pageData = filterData.slice(start, end);   
    }
    else{
       end = Math.min(start + rowsPerPage, officersData.length);
         pageData = officersData.slice(start, end);
    }
    // console.log(pageData);
        renderOfficersData(pageData);
 }
 function paginationNumberBtns(){
    let dta = JSON.parse(localStorage.getItem("officers"));
    let rowsPerPage = 5;
    let TotalPages =  Math.ceil(dta.length / rowsPerPage);
     let array = [];
    for(let i=1;i<=TotalPages;i++){
           array.push(i);
    }
    let newListBtns =  array.map((e)=>{
        return ` 
        <li class="page-item" aria-current="page">
        <span class="page-link">${e}</span>
        </li>`
    })
    // console.log(newListBtns);
     let pagination = document.querySelector('.pagination');
     pagination.innerHTML = newListBtns.join("");
 }

 function FilterOnTrashIconClick (beltNm) {
    let data = JSON.parse(localStorage.getItem('officers'));
    let flag = false;
              data.map((e)=>{
                if(e.beltNm == beltNm.innerText){
                    data = data.filter((e)=>{
                        return e.beltNm!==beltNm.innerText;
                    })
                    localStorage.setItem("officers",JSON.stringify(data));
                     let filterData = JSON.parse(localStorage.getItem('officers'));
                     flag=true;
                     paginationEngine("1",filterData,flag);

        }
    })
 }
 function navigateOnOfficerDetailPage(){
    window.location.href="ViewOfficerDetails.html";
    return true;

 }
 function DataShowOnEyeClick() {
    let nmber = localStorage.getItem('slctdBeltNm');
     let data =JSON.parse(localStorage.getItem("officers"));
    //  console.log(data);
    let o_name = document.querySelector('#o_name');
    let rank = document.querySelector('#rank');
    let status = document.querySelector('#status');
    let sector = document.querySelector('#sector');
    let bltnm = document.querySelector('#bltnm');
    let print_btn = document.querySelector('.print-btn');
    if(print_btn){
    print_btn.addEventListener('click',()=>{
        window.print();
    }) }    

    data.forEach((e) =>{
        if(nmber == e.beltNm) {
            o_name.innerText = e.name;
            rank.innerText = e.rank;
            status.innerText = e.status;
            sector.innerText = e.sector;
            bltnm.innerText = e.beltNm;
           
        }

    })
       
 } 

 function navigateToEditForm(){
    window.location.href = "EditFormOfficers.html";
    return true;

 }
  function ClickOnEditBtn() {
    let nmber = localStorage.getItem('beltNmForEdit');
     let data =JSON.parse(localStorage.getItem("officers"));
    let o_name = document.querySelector('#oName');
    let rank = document.querySelector('#rank');
    let status = document.querySelector('#status');
    let sector = document.querySelector('#Sector');
    data.forEach((e) =>{
        if(nmber == e.beltNm) {
            o_name.placeholder = e.name;
            rank.placeholder = e.rank;
            status.placeholder = e.status;
            sector.placeholder = e.sector;           
        }
    })
    
 } 
 function dataSavedAfterEditClick(){
    let nmber = localStorage.getItem('beltNmForEdit');
    let data =JSON.parse(localStorage.getItem("officers"));
    let o_name = document.querySelector('#oName').value;
    let rank = document.querySelector('#rank').value;
    let status = document.querySelector('#status').value;
    let sector = document.querySelector('#Sector').value;
    let info = document.querySelector('.info-upd');
     
    data.forEach((e) =>{
        if(nmber == e.beltNm) {
            o_name = o_name =="" ? e.name:o_name;
            e.name =o_name;
            rank = rank == "" ? e.rank:rank;
            e.rank = rank;
            status = status == "" ?  e.status:status;
            e.status = status;
            sector = sector =="" ?  e.sector:sector;         
            e.sector = sector;  
        }
    })
    localStorage.setItem('officers',JSON.stringify(data));
    // console.log(data);
    info.innerText = "Information Updated";
 }

 function SearchWithBeltNm() {
    let table = document.querySelector('#Officertable');
    let data = JSON.parse(localStorage.getItem('officers'));
    let bltNmInpField = document.querySelector('#blt-nm-inp');
    let bltNmInp = document.querySelector('#blt-nm-inp').value;
    if(bltNmInp == "") {
        bltNmInpField.placeholder = "Enter value to search...";
    }        let id=0;
     let FilterData = data.map((e) =>{
        id++;
        if(bltNmInp == e.beltNm){
        return `<tr class="t-row">
            <td>${id}</td>
            <td>${e.name}</td>
            <td class="beltNm">${e.beltNm}</td>
            <td>${e.rank}</td>
             <td>${e.sector}</td>
              <td>${e.status}</td>
              <td><i class="fa-solid fa-eye text-primary me-2"></i><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
            </tr>`
        }
       })
       table.innerHTML = FilterData.join("");
 }
  function searchWithStatus() {
     let table = document.querySelector('#Officertable');
    let data = JSON.parse(localStorage.getItem('officers'));
    let AvailableStatus = document.querySelector('#AvailableStatus').value;
    if(AvailableStatus == "") {
        return;
    }       
     let id=0;
     let FilterData = data.map((e) =>{
        id++;
        if(AvailableStatus == e.status){
        return `<tr class="t-row">
            <td>${id}</td>
            <td>${e.name}</td>
            <td class="beltNm">${e.beltNm}</td>
            <td>${e.rank}</td>
             <td>${e.sector}</td>
              <td>${e.status}</td>
              <td><i class="fa-solid fa-eye text-primary me-2"></i><i class="fa-solid fa-pen text-success me-2"></i><i class="fa-solid fa-trash text-danger"></i></td>
            </tr>`
        }
       })
       table.innerHTML = FilterData.join("");
  }
let officerPageBody = document.querySelector('#officerPageBody');
if(officerPageBody){
    paginationNumberBtns();
    paginationEngine();
    let pagination = document.querySelector('.pagination');
    pagination.addEventListener('click',(e) =>{
          if(e.target.closest('.page-item')){
            let currentPageNumber = e.target.closest('.page-link');
            crntPageNm = currentPageNumber.innerText;
            console.log(typeof(crntPageNm));
            paginationEngine(crntPageNm);
        }
    });
    let bltSrchBtn = document.querySelector('.blt-srch-btn');
    bltSrchBtn.addEventListener('click',() =>{
        SearchWithBeltNm();
     
    })
        let table = document.querySelector('#Officertable');
        table.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-trash')){
            let row = e.target.closest('.t-row');
            let trashIcon = e.target;
            let beltNm = row.querySelector('.beltNm');
            FilterOnTrashIconClick(beltNm);
        }})
        
        let officerAddBtn = document.querySelector('.officerAddBtn');
    if(officerAddBtn){
        officerAddBtn.addEventListener('click',() =>{
            ValidationForOfficerDetail();
        })
    }

     table.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-pen')){
            let row = e.target.closest('.t-row');
            let beltNm = row.querySelector('.beltNm');
            localStorage.setItem('beltNmForEdit',beltNm.innerText);
           navigateToEditForm();
        }})

    table.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-eye')){
            let row = e.target.closest('.t-row');
            let beltNm = row.querySelector('.beltNm');
            localStorage.setItem('slctdBeltNm',beltNm.innerText);
           response =  navigateOnOfficerDetailPage();
        }
    })

    let bltNmInpField = document.querySelector('#blt-nm-inp');
  bltNmInpField.addEventListener('focusin',() =>{
     paginationEngine();
  })
  let AvailableStatus = document.querySelector('#AvailableStatus');
  AvailableStatus.addEventListener('change',() =>{
         searchWithStatus();
  })
}
 
let detailBody = document.querySelector('#OfficersDetail');
if(detailBody) {
      DataShowOnEyeClick();
}
let EditForm = document.querySelector('#EditForm');
if(EditForm){
ClickOnEditBtn();

let editBtn = document.querySelector('.editBtn');
editBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    dataSavedAfterEditClick();
})
 
}
let data = JSON.parse(localStorage.getItem('officers'));
console.log(data);
//   let o_name = document.querySelector('#oName');
//   console.log(o_name.Placeholder="bgsfjk");