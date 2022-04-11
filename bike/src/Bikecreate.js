import React, { useState } from "react";
import { Display } from "./bikehome";
import { create } from "./Bikearray";
import { attach } from "./Connect";


export const Create=()=>{
  
     const [tAdd, setAdd]=useState({
        "bikeModelName":"",
        "bikeVariant":"" ,
        "bikeEngineCc":"",
        "bikeAverageMileage":"",
        "bikePrice":"",
        "bikeQuantity":"",
        "bikeColour":new Array()
     })
     const[createView, setView]=useState(false)

     const tracks=(roshan)=>{
         const{value}=roshan.target
         tAdd.bikeColour.push(value)
     }
     const track=(dhana)=>{
         const{name, value}=dhana.target
         setAdd((add)=>{
             return{
                 ...add,
                 [name]:value
             }
         })
     }
     const add=async()=>{

        // alert("successfully created")
         //create(tAdd)
         //setView(true)
        
           const yet=await attach(tAdd);
            alert(yet.data)
            window.location.assign("/")
            
     }
    return(
<div>
        {(createView)?
            <>
            <Display/>
            </>
            :
            <div className="container-fluid bg-info">
            <h1 className="text-center">Bike Details Form</h1>
        <div className="row">
		<div className="col-md-3">
           
		</div>
		<div class="container-fuild col-md-9 p-3">
			<div class="contact-form col-lg-12 col-md-10 col-sm-12 text-white bg-secondary p-2">
            <div class="form-group">
				  <label class="control-label col-sm-4">Bike Model Name:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeModelName}
                    placeholder="Enter First Name" 
                    name="bikeModelName"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Variant:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeVariant}
                    placeholder="Enter Variant Name" 
                    name="bikeVariant"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Engine:</label>
				  <div class="col-sm-10">          
					<input type="text" class="form-control" onChange={track} value={tAdd.bikeEngineCc} placeholder="Enter Engine Name" 
                    name="bikeEngineCc"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Average Milage:</label>
				  <div class="col-sm-10">          
                  <input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikeAverageMileage}
                    placeholder="Enter Engine Name" 
                    name="bikeAverageMileage"/>
				  </div>
                  </div>
                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Price:</label>
				  <div class="col-sm-10">          
					<input type="text" 
                    class="form-control" 
                    onChange={track}
                    value={tAdd.bikePrice}
                    placeholder="Enter Bike Price" 
                    name="bikePrice"/>
				  </div>
                  </div>

                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Quantity:</label>
				  <div class="col-sm-10">          
                  <select name="bikeQuantity" onChange={track} value={tAdd.bikeQuantity}>
                    <option>--Please Select the Option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
				  </div>
                  </div>

                  <div class="form-group">
				  <label class="control-label col-sm-4">Bike Color:</label>
				  <div class="col-sm-10">          
                  
                  <input type="checkbox"
                  name="dance" 
                  onChange={tracks}
                  value="Red"/>Red
                  <input type="checkbox" className="ms-3"
                  name="Black" 
                  onChange={tracks}
                  value="Black"/>Black
                  <input type="checkbox" className="ms-3"
                  name="Grey" 
                  onChange={tracks}
                  value="Grey"/>Grey

				  </div>
                  </div>
                  <div class="form-group mt-2 ms-10 text-center">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-primary me-5" onClick={add}>Submit</button>

                    <button type="submit" class="btn btn-primary">Reset</button>
				  </div>
                  </div>
				
			</div>
		</div>
        </div>
        </div>
        }
        </div>
    )}