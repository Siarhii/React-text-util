import React,{useState}from 'react'

export default function About() {
 
    const [dark_mode_style,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const [Text_on_button,setBtnText] = useState ("Turn ON Dark Mode")

    let togglefunc = () => {
        if (dark_mode_style.color === 'black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Turn Off Dark mode")
        }
        else {
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Turn ON Dark mode")
        }
    } 
  return (
<>
<div className="accordion" id="accordionExample" style={dark_mode_style}>
  <h1>About</h1>
 <div className="accordion-item"  style={dark_mode_style}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button"  style={dark_mode_style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5> About Textutil </h5> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is my first react based website. it was nice building a website for the first time.This is a basic text utility website that can capitalise sentences.... and do some other things. There are curretly tons of issues present in the website,i will slowly try to fix them one by one.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={dark_mode_style}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button"  style={dark_mode_style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5> About Me </h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong></strong> I will do this later. First i have to host this website on github pages.
      </div>
    </div>
  </div>
  <button onClick={togglefunc} type="button" className="btn btn-primary">{Text_on_button}</button>
</div>
</>
  )
}
