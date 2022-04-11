import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { del, fetchExact, lists } from "./Bikearray";
import { Read } from "./BikeRead";
import { Create } from "./Bikecreate";
import { Update } from "./bikeupdate";
import { list } from "./Connect";

export const Display=()=>
{
    const[getvalue,setGetValue]=useState([])
    const[cView, sView]=useState(false)
    const[pos, sPos]=useState(0)
    const[updateView,setUpdateView]=useState(false)
    const[obj,setObj]=useState({})
    const [createView, setView]=useState(false)

    const hello=async()=>{
      const t = await list()
      setGetValue(t.data)
    }
    useEffect(()=>{
      hello()

    },[])

    

  
  return(
    <div className="container-fuild bg-dark">
      {(createView)?
      <>
      <Create/>
      </>
      :
      (cView)?
      <>
      <Read who={pos}/>
      </>
      :
      (updateView)?
      <>
      <Update who={pos} mention={obj}/>

      </>
      :
      <>
     <button className="text-white btn btn-outline-success mb-3 mt-3"
                        onClick={
                            ()=>{
                                setView(true)
                            }
                        }>
                        <i class="bi bi-hearts"> New Bike Add</i>
                    </button>
       
      <div className="row justify-content-center">
      <h1 className="container text-center text-white ">TVS Bikes </h1>
        <table className="col-lg-12 col-md-8 col-sm-10 table-hover table p-3 ms-4 text-white">
          <thead>
          <tr>
          <th>bikeModelName</th>
          <th>bikeVariant</th>
          <th>bikeEngineCc</th>
          <th>bikeAverageMileage</th>
          <th>bikeprice</th>
          <th>bikeQuantity</th> 
          <th>bikeColour</th>
          <th>Actions</th>     
          </tr>
          </thead>

          <tbody>
            {getvalue.map((ele, index)=>(

              <tr>

                <td>{ele.bikeModelName}</td>
                <td>{ele.bikeVariant}</td>
                <td>{ele.bikeEngineCc}</td>
                <td>{ele.bikeAverageMileage}</td>
                <td>{ele.bikePrice}</td>
                <td>{ele.bikeQuantity}</td>
                <td>{ele.bikeColour}</td>
                <td><button onClick={()=>{
                  sView(true)
                  sPos(ele.bikeId)
                }}><i class=" btn btn-danger bi-book "></i></button>

                <button onClick={()=>{
                  setUpdateView(true)
                  sPos(index)
                  const y=fetchExact(ele.bikeModelName)
                  setObj(y)
                  
                }}
                ><i class="btn btn-danger bi bi-hourglass-split"></i></button>
                <button onClick={()=>{
                  setGetValue(del(index))
                }}><i class="btn btn-danger bi bi-heartbreak"></i></button></td>

                </tr>








            ))}
        
            

          </tbody>

        </table>

      </div>
      </>}

</div>
)}

