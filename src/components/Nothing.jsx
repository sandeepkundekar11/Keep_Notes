import React from "react";
export default function Nothing(props)
{
    return(
        <>
        <div className="d-flex justify-content-center align-items-center align-content-center" style={{width:"85vw",height:"60vh",flexDirection:"column"}}>
            <img src={props.logo} alt="" style={{width:"10rem",height:"10rem"}} />
        <weak className="text-light text-center " style={{fontSize:"1rem"}}>{props.info}</weak>
        </div>
        </>
    )
}