import React, {useState} from 'react'


export default function TextForm(props) {
    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleChange = (event)=>{
            console.log('changeeeeeeeee')
            setText(event.target.value)

    }
    
    const [text, setText] = useState('Enter text Here');
    
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleChange} id="MyBox" rows="8"></textarea>
                <button className='btn btn-info my-2' onClick={handleClick}>Convert to Upper Case</button>
            </div>
    </div>


    )
}
