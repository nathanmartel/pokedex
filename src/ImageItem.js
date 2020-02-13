import React, { Component } from 'react';

// Data Object example:
// {
// url:
// "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
// title: "UniWhal",
// description: "A unicorn and a narwhal nuzzling their horns",
// keyword: "narwhal",
// horns: 1
// }


export default class ImageItem extends Component {
    render() {
    return <li>
        <div className="card-image">
            <img src={this.props.creature.url} alt={this.props.creature.title} />
        </div>
        <div className="card-text">
            <h3>{this.props.creature.title}</h3>
            <p>{this.props.creature.description}</p>
            <p>Horns: {this.props.creature.horns}</p>
        </div>
    </li>
    }
}