import React from 'react';
import './QuoteDisplay.css'

const QuoteDisplay = ({quote, author}) => {
    return( 
        <div className="quoteContainer">
            <div className="quoteText">{quote ? quote : "You don't see 100% of the quotes you don't look up."}</div>
            <div className="quoteAuthor">-{author ? author : "Unknown Author"}</div>
        </div>
    )
}

export default QuoteDisplay;