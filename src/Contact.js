import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Consumer} from './context'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Contact extends Component {
    state = {
        showContactInfo: false
    }

    onShowClick = e => {
        this.setState({showContactInfo:!this.state.showContactInfo});
    }
    onDelete = async (id, dispatch) => {
        try{
       await axios.delete(`https://jsonplaceholder.typicode.com/users/$ {id}`)
        
       dispatch({type: 'DELETE_CONTACT', payload:id})
        } catch(e) {
            dispatch({type: 'DELETE_CONTACT', payload:id})
        }     
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
                            <h5>{name} <button onClick= {this.onShowClick} className = 'btn btn-sm btn-success'/> <button onClick = {this.onDelete.bind(this, id, dispatch)} className = 'btn btn-sm btn-danger' style = {{float: 'right'}}/> <Link to = {`contact/edit/${id}`} ><button className = 'btn btn-sm btn-dark' style = {{ float:'right', color: 'black', marginRight: '1rem'}}></button></Link></h5> 
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