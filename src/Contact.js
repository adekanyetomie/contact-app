import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Consumer} from './context'


export default class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({showContactInfo:!this.state.showContactInfo});
    }
    onDelete = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload:id})
    }
    render() {
        const {name, email, phone, id} = this.props.contact;
        const {showContactInfo} = this.state

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div className = 'card card-body mb-3'>
                            <h5>{name} <button onClick= {this.onShowClick} className = 'btn btn-sm btn-success'/> <button onClick = {this.onDelete.bind(this, id, dispatch)} className = 'btn btn-sm btn-danger' style = {{float: 'right'}}/></h5> 
                            {showContactInfo ? ( <ul className = 'list-group'>
                            <li className = 'list-group-item'>Email: {email}</li>
                            <li className = 'list-group-item'>Phone: {phone}</li>
                            </ul> ): null }
                       
                     </div>
                    )
                }}
            </Consumer>   
        )
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
    
}