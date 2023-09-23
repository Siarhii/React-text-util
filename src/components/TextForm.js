import React,{useState} from 'react'
//usestate is a hook,idk what hooks are

export default function TextForm(form) {
   
    const handleUpClick = () => {
        console.log("Clicked uppercase button.")
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handlelowClick = () => {
        console.log("Clicked lowercase button.")
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleClearClick = () => {
        console.log("Clicked clear button.")
        let newtext = '';
        setText(newtext)
    }
    const handleOnChange = (event) => {
        setText(event.target.value) //takes the value in the event thignnsn..a.a.a.da.s.aa.dsa.sad.
    } 

    //const CopyText = () => {
    //    let text2 = document.getElementById("textBOX");
    //    text2.select();
    //    navigator.clipboard.writeText(text2.value);
    //}

    const removeExtraSpaces = () => {
        let newtext = text.split(/\s+/);
        setText(newtext.join(" "));
        console.log("button clicked");
    }

    const CopyText = () => {
         var text = document.getElementById("textbox");
        text.select();
        navigator.clipboard.writeText(text.value);
        form.showAlert("Copied to Clipboard!","success");
    }

    
    const [text,setText] = useState('Enter your text here'); // make sure to always add this inside the function,here text is what you want to change and setText is a function by which you can change the text and usestate is default string that will be saved in 'text'
  return (
    <>
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:form.mode==='dark'?'white':'black'}}><h1>{form.heading}</h1></label>
            <textarea className="form-control" id="textbox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor:form.mode==='dark'?'grey':'white' ,color:form.mode==='dark'?'light':'dark'}}></textarea>
            <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handlelowClick}>Lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button> 
            <button className="btn btn-secondary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-secondary mx-1" onClick={CopyText}>Copy Text</button>
        </div>
        <div style={{color:form.mode==='dark'?'white':'black'}}>
            <h3>Total words = {text.split(" ").length}.</h3>
            <h3>Total characters (including spaces) = {text.length}.</h3>
            <h3>This will take about {0.008 * text.split(" ").length} minutes to read.</h3>
        </div>
    </div>
    </>
  )
}
//onchange(handleonchange) -> handleonchange is a function that we have defined above which will activate after there is a 'changein'/'Onchange' textarea
//btn btn-dark is a syntax for dark button of bootstrap,mx-1 sets margin as 1
//for some reason it shows error sometimes i still dont know why but it will work if u just restart tthe app in the terminal,below is the error
//React Hook "useState" is called in function "textform" that is neither a React function component nor a custom React Hook function. React component names must start with an uppercase letter. React Hook names must start with the word "use"