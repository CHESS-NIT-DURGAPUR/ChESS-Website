import React, { Component } from 'react';
import { connect } from 'react-redux'
import { update, validform, generatedata } from '../utils/formtions'
import { addnews } from '../actions/recordactions'
import FormFields from '../utils/formfields';
class Addnews extends Component {

    state = {
        formSuccess: false,
        formError: false,
        formdata: {
            author: {
                element: 'input',
                value: '',
                config: {
                    name: 'AUTHOR',
                    placeholder: 'Enter the author name here',
                    type: 'text'
                },
                validation: {
                    required: false
                },
                valid: true,
                validationMessage: '',
                label: true
            },
            subject: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'SUBJECT',
                    placeholder: 'Type the subject',
                    type: 'text'
                },
                validation: {
                    required: false
                },
                valid: true,
                validationMessage: '',
                label: true
            },
            month: {
                element: 'input',
                value: '',
                config: {
                    name: 'MONTH',
                    placeholder: 'Type the month',
                    type: 'text'
                },
                validation: {
                    required: false
                },
                valid: true,
                validationMessage: '',
                label: true
            },
            date: {
                element: 'input',
                value: '',
                config: {
                    name: 'DATE',
                    placeholder: 'Type the date',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid: true,
                validationMessage: 'Enter the date',
                label: true
            },
            link: {
                element: 'input',
                value: '',
                config: {
                    name: 'LINK',
                    placeholder: 'Enter the URL',
                    type: 'text'
                },
                validation: {
                    required: false
                },
                valid: true,
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
        event.preventDefault();
        const isformvalid = validform(this.state.formdata, 'register')
        console.log(isformvalid)
        const data = generatedata(this.state.formdata, 'register')
        console.log(this.props.user.member)
        if (true) {
            this.props.dispatch(addnews(data)).then((response) => {
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

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className='add'>
                    <div className="row">
                        <div className="headtitle">
                            <h2 className="neon" style={{ fontFamily: "sans serif" }}>ADD NEWS TO NEWSFEED</h2>
                        </div>
                    </div><br></br><br></br>
                    <div className="jumbotron">

                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.author}
                                    id={'author'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>

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
                                    formdata={this.state.formdata.link}
                                    id={'link'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>



                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.month}
                                    id={'month'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="each">
                                <FormFields
                                    formdata={this.state.formdata.date}
                                    id={'date'}
                                    change={(event) => { this.updateform(event) }}
                                />
                            </div>
                        </div>


                        <div className="block row">
                            <center>
                                <button style={{ padding: "10px" }} onClick={(event) => this.submitform(event)}>
                                    SUBMIT THIS INFORMATION
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

export default connect(mapStateToProps)(Addnews);