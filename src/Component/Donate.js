import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import loader from "../assets/img/loader.gif";
function Donate () {
  const navigate=useNavigate();
  useEffect(() => {
    setTimeout(() => {
        window.open("https://payments-test.cashfree.com/forms/dopayint",'_blank');
        navigate('/');
    }, 5000)
  }, [])
  return (
  <div className='donate-section'>
    <img src={loader} alt="loader"/>
    <h3 className='text-center text-danger mt-5'>You will be redirected to Payment page in 5 seconds</h3>
    <p>(Please Make sure to enable Popup to redirect)</p>
  </div>)
}

export default Donate;