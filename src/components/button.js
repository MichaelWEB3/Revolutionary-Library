import React, { useEffect, useState } from "react"

export default function Button(props) {
    const [select, setSelect] = useState(false)
    useEffect(()=>{
            if(select){
               
                localStorage.setItem("itemSelect",props.name)
            
               
            }
    },[select])
    return (
        <div className={`${select ? "filter_button_active" : "filter_button"} flex z-50 justify-center items-center`} onClick={() => setSelect(!select)}>
            <div className={`flex justify-center items-center ${props.src}`} ></div>
        </div>
    )
}