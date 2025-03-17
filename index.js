
const apikey = "68fecf3931c993dd3348cc413db45f77"
let btn = document.querySelector("button")
let div = document.querySelector(".hii")
let degrees = document.querySelector(".retext")
let humidi = document.querySelector(".humidityis")
let sideHeading = document.querySelector(".overcast")
let small = document.querySelector(".smallImg")
let head = document.querySelector(".head")

async function climate(){
    try{
        let location = document.querySelector('input').value
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`)  
        let response = await data.json()
        console.log(response);

     if(response.cod === "404"){
        alert("please enter the correct country name")
        
     }

        function temps(){
            let temparature = response.main.temp
            degrees.innerHTML = `${((temparature-273.15)* (9/5) + 32).toFixed(1)}&degF`
        }
        temps()

        function humidity(){
          let waterVapour = response.main.humidity
          humidi.innerHTML = `HUMIDITY ${waterVapour}%`
          sideHeading.innerHTML = `overcast clouds`
          document.querySelector('input').value = ""
          
        }
        humidity()

        function heads(){
            head.innerHTML = location
        }
        heads()


        
    //    function image(){
    //     const imge = document.createElement("img")
    //     imge.src = "https://imgs.search.brave.com/w7232g2SIYkFPsDBDuALsoFsRoMaMdV_7SOrVVOPdhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMjE2NS8xMjE2/NTE0Mi5wbmc_c2Vt/dD1haXNfaHlicmlk"
    //     imge.style.cssText = "border: none; object-fit:cover; border-radius:20px"
    //     small.appendChild(imge)
    //    }
    //    image()
    }

    catch(err){
       throw console.error(err);
       ; 
    }
    finally{
        
    }
   
}
 climate()
btn.addEventListener("click",function(){
    climate()
    

})

























