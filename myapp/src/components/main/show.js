import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getrecords } from '../actions/recordactions';
import FieldRow from "../utils/formrow"
import Pic from '../utils/pic';

class Show extends Component {

    state = {

    }
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
            <div className="row">

                <div className="cv" >
                    <h3 className="neon" style={{ textAlign: 'center' }}>
                        YOUR INFORMATION
                    </h3>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <FieldRow name={'name'}
                                value={this.state.name}
                            />
                        </div>

                        <div className="col-lg-6 col-sm-6">
                            <Pic image={this.state.pic ? this.state.pic[0].url : null} text={"PHOTO"} />
                        </div>

                    </div>


                    <div className="row">
                        <FieldRow name={'email'}
                            value={this.state.email}
                        />
                    </div>


                    <div className="row">
                        <FieldRow name={'Current qualification'}
                            value={this.state.currentdegree}
                        />
                    </div>


                    <div className="row">
                        <FieldRow name={'Work Place'}
                            value={this.state.workplace}
                        />
                    </div>


                    <div className="row">
                        <FieldRow name={'Year of Passing'}
                            value={this.state.year}
                        />
                    </div>

                    <div className="row">
                        <FieldRow name={'Additional Information'}
                            value={this.state.additional}
                        />
                    </div>

                </div>
                <button onClick={() => window.print()}>GENERATE PDF</button>

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