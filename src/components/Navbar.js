import React from 'react' //type 'rfc' for boiler plate code of react based funtions 
import PropTypes from 'prop-types';
//props are like elements that you pass into a function syntax is {props.the_thing_you_want_to_name} also make sure to add the curly brackets
//pass the props in the function and {props.anything} u want to do inside the function like how we do with classes and objects
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link to={`src/App.js`} className="nav-link active" aria-current="page" >{props.item1}</Link>
        </li>
        <li className="nav-item">
          <Link to={`./About`} className="nav-link active" aria-current="page" >{props.item2}</Link>
        </li>
      </ul>
    </div>
    <button className="btn btn-success btn-circle btn-circle-sm m-1"></button>
    <button className="btn btn-primary btn-circle btn-circle-sm m-1"></button>
    <button className="btn btn-warning btn-circle btn-circle-sm m-1"></button>
    <button className="btn btn-danger btn-circle btn-circle-sm m-1"></button>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'white'} mx-1`}>
        <input className="form-check-input" onClick={props.togglemode} aria-checked={true} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode==='light'?'Enable':'Disable'} Dark Mode</label>
      </div>
  </div>
  </nav>
  )
}

//react based function will only return a single tag so make sure everything you code is enclosed in these tags <> </>

Navbar.propTypes = {
  title: PropTypes.string.isRequired,//is required will make it so that the website wont work unless you pass a name as a prop
  item: PropTypes.string,
} //sets the deafualt datatype of title (line 9) to string

Navbar.defaultProps = {
  title:"Default title",
  item:"Default item"
}//sets the default title as "default title" and default item as "default item"