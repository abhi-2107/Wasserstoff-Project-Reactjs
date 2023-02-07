import React from 'react'

function Aside() {
  return (
    <div className='aside'>
      <p>All users <span>DETAIL &gt; </span></p>
      <p id='users'>2,431,340</p>
      <div className="side-data">
        <div className="side-box purple-box"><div className='purple-center'></div></div>
        <div className='side-data-text'>
          <p>Total earning</p>
          <p>540,549</p>
        </div>
      </div>
      <div className="side-data">
        <div className="side-box cyan-box"><div className='cyan-center'></div></div>
        <div className='side-data-text'>
          <p>Sales</p>
          <p>1,205,677</p>
        </div>
      </div>
      <div className="side-data">
        <div className="side-box orange-box"><div className='orange-center'></div></div>
        <div className='side-data-text'>
          <p>Purchase</p>
          <p>48,430,039</p>
        </div>
      </div>

      <div className="progress-circle">
       
      </div>

    </div>
  )
}

export default Aside
