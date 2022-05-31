import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormFields from '../utils/formfields';

import Button from '@material-ui/core/Button';
import { update, validform, generatedata } from '../utils/formtions'
import { connect } from 'react-redux'
import { loginuser } from '../actions/memberactions'
import "./register.css"

class Login extends Component {
    state = {
        loading: false,
        formSuccess: false,
        formError: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'Email',
                    placeholder: 'Email',
                    type: 'email'
                },
                validation: {
                    email: true
                },
                valid: false,
                validationMessage: '',
                label: true
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            }
        },
        show: ''
    }


    updateform = (element) => {
        const newdata = update(element, this.state.formdata, 'register')
        this.setState({
            formdata: newdata,
        })

    }

    submitform = (event) => {
        event.preventDefault();
        const isformvalid = validform(this.state.formdata, 'register')
        const data = generatedata(this.state.formdata, 'register')
        if (isformvalid) {
            this.props.dispatch(loginuser(data)).then((response) => {
                if (response.payload.loginSuccess) {
                    console.log('hurray')
                    this.setState({
                        formSuccess: true,
                        formError: false,
                        loading: true
                    })

                    if (response.payload.member.role === 1) {

                        setTimeout(() => {
                            this.props.history.push('/details');
                        }, 3000)
                    } else {
                        setTimeout(() => {
                            this.props.history.push('/allalum');
                        }, 3000)
                    }
                }

                else {
                    console.log(this.props.user.member)
                    this.setState({
                        formError: true,
                        show: this.props.user.member.message
                    })
                }
            }
            )
        }
    }


    resetpassword = (event) => {
        event.preventDefault();

        setTimeout(() => {
            this.props.history.push('/forget');
        }, 100)
    }


    render() {
        return (
            this.state.loading ?
                <center> <CircularProgress thickness={7} size={100} style={{ color: 'grey' }} />  </center>
                :
                <div className="container">
                    <div className='row' style={{ justifyContent: "center" }}>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <form className='form__contact' id="contact" onSubmit={(event) => {
                                this.submitform(event)
                            }}>
                                <>
                                    <h1 className="form__heading1">CHESS MEMBER'S LOGIN FORM</h1>
                                    {
                                        this.state.show ?
                                            <label style={{ color: 'red', fontSize: "20px" }}>{this.state.show}</label> : null
                                    }
                                </>

                                <div className="row block lblock" style={{ display: "inline" }}>
                                    <FormFields
                                        formdata={this.state.formdata.email}
                                        id={'email'}
                                        change={(event) => { this.updateform(event) }}
                                    />
                                </div>

                                <div className="row block lblock" style={{ display: "inline" }}>
                                    <FormFields
                                        formdata={this.state.formdata.password}
                                        id={'password'}
                                        change={(event) => { this.updateform(event) }}
                                    />
                                </div>
                                <br />

                                <div className="row" >
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                                        <Button variant="contained" color="primary" className="custom-btn btn-1" onClick={(event) => this.submitform(event)}>
                                            LOGIN <i className="fa fa-sign-in" aria-hidden="true"></i>
                                        </Button>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ textAlign: "center" }}>
                                        <Button variant="contained" color="primary" className="custom-btn btn-1" onClick={(event) => this.resetpassword(event)}>
                                            FORGET PASSWORD <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {


    return {
        user: state.member
    }

}
export default connect(mapStateToProps)(Login);