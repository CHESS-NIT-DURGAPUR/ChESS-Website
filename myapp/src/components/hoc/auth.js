import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/memberactions';
import CircularProgress from '@material-ui/core/CircularProgress';

export default (ComposedClass, reload, adminRoute = null) => {
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }
        componentDidMount() {
            this.props.dispatch(auth()).then(response => {
                console.log(this.props.user.userData)
                let user = this.props.user.userData;

                if (!user.isAuth) {
                    if (reload) {
                        this.props.history.push('/register')
                    }
                } else {
                    if (adminRoute && !user.isAdmin) {
                        this.props.history.push('/allalum')
                    } else {
                        if (reload === false) {
                            this.props.history.push('/allalum')
                        }
                    }
                }
                this.setState({ loading: false })
            })
        }


        render() {
            if (this.state.loading) {
                return (
                    <div className="main_loader">
                        <center>    <CircularProgress style={{ color: '#2196F3' }} thickness={7} /> </center>
                    </div>
                )
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.member
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}


