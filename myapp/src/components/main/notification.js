import React, { Component } from 'react';
import { connect } from 'react-redux'
import { update, validform } from '../utils/formtions'
import FormFields from '../utils/formfields';
import FileUpload from '../utils/fileupload'
import { notific } from '../actions/memberactions';

class Notific extends Component {
    state = {
        formSuccess: false,
        formError: false,
        formdata: {
            main: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'main',
                    placeholder: 'Enter the body of the text here',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: true,
                validationMessage: '',
                label: true
            },
            subject: {
                element: 'input',
                value: '',
                config: {
                    name: 'subject',
                    type: 'text',
                    placeholder: 'Enter the subject of the mail here',
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            },

            arguments: {
                element: 'input',
                value: '',
                config: {
                    name: 'arguments',
                    type: 'text',
                    placeholder: 'Enter the argument of the mail here',
                },
                validation: {
                    required: true
                },
                valid: false,
                validationMessage: '',
                label: true
            },
            images: {
                value: [],
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                validationMessage: '',
                label: false
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
        event.preventDefault();
        const isformvalid = validform(this.state.formdata, 'register')
        console.log(isformvalid)
        if (true) {
            this.props.dispatch(notific(this.state.formdata.subject.value, this.state.formdata.main.value, this.state.formdata.images.value, this.state.formdata.arguments.value)).then((response) => {
                if (response.payload.success) {
                    console.log('hurray')
                    this.setState({
                        formSuccess: true,
                        formError: false
                    })
                }
                else {
                    this.setState({
                        formError: true
                    })
                }
            }
            )
        }
    }
    imageHandler = (images) => {
        console.log(images)
        const newFormData = {
            ...this.state.formdata
        }
        newFormData['images'].value = images;
        newFormData['images'].valid = true
        this.setState({
            formData: newFormData
        })

        console.log(this.state.formdata.images)
    }

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className='add'>
                    <div className="headtitle row">
                        <h2 className="neon" style={{ fontFamily: "sans serif" }}>SENT NOTIFICATIONS</h2>
                    </div>
                    <div className="each">
                        <FileUpload
                            imageHandler={(images) => this.imageHandler(images)}
                            reset={this.state.formSuccess} />
                    </div>
                    <div className="row"></div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="jumbotron">

                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.subject}
                                    id={'subject'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.main}
                                    id={'main'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.arguments}
                                    id={'arguments'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>


                        <div className="block row">
                            <center>
                                <button style={{ padding: "10px" }} onClick={(event) => this.submitform(event)}>
                                    SENT THE MAIL
                                </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {


    return {
        user: state.member,
    }

}

export default connect(mapStateToProps)(Notific);