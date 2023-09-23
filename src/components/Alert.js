import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const temp_word = word.toLowerCase();
        return temp_word.charAt(0).toUpperCase() + temp_word.slice(1);
    
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
    </div>
  )
}