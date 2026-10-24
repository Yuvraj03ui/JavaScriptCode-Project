
    // let btn1 =document.querySelector("#btn1");
    
    // btn1.onclick =() => {
    //   console.log("btn1 was clicke");
    //    let a= 24;
    
    //    console.log(a);
    // }
 

    let modebtn = document.querySelector("#mode");
    let body =document.querySelector("body")

   let currentmode = "light";
    modebtn.addEventListener("click", () =>{
       
      if(currentmode === "light"){
        currentmode ="dark";
        body.classList.add("dark")
     
        // document.querySelector("body").style.backgroundColor ="black";
      }else {
        currentmode ="light"
          body.classList.add("light")
           body.classList.remove("light")
        // document.querySelector("body").style.backgroundColor ="white";
      }
      console.log(currentmode);
    })