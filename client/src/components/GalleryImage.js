import React, { Component } from 'react';
import '../scss/GalleryImage.scss';
class GalleryImage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (this.props.id <= this.props.renderLimit && <a href={this.props.src}><img class="m-2 rounded gallery-img" src={this.props.src}></img></a>);
    }
}

export default GalleryImage;