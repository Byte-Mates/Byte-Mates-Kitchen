import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleUser } from '../store';
import { Link } from 'react-router-dom';

class SingleUser extends Component {
    constructor(){
        super()
    }

    componentDidMount() {
        this.props.loadUserData(this.props.match.params.id)
    }

    render() {
        const { user } = this.props
        return (
            <div>
                <div className='single-user'>
                    <div>
                        Username: {user.username}
                    </div>
                    <div>
                        First name: {user.firstName}
                    </div>
                    <div>
                        Last name: {user.lastName}
                    </div>
                    <div>
                        Emain: {user.email}
                    </div>
                    <div>
                        Phone number: {user.phoneNumber}
                    </div>
                    <div>
                        Address: {user.address}
                    </div>
                </div>

                <Link to={`edit/${user.id}`}>
                    <button className='edit-btn'>Edit</button>
                </Link>
            </div>
        )
    }
};

const mapStateToProps = ({ user }) => {
    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => { 
    return {
       loadUserData: (id) => { dispatch(fetchSingleUser(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)