//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


let guests =[]

export function addGuest(e){
    e.preventDefault() //this will not allow the browser to restart after u click on submut button
    // object that have 2 keys and 2 value wich will be store in local storage

    let guest = {
        f_name : document.querySelector("#fname").value,
        l_name : document.querySelector('#lname').value
    }

    // remove any space that are in fname and lname

    if(guest.f_name.trim() && guest.l_name.trim()){
        // check if value in local Storage first
        if (localStorage.getItem('guests')){
              // JSON.parse will convert whatever it was to it initial datat type
            //get item check the localstore while set add value to it and remove 
            guests = JSON.parse(localStorage.getItem('guests'))
        }
        // add guest objact keys and value into guests 
        guests.push(guest)
        //convert it to string then add it to localstorage
        localStorage.setItem('guests', JSON.stringify(guest))
        //class the function that will display guest
        displayGuests(guests)
    } 

 }

 function displayGuests(guests){
    // this will display the value of fname and last name in a empty table
    let table_body = document.querySelector('tbody')
    let html = ''
    // loop over the array guests 
    let color  = '.bg-secondary'
 
    for (let g of guests){
        if (color == '.bg-secondary'){
            html += `
        <tr class="p-3 mb-2 bg-light text-dark">
            <td>${g.f_name}</td>
            <td>${g.l_name}</td>
        </tr>
        `
        color = '.not secondary'

        } else {
            html += `
        <tr>
            <td>${g.f_name}</td>
            <td>${g.l_name}</td>
        </tr>
        `
        color = '.bg-secondary'
        }
        
    }

    table_body.innerHTML = html
 }

 // get the values from localstore to store back to guests
 if (localStorage.getItem('guests')){
   
    guests = JSON.parse(localStorage.getItem('guests'))
}

  displayGuests(guests)

  //  link the form to the function and responding to event

  document.querySelector('.btn-danger').onclick = function(){
    //remove and delete local storage
    localStorage.removeItem('guests')
    displayGuests([])
}
document.querySelector("form").onsubmit = addGuest



