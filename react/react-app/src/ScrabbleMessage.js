import React, { Component } from 'react';
import _ from 'lodash';


class ScrabbleMessage extends Component {

  renderAnagrams(){
    return _.map(this.props.anagrams, (word,index)=> {
      return (
        <li key={index} className="scrabble-words">
          <p>{word}</p>
        </li>
      );
    });
  }

  renderMessage(){
    if (this.props.anagrams.length) {
      return (
        <h3>{this.props.anagrams.length} words found:</h3>
      );
    }
  }


  render() {

    return (
      <div>
        {this.renderMessage()}
        <ul>
          {this.renderAnagrams()}
        </ul>
      </div>
    );
  }
}

export default ScrabbleMessage;
