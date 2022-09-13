import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear = () =>{
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div> 
      <div onClick={clear} style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline mb-4">
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
        <Gender setPageNumber={setPageNumber} setGender={setGender}/>
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
      </div>
    </div>
  )
}

export default Filters