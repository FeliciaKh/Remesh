import React from 'react'

const Message = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="message">Type your message here: </label>
                    <input name="message" type="text" placeHolder="Type here!" onChange={props.handleChange} value={props.state}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Message