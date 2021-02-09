// Ticket Input Value  Increase & Decreasing Function start here

function travelTicket(ticket,increase){
    const ticketInput =document.getElementById(ticket + 'Input');
    const ticketNewInput = parseInt(ticketInput.value);
    
    let ticketNewInputValue = ticketNewInput;
    if(increase == true){
        ticketNewInputValue = ticketNewInput + 1;
    }
    if(increase == false && ticketNewInput > 0){
        ticketNewInputValue = ticketNewInput - 1;
    }
    
    ticketInput.value = ticketNewInputValue; 
    totalTicketAmount();
    
}
// Ticket Input Value  Increase & Decreasing Function Ending


// Ticket Class Name Capturing Function start here

function TicketName(ticket){
    const ticketName = parseInt(document.getElementById(ticket + 'Input').value);
    return ticketName;
}
// Ticket Class Name Capturing Function Ending
 

// Total Booking Amount result Function start here

function totalTicketAmount(){
    const subTotalAmount = TicketName('firstClass') * 150 + TicketName('economy') * 100;
    document.getElementById('subtotal').innerText ='$' + subTotalAmount;
    const totalTaxAmount = Math.round(subTotalAmount * 0.1);
    document.getElementById('tax-amount').innerText ='$' + totalTaxAmount;
    const totalBookingCost = subTotalAmount + totalTaxAmount;
    document.getElementById('total-cost').innerText ='$' + totalBookingCost;
}
// Total Booking Amount result Function Ending
  

// hide section code start here

document.getElementById('book-now').addEventListener('click', function(){
   
   let x = document.getElementById('firstClassInput').value; 
   let y = document.getElementById('economyInput').value; 
   if(x == 0 && y == 0){
    alert('Ticket Number Quantity is Required')
   }
   else{
    document.getElementById('first-section').style.display ='none';
    document.getElementById('div-contain').style.display ='block';  
   }
    
})

document.getElementById('go-backbtn').addEventListener('click', function(){
   document.getElementById('first-section').style.display ='block';
   document.getElementById('div-contain').style.display ='none';  
})
// hide section code ending


//Reset Booking button code start here

document.getElementById('reset-booking').addEventListener('click', function(){
    document.getElementById('firstClassInput').value =0; 
    document.getElementById('economyInput').value =0;
    document.getElementById('subtotal').innerText ='$' + 0;
    document.getElementById('tax-amount').innerText ='$' + 0;
    document.getElementById('total-cost').innerText ='$' + 0;
})

//Reset Booking button code Ending

//    Thank You  
















