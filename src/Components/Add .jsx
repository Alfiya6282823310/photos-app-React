import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export const Add = () => {
    const [data, changeData] =useState(

        {
            "id": "",
            "albumid": "",
            "imageid": "",
            "image": ""
        }

    )
    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
            axios.post("http://localhost:8084/", data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("success")
                    }
                    else {
                        alert("error")
                    }
                }
            ).catch().finally()
        }

    
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <label htmlFor="" className="form-label">Userid</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <label htmlFor="" className="form-label">Albumid</label>
                                <input type="text" className="form-control" name='albumid' value={data.albumid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <label htmlFor="" className="form-label">image id</label>
                                <input type="text" className="form-control" name='imageid' value={data.imageid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl 6">
                                <label htmlFor="" className="form-label">image</label>
                                <input type="file" className="form-control" name='image' value={data.image} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl 12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add 