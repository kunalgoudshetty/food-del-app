import React from 'react'
import './Verify.css'
import { useNavigate,useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext,useEffect } from 'react';
import axios from 'axios'


const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate();

    const verifypayment = async() =>{
      try {
        const response = await axios.post(url+"/api/order/verify", {success, orderId});
        console.log(response);
        if (response.data.success) {
          navigate("/myorders")
        } else {
          navigate("/")
        }

      } catch (error) {
        navigate("/")
        console.log();
      }
      }

    useEffect(()=>{
        verifypayment()
    },[])
    

  return (
    <div className='verify'>
      <div className="spinner">

      </div>
    </div>
  )
}

export default Verify