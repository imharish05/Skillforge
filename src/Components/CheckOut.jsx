import React, { useState } from 'react'
import Contact from './Contact'



const CheckOut = () => {

   const[amount,setAmount] = useState("")

   const handleSubmit = (e) =>{
    e.preventDefault()
    if(amount === ""){
        alert("please enter an amount")
    }
    else{

        var options = {
            key : "",
            key_secret: "",
            amount: amount * 100,
            currency : "INR",
            name : "Skillforge",
            description : "Purchasing",
            handler : function(response){
                alert(response.razorpay_payment_id)
            },
            prefill : {
                name : "Skillforge",
                email : "harish05082004@gmail.com",
                Contact : "6382488167",
            },
            notes : {
                address : "RazorPay Corporate office"
            },
            theme : {
                color : "#000"
            }
        };

        var pay = new window.Razorpay(options)
        pay.open();
        alert(amount)
    }
   }

  return (
    <div className='CheckOut'>
        <h2>Rezor Pay</h2>

        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CheckOut