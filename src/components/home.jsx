
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { addJob } from "../store/action"

const Form=()=>{
    const [form,setform]=useState({
        title:"",
        salary:"",
        description:"",
        location:"",
        type:""

    })
    const dispatch = useDispatch()

    const handlechange = (e)=>{
        const {name,value}=e.target

        setform({
            ...form,
            [name]:value
        })
    }

const addjob = ()=>{
fetch('http://localhost:3001/job',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({status:true,job:form}),
}).then((d)=>d.json()).then((res)=>{
    dispatch(addjob(res))
}).catch((err)=>{
    console.log(err)
})
}
   



    return(
        <div>
            <h2>Add job</h2>
            <input onChange={handlechange} type="text" name="title" placeholder = "Add title"/>
            <input onChange={handlechange} type="text" name="salary" placeholder = "Add salary"/>
            <input onChange={handlechange} type="text" name="description" placeholder = "Add description"/>
            <input onChange={handlechange} type="text" name="location" placeholder = "Add location"/>
            <input onChange={handlechange} type="text" name="type" placeholder = "Add type"/>
            <button onClick={addjob}>Add job</button>

        </div>
    )
}


export default Form