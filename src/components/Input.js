import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import '../stylesheets/style.css'
function Input() {
    const [content,setContent] = useState('# Preview...')
    const handleChange = (event) =>{
        setContent(event.target.value)
    }
  return (
    <div>
        <textarea id='editor'
        onChange={handleChange}
        placeholder="Editor..."
        >
        </textarea>
        <div id='preview'>
        <nav className='navbar'>
            
            </nav>
        <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    </div>
  )
}

export default Input
