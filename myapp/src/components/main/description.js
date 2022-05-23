import React, { Component } from 'react';
import './des.css'

class Desc extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.location.state.item.primary}</h1>
        <div>
          <p><i className="fa fa-quote-right"></i><br></br>
            {this.props.location.state.item.main}
          </p>
        </div>
      </div>
    );
  }
}

export default Desc;