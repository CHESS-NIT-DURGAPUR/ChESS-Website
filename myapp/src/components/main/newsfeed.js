import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getrecords } from '../actions/recordactions';
import FieldRow from "../utils/formrow"

class Show extends Component {
    componentDidMount() {
        this.props.dispatch(getrecords()).then(response => {
            console.log(response.payload)
            this.setState({
                ...response.payload,
                pic: response.payload.images
            })
        })

    }

    render() {
        console.log(this.state.pic)
        return (
            <div className="row" style={{ textAlign: 'center' }}>
                <div className="l" style={{ display: "inline-block" }}>
                    <div className="cv" >
                        <h3 className="neon" style={{ textAlign: 'center' }}>
                            YOUR INFORMATION
                        </h3>
                        <div className="row">
                            <FieldRow name={'Heading'}
                                value={this.state.heading}
                            />
                        </div>
                        {
                            this.state.author ?
                                <div className="row">
                                    <FieldRow name={'author'}
                                        value={this.state.author}
                                    />
                                </div>
                                : null
                        }

                        <div className="row">
                            <FieldRow name={'subject'}
                                value={this.state.subject}
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        record: state.record
    }
}

export default connect(mapStateToProps)(Show);