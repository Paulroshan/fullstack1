import React, { useEffect, useState } from "react";
import { View } from "./Bikearray";

export const Read=(paul)=>{

    const [cView, sView]=useState(
        {
       "bikeId":0,
      "bikeModelName":"",
      "bikeVariant":"" ,
      "bikeEngineCc":"",
      "bikeAverageMileage":"",
      "bikePrice":"",
      "bikeQuantity":"",
      "bikeColour":"",
        }
    )
    useEffect(()=>{
        sView(View(paul.who))
    })
    return (
       <>
         <div className=" container-fluid bg-dark">
           <h1 className="text-center mt-2 text-info ">Bike Details</h1>
               <div className="col-lg-5 col-md-10 col-sm-12">
               <div className="row justify-content-center text-white">

        
        <p>{cView.bikeModelName}</p>
        <p>{cView.bikeVariant}</p>
        <p>{cView.bikeEngineCc}</p>
        <p>{cView.bikeAverageMileage}</p>
        <p>{cView.bikePrice}</p>
        <p>{cView.bikeQuantity}</p>
        <p>{cView.bikeColour}</p>
 
        </div>
           </div>
           </div>
    
        </>



    )

}
