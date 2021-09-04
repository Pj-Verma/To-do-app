 
 const inputBox=document.querySelector(".inputField input");
 const addBtn=document.querySelector(".inputField button");
 const ClearAllBtn=document.querySelector(".footer button");
 const todoList=document.querySelector(".todoList");

 inputBox.onkeyup=()=>{
     let userdata=inputBox.value;
     if(userdata.trim()!=0){
         addBtn.classList.add("active");
     }
     else{
        addBtn.classList.remove("active");

     }
    }
    showTask();
 addBtn.onclick=()=>{
     let userData=inputBox.value;
     let getLocalStorage=localStorage.getItem("New Todo");
     if(getLocalStorage==null){
         listArr=[];

     }
     else{
         listArr=JSON.parse(getLocalStorage);
     }
     listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTask();
    addBtn.classList.remove("active");

 }
 //Add task
 function showTask(){
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];

    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    const pendingNumb=document.querySelector(".pendingNumb")
    pendingNumb.textContent=listArr.length;
    if(listArr.length>0){
        ClearAllBtn.classList.add("active");
    }
    else{
        ClearAllBtn.classList.remove("active");

    }
    let newLiTag='';
    listArr.forEach((element,index )=> {
        newLiTag+=   `<li>${element}<span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`
        
    });
    todoList.innerHTML=newLiTag;
    inputBox.value="";
 }
 //delete
 function deleteTask(index){
    let getLocalStorage=localStorage.getItem("New Todo");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTask();
 }

 //Clear All

 ClearAllBtn.onclick=()=>{
     listArr=[];
     localStorage.setItem("New Todo",JSON.stringify(listArr));
     showTask();
 }