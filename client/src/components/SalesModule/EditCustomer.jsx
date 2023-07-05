import React,{useEffect,useState} from 'react'
import {useNavigate,useParams,Link} from 'react-router-dom'
import NavSales from './NavSales'
import axios from 'axios';
import DisplayCustomer from './DisplayCustomer';
const EditCustomer = () => {
   const [custdata,setCustData]=useState("");
   const navigate=useNavigate();
   const {custid}=useParams();
   const [customerid,customeridChange]=useState("");
   const [fullname,fullnameChange]=useState("");
   const [type,typeChange]=useState("");
   const [creationdate,creationdateChange]=useState("");
   const [address,addressChange]=useState("");
   const [city,cityChange]=useState("");
   const [postalcode,postalcodeChange]=useState("");
   const [country,countryChange]=useState("");  
   const [phonenumber,phonenumberChange]=useState(""); 
   const [email,emailChange]=useState("");
   
   useEffect(() => {
      loadCustomer();
    }, [])

   const loadCustomer=()=>{
      console.log(custid);
      axios.post(`http://localhost:3002/getcustomer/`+custid)
      .then(
         (res)=>{
            
            customeridChange(res.data.customerid)
            fullnameChange(res.data.fullname)
            typeChange(res.data.type)
            creationdateChange(res.data.creationdate)
            addressChange(res.data.address)
            cityChange(res.data.city)
            postalcodeChange(res.data.postalcode)
            countryChange(res.data.country)
            phonenumberChange(res.data.phonenumber)
            emailChange(res.data.email)
            
         }
      ).catch((error)=>{
         console.log(error)
      })
   }

   // const loadCustomer=async(e)=>{
   //    e.preventDefault();
   //    const res1=axios.post(`http://localhost:3002/customer/${custid}`)
        
   //          console.log(res1)
   //          if (res1.statusText==="OK") {
   //            alert("customer details successfully Added");
   //          }
   //      }

   const updateCustomer=(e)=>{
      e.preventDefault();
      const _id = custid
      const custdata = { _id,customerid, fullname,type, creationdate, address, city, postalcode, country, phonenumber, email };
      console.log(custdata)
      axios.put(`http://localhost:3002/updatecustomerdata`, custdata)
          .then((response) => {
              console.log(response.data)
              alert("updated Successfuly");
                  navigate('/displaycustomer')
              
          })
          .catch((error) => {
              console.log(error)
          })
     
      // const backCustomer1=()=>{
      //    navigate("/displaycustomer")
      // }
   }
  return (
    <div>
      <NavSales/>  
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-120'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>UPDATE CUSTOMER DETAILS</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='customerid'>CustomerId</label>
                  <input type="text" placeholder='Enter customerid' name="customerid" className='form-control rounded-0' onChange={(e)=>customeridChange(e.target.value)} value={customerid}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type="text" placeholder='Enter fullname' name="fullname" className='form-control rounded-0' onChange={(e)=>fullnameChange(e.target.value)} value={fullname}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='type'>Type</label>
                  <input type="text" placeholder='Enter Type' name="type" className='form-control rounded-0' onChange={(e)=>typeChange(e.target.value)} value={type}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='creationdate'>Creation Date</label>
                  <input type="date" placeholder='Enter CreationDate' name="creationdate" className='form-control rounded-0' onChange={(e)=>creationdateChange(e.target.value)} value={creationdate}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='address'>Address</label>
                  <textarea  placeholder='Enter address' name="address" className='form-control rounded-0' onChange={(e)=>addressChange(e.target.value)} value={address}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='city'>City</label>
                  <input type="text" placeholder='Enter City' name="city" className='form-control rounded-0' onChange={(e)=>cityChange(e.target.value)} value={city}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='postalcode'>Postal Code</label>
                  <input type="text" placeholder='Enter Postalcode' name="postalcode" className='form-control rounded-0' onChange={(e)=>postalcodeChange(e.target.value)} value={postalcode}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='country'>Country</label>
                  <input type="text" placeholder='Enter country' name="country" className='form-control rounded-0' onChange={(e)=>countryChange(e.target.value)} value={country}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='phonenumber'>Phonenumber</label>
                  <input type="text" placeholder='Enter Phone Number' name="phonenumber" className='form-control rounded-0' onChange={(e)=>phonenumberChange(e.target.value)} value={phonenumber}/>
               </div>
               
               <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <input type="text" placeholder='Enter email' name="email" className='form-control rounded-0' onChange={(e)=>emailChange(e.target.value)} value={email}/>
               </div>
               
               
               <button type="button" className='btn btn-success' onClick={updateCustomer}>UPDATE</button>
               {/* <button type="button" className='btn btn-success' name="back" onClick="">BACK</button> */}
               {/* <td><button type="button" class="btn btn-primary" component={Link} to={`/displaycustomer`}>EDIT</button></td> */}
             </form>
         </div>
     </div>
    </div>
  )
}

export default EditCustomer