import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="conversationTitle">Conversation Title:</label>
                    <input name="conversationTitle" type="text" placeHolder= "Type here!" onChange={props.handleChange} value={props.state}/>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <input name="message" type="text" placeHolder= "Type here!" onChange={props.handleChange} value={props.state}/>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <label htmlFor="thought">Thought:</label>
                    <input name="thought" type="text" placeHolder= "Type here!" onChange={props.handleChange} value={props.state}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Input