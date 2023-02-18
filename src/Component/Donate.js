import React,{useState,useEffect} from "react";

const Donate=()=>{
    const [count, setCount] = useState(0);
  
    useEffect(() => {
  
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
  
        //Clearing the interval
        return () => clearInterval(interval);
    }, [count]);
  
    return <h1 className="">{count}</h1>;
}

// https://payments-test.cashfree.com/forms/dopayint
export default Donate;