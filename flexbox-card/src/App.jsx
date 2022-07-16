import React from 'react'


function App() {

  return (
    <body>
      <div className="card">
        <img className='card-image' src='../images/tech.jpg' alt="an iphone on a macbook with dramatic lighting" />
        <div className='card-content'>
          <h2 className='card-title'>7 tech tips and tricks that you need to know</h2>
          <p className='card-body'>Using these 7 proven tips from experts in the industry, you
            can save time, money and more!
          </p>

          <div className='card-footer'>
            <p className='card-read-time'><span>15</span> minute read</p>
            <a className="card-btn" href='#'>read more</a>
          </div>
        </div>
      </div >
    </body>
  )
}

export default App
