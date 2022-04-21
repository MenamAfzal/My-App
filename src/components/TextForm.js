import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to Upper Case", "warning")
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to lower Case", "danger")
    }


    const handleChange = (event)=>{
            console.log('changeeeeeeeee')
            setText(event.target.value)

    }
    
    const [text, setText] = useState('Enter text Here');
    
    return (
        <>
        <div className='container'style={{color:props.mode === 'dark'? 'white':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode === 'light'? 'white':'grey' , color:props.mode === 'light'? 'black':'white'}} id="MyBox" rows="8"></textarea>
                <button className='btn btn-info my-4' onClick={handleClick}>Convert to Upper Case</button>
                <button className='btn btn-danger my-4 mx-2' onClick={handleLowerClick}>Convert to Lower Case</button>
            </div>
    </div>
    <div className='container my-2'style={{color:props.mode === 'dark'? 'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').length} words {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes Reading</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
     </>

    )
}
