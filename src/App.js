import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js';
import imageData from './data.js';
// import request from 'superagent';
import './bootstrap-reboot.min.css';
import './App.css';
import './gallery.css';

export default class App extends Component {
  state = { 
    selected: null,
    selectedTwo: null,
  };

  // async componentDidMount() {
  //   const data = await request.get('https://swapi.co/api/people/1/');
  //   this.setState({ data: data.body });
  // }

  render() {
    const imageNodes = imageData
      .filter(image => {
        if (!this.state.selected) return true;
        return image.keyword === this.state.selected;
      })
      .filter(image => {
        if (!this.state.selectedTwo) return true;
        return image.horns === this.state.selectedTwo;
      });

    const allKeywords = imageData.map(item => item.keyword);
    // De-dupe keywords with Set
    const keywordOptions = [...new Set(allKeywords)];

    const allHorns = imageData.map(item => item.horns);
    const hornsOptions = [...new Set(allHorns)];
    
    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };    

    const handleChangeTwo = e => {
      this.setState({ selectedTwo: Number(e.target.value) });
    };    
  
    return (
      <div>
        <Header />
        {/* { JSON.stringify(this.state.data) } */}
        <section className="options">
            <select className="select-filter" onChange={handleChange}>
              <option value="" defaultValue>
                All Types
              </option>
              { keywordOptions.map(item => <option value={item} key={item}>{item}</option> ) }
            </select>
            <select className="select-filter" onChange={handleChangeTwo}>
              <option value="" defaultValue>
                All Horns
              </option>
              { hornsOptions.map(item => <option value={item} key={item}>{item}</option> ) }
            </select>
          </section>
        <ImageList imageData={imageNodes} />
      </div>
    );
  }
}
