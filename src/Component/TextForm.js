import React,{useState} from 'react'

export default function Form() {

    const HandleLower=()=>{
        let nText=text.toLowerCase();
        setText(nText);
    }

    const HandleUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const HandleClear=()=>{
        let newText='';
        setText(newText);
    }

    const HandleOnChange=(event)=>{
        setText(event.target.value);
        
    }
   
    const[text, setText]=useState("Write Text Here");

    return (
        <div className="container my-5">
            <div className="form-floating mb-3 ">
                <label htmlFor="" className="form-label"></label>
                <h4>Enter Text To analyze</h4>
                <textarea className="form-control h-100" value={text} onChange={HandleOnChange} name="" id="" rows="8"></textarea>
              </div>
                    <label htmlFor="floatingInput"></label>
            <button className="btn btn-primary mx-2 " onClick={HandleUpper}> UpperCase</button>
            <button className="btn btn-danger " onClick={HandleLower}> LowerCase</button>
            <button className="btn btn-warning mx-2" onClick={HandleClear}> ClearText</button>
            <div>
                <h2 className='my-4'>Your Text Summary</h2>
                <p>{text.split(' ').length} words & {text.length} characters</p>
            </div>
            <div className='border border-1 px-3 bg-dark text-light rounded-3'>
                <h2 className='my-4'>Preview</h2>
                <p>{text} </p>
            </div>
        </div>

        
    )
}
