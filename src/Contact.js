import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({showContactInfo:!this.state.showContactInfo});
    }
    onDelete = e => {
        this.props.deleteHandler()
    }
    render() {
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state
        return (
            <div className = 'card card-body mb-3'>
               <h5>{name} <button onClick= {this.onShowClick} className = 'btn btn-sm btn-success'/> <button onClick = {this.onDelete} className = 'btn btn-sm btn-danger' style = {{float: 'right'}}/></h5> 
               {showContactInfo ? ( <ul className = 'list-group'>
                <li className = 'list-group-item'>Email: {email}</li>
                <li className = 'list-group-item'>Phone: {phone}</li>
               </ul> ): null }
              
            </div>
        )
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteHandler: PropTypes.func.isRequired
    
}