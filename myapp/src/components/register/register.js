import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import { update, validform, generatedata } from '../utils/formtions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { registeruser, alumnienter } from '../actions/memberactions'
import "./register.css"

class Register extends Component {
    state = {
        loading: false,
        formSuccess: false,
        formError: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name',
                    placeholder: 'First Name',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname',
                    placeholder: 'Last Name',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'Email',
                    placeholder: 'Enter your Email here',
                    type: 'email'
                },
                validation: {
                    required: true,
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
            },
            confirmpassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'Confirm Password',
                    placeholder: 'Confirm your Password',
                    type: 'password'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                validationMessage: '',
                label: true
            },
            role: {
                element: 'radio',
                value: 0,
                config: {
                    name: 'admin',
                    placeholder: 'Admin here',
                    type: 'admin'
                },
                validation: {
                    required: false
                },
                valid: true,
                validationMessage: '',
                label: false
            },

        },
        value: 0,
        show: ''
    }

    updateform = (element) => {
        const newdata = update(element, this.state.formdata, 'register')
        this.setState({
            formdata: newdata,
        })
    }
    submitalumni = (event) => {
        event.preventDefault()
        const isformvalid = validform(this.state.formdata, 'register')
        if (isformvalid) {
            const name = this.state.formdata.name.value
            const email = this.state.formdata.email.value
            this.props.dispatch(alumnienter(name, email)).then(res => {

                alert("YOUR RESPONSE HAS BEEN SENT TO THE ADMIN.")
                this.setState({
                    show: 'YOUR RESPONSE HAS BEEN SENT TO THE ADMIN. YOU WILL BE ABLE TO REGISTER IN FEW MOMENTS'
                })
            }

            ).catch(err => {
                console.log(err)
            })

        }

    }
    submitform = (event) => {
        event.preventDefault();
        const isformvalid = validform(this.state.formdata, 'register')
        const data = generatedata(this.state.formdata, 'register')
        if (isformvalid) {
            this.props.dispatch(registeruser(data)).then((response) => {

                if (response.payload.success) {
                    console.log('hurray')
                    this.setState({
                        formSuccess: true,
                        formError: false,
                        loading: true
                    })
                    setTimeout(() => {
                        this.props.history.push('/login')
                        console.log('dffdfd')
                    }, 5000)
                }
                else {
                    this.setState({
                        formError: true,
                        show: response.payload.message
                    })
                }
            }
            )
        }
    }

    onrchange = (e) => {
        const newformdata = this.state.formdata

        newformdata['role'].value = e.target.value
        this.setState({
            formdata: newformdata,
            value: e.target.value
        })

        this.setState({
            value: 1
        })
    }
    render() {
        return (
            this.state.loading ?
                <center> <CircularProgress thickness={7} size={10} style={{ color: 'grey' }} />  </center>
                :
                <div className="container">

                    <div className="row" style={{ justifyContent: "center" }}>

                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <form id="contact" className='form__contact' onSubmit={(event) => {
                                this.submitform(event)
                            }} >
                                <div>
                                    <h1 className="form__heading1">CHESS MEMBER'S REGISTRATION FORM</h1>
                                    <h2 className="form__heading2">Please Register Yourself</h2>
                                    {
                                        this.state.show ?
                                            <label style={{ color: 'red', fontSize: "20px" }}>{this.state.show}</label> : null
                                    }
                                </div>

                                <div className="row block lblock" style={{ display: "inline" }}>
                                    <p className="text-danger">***Please Fill The Form Carefully</p>
                                    <FormFields
                                        formdata={this.state.formdata.name}
                                        id={'name'}
                                        change={(event) => { this.updateform(event) }}
                                    />
                                </div>

                                <div className="row block lblock" style={{ display: "inline" }}>
                                    <FormFields
                                        formdata={this.state.formdata.lastname}
                                        id={'lastname'}
                                        change={(event) => { this.updateform(event) }}
                                    />
                                </div>
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
                                <div className="row block lblock" style={{ display: "inline" }}>
                                    <FormFields
                                        formdata={this.state.formdata.confirmpassword}
                                        id={'confirmpassword'}
                                        change={(event) => { this.updateform(event) }}
                                    />
                                </div>

                                <br></br>

                                <div className="row">
                                    <div className="col-lg-12 col-sm-6 col-md-6 col-xs-6" style={{ textAlign: "center" }}>
                                        <Button variant="contained" color="primary" id="studentregister" className="button__footer" onClick={(event) => this.submitform(event)}>
                                            REGISTER AS A STUDENT
                                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                                        </Button>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="col-lg-12 col-sm-6 col-md-6 col-xs-6" style={{ textAlign: "center" }}>
                                        <Button variant="contained" color="primary" id="alumniregister" className="button__footer" onClick={(event) => this.submitalumni(event)}>
                                            REGISTER AS AN ALUMNI
                                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
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
export default connect(mapStateToProps)(Register);