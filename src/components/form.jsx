import React, { useState, useEffect } from "react";
import Nav from "./navbar";
import Nothing from "./Nothing";
import "../App.css";
import deletbtn from "../images/delete_img.PNG"
import logo from "../images/bulb_img.PNG"
export default function Form() {



    const title11 = () =>                     //fetching titel from localstorage
    {
        let titel12 = localStorage.getItem("title")
        if (titel12) {
            return JSON.parse(titel12)
        }
        else {
            return []
        }
    }


    const text11 = () =>                        //fetching text from localstorage
    {
        let text12 = localStorage.getItem("text")
        if (text12) {
            return JSON.parse(text12)
        }
        else {
            return []
        }
    }

    const [titel, settitle] = useState();
    const [titel_arr, settitle_arr] = useState(title11());
    const [text, settext] = useState();
    const [text_arr, settext_arr] = useState(text11());

    useEffect(() => {
        localStorage.setItem("title", JSON.stringify(titel_arr))   //use effect is used  to store the text and titel in the localstorage
        localStorage.setItem("text", JSON.stringify(text_arr))
    }, [titel_arr, text_arr])

    function change1(e) {
        settitle(e.target.value)

    }

    function change2(e) {
        settext(e.target.value)

    }

    function addnote() {
        if(text==null ||  titel==null)
        {
            alert("Please enter something")
        }
        else {
            settitle_arr([...titel_arr, titel])

            settext_arr([...text_arr, text])
        }
        settitle("")
        settext("")
    }

    return (
        <>
            <Nav title="Keep Note" note="Notes" />
            <div style={{ backgroundColor: "#212024", height: "100vh", width: "100vw" }}>
                <div className="container-fluid pt-4">
                    <div className="form mt-5 mb-3">
                        <div>
                            <input className="container-fluid p-2" value={titel} onChange={change1} placeholder="Title" style={{ backgroundColor: "#212024", color: "white", outline: "none", border: "none", fontWeight: "bolder" }} type="text" name="" id="" />
                        </div>
                        <div>
                            <input className="container-fluid p-2" value={text} onChange={change2} placeholder="Take a note..." style={{ backgroundColor: "#212024", color: "white", outline: "none", border: "none", fontWeight: "bolder" }} type="text" name="" id="" />
                        </div>
                        <button type="button" className="float-right mr-2" onClick={addnote} style={{ backgroundColor: "#212024", outline: "none", border: "none", color: "white", fontSize: "3rem", color: "red", fontWeight: "bolder", marginTop: "-1rem" }}> +</button>
                    </div>
                </div>
                <div className="m-auto area row justify-content-center" style={{ width: "85%", backgroundColor: "#212024" }}>
                    {
                        titel_arr.length == 0 ? <Nothing logo={logo} info="Notes you add appear here" /> :
                            titel_arr.map((item, index) => {
                                return (
                                    <div className="d-inline m-1 " style={{ width: "12rem" }} >
                                        <div id="card1" className="card">
                                            <div className="card-body p-0">
                                                <h6 className="text-center text-primary p-0">NOTE-{index + 1}</h6>
                                                <h4 className="card-title text-center m-0 text-capitalize">{item}</h4>
                                                <p className="card-text text-center m-0">{text_arr[index]}</p>
                                                <button className=" btn p-0 float-right m-1 btn1" onClick={() => {
                                                    settitle_arr(
                                                        titel_arr.filter((i, j) => {

                                                            return index !== j;

                                                        })
                                                    )
                                                    settext_arr(
                                                        text_arr.filter((a, b) => {
                                                            return index !== b;
                                                        })
                                                    )

                                                }} style={{ border: "none", height: "1.4rem", backgroundColor: "#212024" }}> <img src={deletbtn} alt="" style={{ borderRadius: "9px", width: "1.7rem" }} /></button>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )

};


