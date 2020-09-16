import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="conversationTitle">Conversation Title:</label>
                    <input name="conversationTitle" type="text" onChange={props.handleChange} value={props.state}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Input