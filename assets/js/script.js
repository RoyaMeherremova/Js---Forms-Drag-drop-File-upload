"use strict";


// let formElem =document.querySelector("form")


// formElem.addEventListener("submit",function(e){     //formu submit eliyende valideytion-yani bir error mesaji cixarsin
//     e.preventDefault();               //eventin default eventesini silmek ucun oz eventimiz islesin deye

//      if(document.getElementById("exampleInputEmail1").value != ""){
//         document.querySelector("span").classList.add("d-none")
//         writeWord(document.getElementById("exampleInputEmail1").value)
//      }
//      else{
//         document.querySelector("span").classList.remove("d-none")
//      }

// })

// function writeWord(word){
//     document.querySelector("h1").innerText =word;
// }


// document.querySelector("a").addEventListener("click",function(e){      //a nin clikinde nese olsun
//        e.preventDefault();      //a-nin default eventisini silmek ucun
//        console.log("clicked a");
// })





//DRAG-DROPS -movzu

// dragElem.ondrag = () =>{    //bu function-elementin dragi saxlayanda isleyir.yani elementi goturub saxlayanda
//     console.log("draging")

// }


// dragElem.ondragend = () =>{    //bu function-elementin dragi buraxanda isleyir.yani elementi buraxanda
//     console.log("drag end")

// }


let dragElems = document.querySelectorAll(".item")
let dropElem = document.getElementById("drop-elem")



//drag-drop 


// dragElems.forEach(element => {
//     element.ondragstart = (e) =>{    //bu function-element drag olmaya baslayanda isleyir.drag -yani elementi goturende

//         e.dataTransfer.setData("id",element.getAttribute("id"))  //elementin eventisinin icindeki object(dataTransfer) gotururuk ve hemin objectin icinde setData-hazir methodla id adi altinda element elave edirik.setData(qoyduqumuz ad tapmaq ucun,ve element ozu)
//     }

// });

// dropElem.ondragover = (e)=>{    //bu function drag element  drop elementin uzerinde olanda isleyir 
//  e.preventDefault();   //ve drop elementin-default eventesini silir          
// }

// dropElem.ondrop = (e) =>{            //dropun uzerine dragi buraxanda isleyen method
// let id =e.dataTransfer.getData("id")    //eventin icindeki objectin icindeki bayaq elave etdiyimiz "id" adinda elementi goturur ve beraber edir=id vareybilina
//    let elem=document.getElementById(id);   //sonra hemin essayn elediyi id-ni tapir   
//    dropElem.append(elem);                   //ve append edir drop elementine.
// } 

// dropElem.ondrop = (e) => dropElem.append(document.getElementById(e.dataTransfer.getData("id")));  //yuxardakinin qisa yazilisi




//drag-drop-alternative yolu


// dropElem.ondragover = (e)=>{    
//     e.preventDefault();        
//    }


// dragElems.forEach(element => {
//    element.addEventListener("dragstart",function(){
//     dropElem.ondrop = () =>{
//        dropElem.append(element) 
//     }
//    }) 
// });




//FILE-UPLOAD -movzu

let uploadArea = document.querySelector(".upload-area")
let uploadIcon = document.querySelector("i");
let table = document.querySelector(".table");



uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();    //ondan sonra gelen d-none olan inputun clickinde olan functionu isletmek ucun -yani inputun klikini tetikleyir
})





// uploadIcon.nextElementSibling.addEventListener("change", function (e) {   //change-inputun eventesidi -inputuna mudaxile edende isleyir-meselen burda sekil secib yukleyen kimi isleyecek


//     console.log(e)  //eventinin icinde olanlari gorsedir
//     for (const file of e.target.files) {   //e.target.files ,e.target=this  ,files=input eventesinin icinde olan object
//         let reader = new FileReader();  //hazir classdi-bize fayillari oxumaq ucun lazim olur

//         reader.onloadend = (event) => {   //fayli oxuyub qutarandan sonra isleyen method,burada fayli oxuyub qutaranda sonra forma-innerHtml edecek


//             let fileBase64 = event.currentTarget.result;   //Reader clasinin onload-methodun eventisinde olan object-currentTarget  ,result-currentTargetin propertisidi ve onunda deyeri gelen sekilin base64du


//             table.classList.remove("d-none")
//             table.innerHTML += `<tr>
//               <th scope="row">${file.name}</th>
//               <td>${file.size / 1024} Kb</td>
//               <td>
//               <div class="img">
//               <img src="${fileBase64}"alt="">
//               </div>
//               </td>
//               </tr>`


//         }
//         reader.readAsDataURL(file);  //bu clasin methodudu bunu yazmasaq Reader file oxumayacaq bu method komeyi ile oxuyur.
//     }



// })

//base64 -vasitesi ile sekili yuklemek olur sekili cevirmek ucun sayt-base64-image.de
//veya dropboxa yuklursen sekileri ve oradanda gotururrsen yer tutmur








//HOMEWORK -UPLOAD IMAGE WITH DRAG-DROP

uploadArea.addEventListener(`dragover`, event => {
    event.preventDefault();
})



uploadArea.addEventListener(`drop`, event => {



    event.preventDefault();
    const file = event.dataTransfer.files;

    for (const item of event.dataTransfer.files) {

        const reader = new FileReader();

        reader.readAsDataURL(item);

        reader.onloadend = (event) => {

            let fileBase = event.currentTarget.result;

            table.classList.remove("d-none")
            table.innerHTML += `<tr>
                  <th scope="row">${item.name}</th>
                  <td>${item.size / 1024} Kb</td>
                  <td>
                  <div class="img">
                  <img src="${fileBase}"alt="">
                  </div>
                  </td>
                  </tr>`

        }


    }


})




















