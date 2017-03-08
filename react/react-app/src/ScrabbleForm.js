import React, { Component } from 'react';



class ScrabbleForm extends Component {

  onFormSubmit(e) {
    e.preventDefault();
    var word = this.refs.word.value;

    if(word.length > 0) {
      this.refs.word.value = '';
      this.props.onSearch(word);
    }
  }


  render() {

    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input ref="word" type="text" placeholder="enter letters here"/>
          <button btn btn-primary>Get Anagrams</button>
        </form>
      </div>
    );
  }
}

export default ScrabbleForm;
