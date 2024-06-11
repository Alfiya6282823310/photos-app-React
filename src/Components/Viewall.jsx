import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8084/View").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value,index)=>{
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card mb-3">
                                            <img height="250 px" src={value.image} class="card-img-top" alt="..."/>
                                                <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                    <h3 class="card-title">{value.imageid}</h3>
                                                    <p class="card-text">{value.albumid}</p>
                                                
                                                </div>
                                        </div>
                                       
                                    </div>
                                    }
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall