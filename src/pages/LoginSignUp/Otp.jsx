import { Box, Container, Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Otp.scss'


export const Otp = () => {
    const [inputs, setInput] = useState({
        emailOTP1 : '',
        emailOTP2 : '',
        emailOTP3 : '',
        emailOTP4 : '',
    })
    const {email} = useParams()
   
    const {emailOTP1, emailOTP2 , emailOTP3, emailOTP4} = inputs
 const [success , setSuccess] = useState(null)
 const [message ,setMessage] = useState('')
    const OtpSubmit = (e) =>{
        e.preventDefault()
      const d = `${emailOTP1}${emailOTP2}${emailOTP3}${emailOTP4}`
        const myForm = new FormData()
        myForm.set('emailOTP',d )
        myForm.set('email' ,email )
        const config = ({
            headers : {
                "Content-Type" :"application/json"
            }
        })
      axios.post('/api/v1/regester/verify', myForm, config)
      .then((response) =>{
        setSuccess(response.data.success)
      })
      .catch((err) => {
        //console.log(err.response.data.success)
        setSuccess(err.response.data.success)
        setMessage(err.response.data.message)
      })
    }

   useEffect(() =>{
    const inputs = document.querySelectorAll('input')
   const button = document.querySelector(".buttonOtp");
   console.log(button)
     inputs.forEach((input, index1) => {
            input.addEventListener("keyup", (e) => {
           
                const currentInput = input,
                nextInput = input.nextElementSibling ,
                prevInput = input.previousElementSibling
        
                if(currentInput.value.length > 1) {
                    currentInput.value = "";
                    return  
                }
                if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                  }
                  if (e.key === "Backspace") {
                    // iterate over all inputs again
                    inputs.forEach((input, index2) => {   
                      if (index1 <= index2 && prevInput) {
                        input.setAttribute("disabled", true);
                        input.value = "";
                        prevInput.focus();
                      }
                    });
                  }
        
                  if(inputs[4].value !== "" ){
                    button.classList.add('active')
                        return                    
                  }
                  button.classList.remove('active')
                  
        
             })   
           })  
    },[])
  //  console.dir(inputs)
  useEffect(()=>{
    if( success !== null && !success) {
        const input = document.querySelectorAll('input')
        input.forEach(element => {
            element.classList.add('inputBorder')
        });  
    //    input.classList.add('inputBorder')
    }
    if(success!== null && success){
        return window.location.replace('/')
    }

},[success, message])

  return (
 <Box className='bodyOtp'>
    <Container maxW={'container.xl'}>
        <Flex w={'full'} justifyContent={'center'} alignItems={'center'}>
        <div className="containerOtp">
                <header>
                    <i className="bx bxs-check-shield"></i>
                </header>
                <h4>Enter OTP Code</h4>
                <form onSubmit={OtpSubmit} encType='application/json' >
                    <div className="input-field">
                    <input  onChange={(e) =>setInput({...inputs, emailOTP1 : e.target.value})}  type="number" />
                    <input   onChange={(e) =>setInput({...inputs, emailOTP2 : e.target.value})}  type="number" disabled />
                    <input   onChange={(e) =>setInput({...inputs, emailOTP3 : e.target.value})}  type="number" disabled />
                    <input    onChange={(e) =>setInput({...inputs, emailOTP4 : e.target.value})}  type="number" disabled />
                    </div>
                
                          
                    <button className='buttonOtp'>Verify OTP</button>
                </form>
                </div>
        </Flex>
    </Container> 
 </Box>
  )
}
