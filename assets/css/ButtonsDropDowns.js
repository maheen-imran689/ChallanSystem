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
let table = document.querySelector('.table-body');
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
let loginInfo ={
       userName:'admin',
       password:'1234'
};
if (localStorage.getItem("loginInfo") == null) {
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
}
function LoginInfo(){
     let data = JSON.parse(localStorage.getItem("loginInfo"));
    let Password = document.querySelector('#Password').value;
    let username = document.querySelector('#username').value;
    console.log(username);
    console.log(Password);
    let warningPara = document.querySelector('.warning-para');
    if(Password == "" && username == ""){
        warningPara.innerText = "Fill the required Crediantals";
    }
     if(data.userName == username && data.password == Password){
        window.location.href ="Dashboard.html";
     }
     else{
         warningPara.innerText = "Invalid Crediantals";
     }
      warningPara.innerText = "";
}
let loginPage = document.querySelector('#loginPage');
if(loginPage) {
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    LoginInfo();
})

}

function ChngePassAndUsername() {
     let data = JSON.parse(localStorage.getItem("loginInfo"));
      let Password = document.querySelector('#chngePassword').value;
      let username = document.querySelector('#chngeusername').value;
      let pswrdchngWarning = document.querySelector('.pswrdchng-warning');
      if(Password == "" && username == "") {
           pswrdchngWarning.innerText = "Password has not been changed";
      }
      else{
        pswrdchngWarning.innerText = "Password changed successfully";
        data.userName = username;
        data.password = Password;
        localStorage.setItem('loginInfo',JSON.stringify(data));
      }

let data2 = JSON.parse(localStorage.getItem("loginInfo"));
console.log(data2);

}
function ChangeProfileImage() {
    let chngeImg = document.querySelector('#chngeImg');
    let profileImg = document.querySelector('.profile-img');
    let file = chngeImg.files[0];
    profileImg.src = URL.createObjectURL(file);
       console.log(chngeImg);
}
let SettingsBody = document.querySelector('#SettingsBody');
if(SettingsBody) {
  let saveBtn = document.querySelector('.saveBtn');
  saveBtn.addEventListener('click',() =>{
    ChngePassAndUsername();
  })
  let UploadBtn = document.querySelector('.UploadBtn');
   UploadBtn.addEventListener('click',() =>{
    ChangeProfileImage();
  })
}
