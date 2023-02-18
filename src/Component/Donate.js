import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Donate () {
  useEffect(() => {
    setTimeout(() => {
        window.location.href = "https://payments-test.cashfree.com/forms/dopayint";
    }, 5000)
  }, [])
  return <div>Content</div>
}

// https://payments-test.cashfree.com/forms/dopayint
export default Donate;