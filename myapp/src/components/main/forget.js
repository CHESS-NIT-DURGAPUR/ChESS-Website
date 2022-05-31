import React, { Component } from 'react';
import FormFields from '../utils/formfields';
import { update, validform, generatedata } from '../utils/formtions'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { forget } from '../actions/memberactions'
import "../register/register.css"
class Forget extends Component {
    state = {
        loading: false,
        data: '',
        formSuccess: false,
        formError: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email',
                    placeholder: 'Enter email here',
                    type: 'email'
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            }
        }
    }

    updateform = (element) => {
        const newdata = update(element, this.state.formdata, 'register')
        this.setState({
            formdata: newdata,
        })
    }

    submitform = (event) => {
        console.log("Dfdf")
        event.preventDefault();
        const isformvalid = validform(this.state.formdata, 'register')
        const data = generatedata(this.state.formdata, 'register')
        console.log(data)
        console.log(isformvalid)
        if (isformvalid) {
            console.log("lll")
            this.setState({
                data: data,
                loading: true
            })
            this.props.dispatch(forget(data)).then((response) => {

                console.log(response)
            }).catch(err => console.log(err))

        }

    }

    render() {
        return (
            this.state.loading ?
                <center> <h2>Email sent to <u>{this.state.data.email}</u></h2> </center>
                :
                <div className="container">
                    <form className='form__contact' id="contact" onSubmit={(event) => {
                        this.submitform(event)
                    }}>


                        <div>
                            <h2 className="form__heading1">For Reset Your Password Please Enter Your Email</h2>
                        </div>
                        <div className="row block lblock" style={{ display: "inline" }}>
                            <FormFields
                                formdata={this.state.formdata.email}
                                id={'email'}
                                change={(event) => { this.updateform(event) }}
                            />
                        </div>
                        <br></br>
                        <br></br>

                        <fieldset>
                            <center>
                                <Button
                                    variant="contained"
                                    id="reset"
                                    className="custom-btn btn-1"
                                    onClick={(event) => this.submitform(event)}
                                >
                                    Reset Your Password   <i className="fa fa-key" aria-hidden="true"></i>
                                </Button>
                            </center>
                        </fieldset>
                    </form>
                </div>
        );
    }
}

export default connect()(Forget);