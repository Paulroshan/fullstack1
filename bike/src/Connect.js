import axios from "axios";

const roshan="http://localhost:8080";

export const attach = async(obj)=>{
 const hai= await axios.post(`${roshan}/add`, obj)
 return hai;

}

export const list = async()=>{
    const li = await axios.get(`${roshan}/home`)
    return li;
}

export const read=async(pos)=>{
    const re= await axios.get(`${roshan}/read/{pos}`)
    return re;
}