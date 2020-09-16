import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="conversationTitle">Conversation Title:</label>
                <input name="conversationTitle" type="text" onChange={props.handleChange} value={props.state.conversationTitle}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input