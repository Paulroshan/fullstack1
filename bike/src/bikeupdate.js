import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { alter } from "./Bikearray";
import { Display } from "./bikehome";



export const Update=(kd)=>{
    const[pos, sPos]=useState(kd.who)
    const [uView, sView]=useState(false)

    const[person, setPerson]=useState({
        'bikeModelName':kd.mention.bikeModelName,
        "bikeVariant":kd.mention.bikeVariant,
        "bikeEngine":kd.mention.bikeEngineCc,
        "bikeAverageMilage":kd.mention.bikeAverageMileage,
        "bikePrice":kd.mention.bikePrice,
        "bikeQuantity":kd.mention.bikeQuantity,
        "bikeColor":kd.mention.bikeColor
    })

    const track=(paul)=>{
        const{name,value}=paul.target
        setPerson(
            (prev)=>{
                return{
                    ...prev,
                    [name]:value
                }
            }
        )
    }

    const success=()=>{
        alter(pos, sPos)
        alert("Updated")
        sView(true)
    }


return(
    <>
    
        {(uView)?
        <>
        <Display/>
        </>
    :
    <div className="row justify-content-cente text-white">
            <h1 className="text-center text-danger display-5">Bike Updated Form</h1>
            <div className="col-lg-7 col-md-10 col-sm-12 shadow-lg p-3">
            <div className="col justify-content-between">
                            <div className="col-md-6 col-sm-12">
                            <label>Bike Model Name</label>
                            <input type="text" 
                                name="bikeModelName" 
                               onChange={track}
                               value={person.bikeModelName}
                                placeholder="Name of the resource person"
                                className="form-control"
                            />
                        </div>
                        </div>
                        <div className="col justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Variant</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeVariant}
                                    name="bikeVariant"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Engine</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeEngineCc}
                                    name="bikeEngineCc"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Average Milage</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikeAverageMileage}
                                    name="bikeAverageMileage"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                            <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>Bike Price</label>
                                <input
                                   onChange={track}
                                    type="text"
                                   value={person.bikePrice}
                                    name="bikePrice"
                                    placeholder="Commercial perday of the resource person"
                                    className="form-control"
                                />
                            </div>
                            </div>
                           <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12 mt-2">
                                <label >Bike Quantity</label>
                                <select name="bikeQuantity" onChange={track} value={person.bikeQuantity}>
                    <option>--Please Select the Option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                            </div>
                            </div>
                            <div className="form-group">
                            <label>Bike Color</label>
                            <textarea className="form-control" 
                            name="bikeColor" onChange={track} value={person.bikeColor}>

                            </textarea>
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button onClick={success} className="col-2 btn btn-outline-success text-white">Change</button>
                            <button className="col-2 btn btn-outline-danger text-white">Cancel</button>
                        </div>
</div>
</div>
}
</>
        


    )
}