import React, { Component } from 'react';
import Pic from '../utils/pic';
import { connect } from 'react-redux'
import { getrecords } from '../actions/recordactions';
class Disp extends Component {
    componentDidMount() {
        this.props.dispatch(getrecords()).then(response => {
            console.log(response.payload.images[0].url)
            this.setState({
                ...response.payload,
                academicrecords: response.payload.academicrecords
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.academicrecords ?
                        this.state.academicrecords.map((rec, i) => (
                            <div key={i}>
                                <div style={{ padding: "10px" }}>
                                    <Pic
                                        image={rec.document[0].url} text={"PHOTO"}
                                    />
                                </div>
                                <p className="info" style={{ fontStyle: "algerian", textTransform: "underline" }}>{rec.info}</p>
                            </div>
                        )) : null
                }

            </div>
        );
    }
}

export default connect()(Disp);