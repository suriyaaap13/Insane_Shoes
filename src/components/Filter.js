import React from 'react'

export default function Filter() {
  return (
    <>
        {/* Section 1 */}
        <div className='col-md-2 shadow p-3 mb-3 bg-white rounded'>
          {/* Filter and Filter Icon */}
          <div className='d-flex justify-content-between align-items-enter'>
            <div className='fs-3'>
              Filter
            </div>
            {/* Filter Logo */}
            <div>
              <i className="fa-solid fa-filter fa-2x"></i>
            </div>
          </div>
          {/* Cost */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Cost
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Rs. 1500-4000
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Rs. 4001-7000
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Rs. 7001+
                  </label>
              </div>
            </div>
          </div>
          {/* Color */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Color
              </div>
              {/* colors */}
              <div className='d-flex justify-content-around py-3'>
                {/* Individual color */}
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "red"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "cyan"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "blue"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "yellow"}}></div>
                <div className='' style={{width: "1.5rem", height: "1.5rem", backgroundColor: "green"}}></div>
              </div>
            </div>
          </div>
          {/* Design */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Design Templates
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    2
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    3
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    3+
                  </label>
              </div>
            </div>
          </div>
          {/* Type */}
          <div>
            <div className='py-2'>
              {/* Heading */}
              <div className='fs-4'>
                Type
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Loafers
                  </label>
              </div>
              <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Sneakers
                  </label>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
