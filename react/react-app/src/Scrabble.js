import React, { Component } from 'react';
import ScrabbleForm from './ScrabbleForm';
import ScrabbleMessage from './ScrabbleMessage';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';

const SCRABBLE_SEARCH_URL ='http://localhost:4000/search';




class Scrabble extends Component {

  constructor(props){
    super(props);
    this.state ={word: "", anagrams: []};
  }

  handleSearch(word){
    var encodedWord = encodeURIComponent(word);
    var requestUrl = `${SCRABBLE_SEARCH_URL}?word=${encodedWord}`;
    console.log(requestUrl);
    axios.get(requestUrl).then((res)=>{
      this.setState({ word : word, anagrams: res.data});
    }).catch((err)=>{
      console.log("Error");
    })
  }


  render() {
    const {word, anagrams} = this.state;

    return (
      <div>
      <Jumbotron>
        <h3>Scrabble Word Finder</h3>
        <ScrabbleForm onSearch={this.handleSearch.bind(this)} />
      </Jumbotron>
      <ScrabbleMessage word={word} anagrams={anagrams}/>
      </div>
    );
  }
}

export default Scrabble;
