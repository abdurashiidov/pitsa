const elSelectQan = document.querySelector("#pitsa-select") //! select

const elNoni = document.querySelector(".span-noni") //! for textContent
const elKota = document.querySelector(".span-kota")
const elUst = document.querySelectorAll(".span-ust")
const elQoshim = document.querySelectorAll(".span-qoshim") 

const elRound1 = document.querySelectorAll(".pitsa__left__wrap-size__1")  //! size
const elRound2 = document.querySelectorAll(".pitsa__left__wrap-size__2") 
const elRound3 = document.querySelectorAll(".pitsa__left__wrap-size__3") 

const elActivQosh = document.querySelectorAll(".activ-qosh")
const elActivUst = document.querySelectorAll(".active-ust")



//! noni function
elSelectQan.addEventListener("change", ()=>{
  elNoni.textContent = elSelectQan.value
})

//! size function
console.log(elRound1);

//! things function
for (let i = 0; i < elActivUst.length; i++) {
  elActivUst[i].addEventListener("click", (evt) =>{
    if (elActivUst[i].checked) {
      elUst[i].textContent = evt.target.value 
    } else{
      elUst[i].textContent = ""
    }
  })
}


//! qoshimcha function
for (let i = 0; i < elActivQosh.length; i++) {
  
  elActivQosh[i].addEventListener("click", (evt) =>{
    if(elActivQosh[i].checked){
      elQoshim[i].textContent = evt.target.value
    }else{
      elQoshim[i].textContent = ""
    }
  })

}
