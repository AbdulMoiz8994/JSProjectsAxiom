// Get all Browser DOM Elements
let  container=document.querySelector('.content_container')
let seats=document.querySelectorAll('.row .seats')
let count=document.querySelector('#count')
let total=document.getElementById('totalAmount')
let bayanPerson=document.getElementById('bayan')

console.log(container);
console.log(seats);
console.log(count);
console.log(total);
console.log(bayanPerson);

// take the value of ticket price's value convert string into number
let ticketPrice= +bayanPerson.value
console.log(ticketPrice);

// make the function which could update our selected  div's count number
function updateSelectedCount(){
     if(bayanPerson.value !== ''){
              const selectedSeats=document.querySelectorAll('.row .seats.selected')    
              console.log(selectedSeats);
            // get the index of selected seats from all seats
            const selectIndex=[...selectedSeats].map(seat => [...seats].indexOf(seat))
            console.log(selectIndex);
            //    get the count of all selected Seats
            const selectedItems=selectIndex.length  
            console.log(selectedItems);
                //   update the UI to show the number of seats
              count.innerText=selectedItems
            //   update the UI to show the total Price of tickets
            total.innerText=selectedItems * ticketPrice
            
            // saving in localStorage in key and value pair
            localStorage.setItem('selectedSeats',JSON.stringify(selectIndex))

     }

}

// make the event Listener for container to check the click on seats
container.addEventListener('click', (e)=>{
      
      if(bayanPerson.value !== ''){
        //   again check if target of click is a seat that is not Occupied
        if(e.target.classList.contains('seats') && !e.target.classList.contains('Occupied')){
            // this thing add or remove class selected from seat
                  e.target.classList.toggle('selected')     
                //   refreshing the count
              updateSelectedCount()
        }

      }

})
//  save the  bayan person index number  and bayan price data in localStorage 





// seocnd event Listener for bayan's perosn select
bayanPerson.addEventListener('change',(e) =>{
    //    setting the bayan person price and convert number
    ticketPrice=+e.target.value
  updateSelectedCount()

})


  updateSelectedCount()
