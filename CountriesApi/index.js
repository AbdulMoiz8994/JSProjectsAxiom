// get the dom elements
const mainContainer=document.getElementsByClassName('container');
console.log(mainContainer[0]);
const inputBox=document.getElementsByClassName('inputBox');
// console.log(inputBox[0].value);

// make the api and do rest
function submit(){
    const request =new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${inputBox[0].value}`);
    request.send();
    request &&(
    request.addEventListener('load',function(){
        // console.log(JSON.parse(this.responseText));
       
        const [data]=JSON.parse(this.responseText);
        console.log(data);
        const html_content=`
        <div id="card ">
        <article class="card nested_container">
            <div class="card-body">
            <img src="${data.flags.svg}" alt="" class="card-body-img Image">
            <h1 class="card-body-title">
               ${data.name.common}
            </h1>
            <p class="card-body-text">${data.capital[0]}</p>
           </div>
           <div class="card-footer">
               <div class="card-footer-social">
                   <h3>${data.languages['urd']}</h3>
                  <p>Native Languages</p>
               </div>
               <div class="card-footer-social">
                   <h3>${data.population}</h3>
                   <p>Population</p>
               </div>
               <div class="card-footer-social">
                   <h3>${data.demonyms.eng.f}</h3>
                   <p>Demonyms</p>
               </div> 
           </div>
        </article>
    </div>`
      mainContainer[0].insertAdjacentHTML("afterbegin",html_content)
    })
    )
}

// console.log(request);


