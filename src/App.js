import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './QuoteDisplay'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
	  quote: '',
	  author: ''
    }
  }

  componentDidMount() {
	this.fetchRandomQuote()
  }

  fetchRandomQuote() {
    fetch("http://quotes.rest/qod.json")
    .then(response => response.json())
	.then(quote => { 
		if (quote.contents) {
			this.setState({
				quote: quote.contents.quotes[0].quote,
				author: quote.contents.quotes[0].author,
			})
		}
	})
    .catch(err => console.log("Error fetching random quote. " + err));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Quote of the Day
        </header>
        <QuoteDisplay 
			quote = {this.state.quote}
			author = {this.state.author}
        />
		<div className="App-api">Created with use of They Said so.
			See more at <a href="https://theysaidso.com/api">https://theysaidso.com/api</a>
		</div>
      </div>
    );
  }
}

export default App;
