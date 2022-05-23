import React, { Component } from 'react';

class Live extends Component {

    stream = (e) => {
        e.preventDefault();
        navigator.getMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        const vendorUrl = window.URL || window.webkitURL;
        const video = document.getElementById('video')
        navigator.getMedia({
            audio: true,
            video: true
        }, (stream) => {
            console.log(vendorUrl)
            video.srcObject = stream
            video.play();
        }, (err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="booth">
                <video id="video" style={{ width: "400px", height: "400px" }} onClick={(e) => { this.stream(e) }}></video>
            </div>
        );
    }
}

export default Live;