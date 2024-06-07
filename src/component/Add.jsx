import React from 'react'
import NavBar from './NavBar'

export const Add = () => {
  return (
    <div>
<NavBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">BOOK TITLE</label>
<input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">CATEGORY</label>
            <select name="" id="" className="form-control">
                <option value="SCIENCE">SCIENCE</option>
                <option value="FICTION">FICTION</option>
                <option value="POETRY">POETRY</option>
                <option value="AUTOBIOGRAPHY">AUTOBIOGRAPHY</option>
            </select>


            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">PUBLISHED TEAR</label>
            <input type="date" name="" id="" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">AUTHOR NAME</label>
            <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label">DESCRIPTION</label>
            <textarea name="" id="" className="form-control"></textarea>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">DISTRIBUTER NAME</label>
            <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">PUBLISHER</label>
            <input type="text" className="form-control" />
            
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">PRICE</label>
            <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <label htmlFor="" className="form-label">EDITION</label>
            <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<center><button className="btn btn-warning">submit</button></center>

            </div>
        </div>
        


        </div>
    </div>
</div>

    </div>
  )
}
