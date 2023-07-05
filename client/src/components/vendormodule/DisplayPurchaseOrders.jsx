import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const DisplayPurchaseOrders = () => {

  const [purchaseorderdata,setPurchaseOrderData]=useState([])
  
  const navigate =useNavigate();
  

  useEffect(() => {
    PurchaseOrderList();
    },[]
  )

  const PurchaseOrderList=()=>{
    const userData={

      "customername":'',
      "address":'',
      "pid":'',
      "itemname":'',
      "squantity":'',
      
      "shipcost":'',
      "amount":'',
      "pamout":'',
      "podate":'',
     
      

    }

    axios.post('http://localhost:3002/getpurchaseorderdata',userData)
      .then((response)=>{
        console.log(response.data)
        setPurchaseOrderData(response.data)
      })
      .catch(
        (error)=>{
          console.log("The error loading data"+error)
        }
      )
  }



// const editCustomer=(id)=>{
//   navigate("/updatecustomer/"+id)
// }


  return (
    <div>
        <div className="container inv_sodisp">
            <div className="row so_disp">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">SlNo</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Customer Id</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Quantitty</th>
                                <th scope="col">Shipcost</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Total Amount</th>
                                <th scope="col">Date</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* {Object.values(customerdata).map((value,index)=>( */}
                            {purchaseorderdata.map((value,index)=>(
                                <tr key={value._id}>
                                   <th scope="row">{index+1}</th>
                                   <td>{value.customername}</td>
                                     <td>{value.address}</td>
                                    <td>{value.pid}</td>
                                    <td>{value.itemname}</td>
                                    <td>{value.squantity}</td>
                                    <td>{value.shipcost}</td> 
                                    <td>{value.amount}</td> 
                                    <td>{value.pamount}</td> 
                                    <td>{value.podate}</td> 
                                     
                                    
                                    
                                    {/* <td><button type="button" class="btn btn-primary" onClick={()=>deleteCustomer(value._id)}>DELETE</button></td> */}
                                </tr> 
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DisplayPurchaseOrders