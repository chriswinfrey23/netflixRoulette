import React from 'react'


export default class Loader extends React.Component{
  render() {
    return (
      <div className="center loader">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
             </div><div className="gap-patch">
             <div className="circle"></div>
            </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <p>Loading Results</p>
    </div>
    )
  }
}