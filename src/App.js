import React, { Component } from 'react';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokeTempData from './data-temp.js';
import request from 'superagent';
import './bootstrap-reboot.min.css';
import './style.css';
import './list.css';

export default class App extends Component {
  state = { 
    pokeData: [],
    page: 1,
    numberOfResult: 0,
    numberOfResultsPerPage: 10,
  };

  
  async getPokeList() {
    // Build URL for use with API request
    const dataURL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
    // Grab everything in URL after # with built-in hash property and remove hashtag.
    let myQueryString = window.location.hash.slice(1);
    // console.log('myQueryString: ', myQueryString);
    // i.e.: myQueryString = 'page=3&perPage=2';
    const hashedURL = `${dataURL}?${myQueryString}`;
    console.log('Requesting URL: ', hashedURL);
    const data = await request.get(hashedURL);
    this.setState({ pokeData: data.body.results });
    this.setState({ numberOfResults: data.body.count });
  }

  async componentDidMount() {
    this.getPokeList();
    window.addEventListener("hashchange", () => {
      const myQueryString = window.location.hash.slice(1);
      const myParams = new URLSearchParams(myQueryString);
      const myParamsPage = Number(myParams.get('page'));
      const myParamsPerPage = Number(myParams.get('perPage'));
      console.log('myParams: ', myParams); 
      this.setState({ page: myParamsPage });
      this.setState({ numberOfResultsPerPage: myParamsPerPage });
      this.getPokeList();
    });
  }
   
  updatePage(numberOfPages) {
    // Get existing parameters, modify, update local URL
    const myQueryString = window.location.hash.slice(1);
    const myParams = new URLSearchParams(myQueryString);
    myParams.set('page', this.state.page + numberOfPages);
    myParams.set('perPage', this.state.numberOfResultsPerPage);
    console.log('myParams: ', myParams);
    // Use hash property to change only relevant parts of local URL
    window.location.hash = myParams.toString();
  }

  setInitialParams() {
    const myQueryString = window.location.hash.slice(1);
    const myParams = new URLSearchParams(myQueryString);
    myParams.set('page', this.state.page);
    myParams.set('perPage', this.state.numberOfResultsPerPage);
    window.location.hash = myParams.toString();
  }

  render() {
    return (
      <div>
        {this.setInitialParams()}
        <Header />
        <div className="searchBar">
          <form>
            <input type="text"></input>
            <button type="submit" onClick={() => {}}>Search</button>
          </form>
        </div>
        <div className="pagination">
          <button onClick={() => this.updatePage(-1)} disabled={this.state.page === 1 ? "true" : ""}>Previous</button>
          <p>Page {this.state.page} of {Math.ceil(this.state.numberOfResults / this.state.numberOfResultsPerPage) }</p>
          <button onClick={() => this.updatePage(1)}>Next</button>
        </div>
        {/* { JSON.stringify(this.state.pokeData) } */}
        <PokeList pokeData={this.state.pokeData} />
      </div>
    );
  }
}
