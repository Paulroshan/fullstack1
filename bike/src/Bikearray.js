let newarr=[
   {
      "bikeModelName":"Apache",
      "bikeVariant":"RTR",
      "bikeEngineCc":"160",
      "bikeAverageMileage":"40",
      "bikePrice":"96,000",
      "bikeQuantity":"2",
      "bikeColour":"yellow,grey,black",

   },

   {
         "bikeModelName":"Apache",
         "bikeVariant":"RTR",
         "bikeEngineCc":"180",
         "bikeAverageMileage":"40",
         "bikePrice":"1,00,000",
         "bikeQuantity":"2",
         "bikeColour":"yellow,grey,black,white",
   
   },
   
   {
      "bikeModelName":"Apache",
      "bikeVariant":"RTR",
      "bikeEngineCc":"200",
      "bikeAverageMileage":"40",
      "bikePrice":"1,00,000",
      "bikeQuantity":"2",
      "bikeColour":"grey,black,metalic",

   }



]  

export const lists=()=>{
   return newarr;
}

export const View=(index)=>{
   return newarr[index]
}

export const create=(obj)=>{
   newarr.push(obj)
}

export const del=(index)=>{

   newarr=newarr.filter((ele, ind1)=>{
      return ind1!==index
      })
      return newarr

   }

   export const fetchExact=(name)=>{
      const tmp=newarr.filter((element)=>{
          return element.bikeModelName===name
      })
      return tmp[0]
  }

  export const alter=(place,data)=>{
   newarr[place]=data
}