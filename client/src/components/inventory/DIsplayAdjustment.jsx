import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const DisplayAdjustment = () => {

  const [adjustment,setAdjustment]=useState([])
  
  const navigate =useNavigate();
  

  useEffect(() => {
    adjustmentList();
    },[]
  )

  const adjustmentList=()=>{
    const userData={

        "modeofadjustment":'',
        "referencenumber":'',
        "date":'',
        'reason':'',
        "description":'',
        "itemdetails":'',
       
        "uploadfile":''


    }

    axios.post('http://localhost:3002/getadjustmentdata',userData)
      .then((response)=>{
        console.log(response.data)
        setAdjustment(response.data)
      })
      .catch(
        (error)=>{
          console.log("The error loading data"+error)
        }
      )
  }


  return (
    <div>
        <div className="container inv_itemdisp">
            <div className="row item_disp">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">SlNo</th>
                                <th scope="col">Mode of Adjustment</th>
                                <th scope="col">Reference Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Description</th>
                                <th scope="col">Item Details</th>
                                <th scope="col">Upload File</th>
                                
      
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(adjustment).map((value,index)=>(
                                <tr key={value._id}>
                                   <th scope="row">{index+1}</th>
                                   <td>{value.modeofadjustment}</td>
                                   <td>{value.referencenumber}</td>
                                   <td>{value.date}</td>
                                   <td>{value.reason}</td>
                                   <td>{value.description}</td>
                                   <td>{value.itemdetails}</td>
                                   
                                   <td><img width='100px' src={`http://localhost:3002/${value.uploadfile}`}></img></td>
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

export default DisplayAdjustment