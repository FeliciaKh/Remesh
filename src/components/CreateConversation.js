import React, {Component} from 'react'
import axios from 'axios'
import Input from './Input'
import Message from './Message'

export default class CreateConversation extends Component {
    constructor() {
        super()
        this.state = {
            conversationTitle: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post('/api/conversation', this.state)
            this.props.addConvo(res.data)
            this.setState({conversationTitle: ''}) 
        } catch (error) {
            console.error('Something went wrong...')
        }
    }

    render() {
        return (
            <div>
                <Input state= {this.state} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} />
                <Message state= {this.state} handleChange= {this.handleChange} handleSubmit= {this.handleSubmit} />
            </div>
        )
    }
}