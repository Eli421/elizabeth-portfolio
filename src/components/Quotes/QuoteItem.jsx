
import React, { useState, useEffect } from 'react';
import '../Quotes/quoteItem.scss'
import {quotes} from '../../data/quotes'


export const QuoteItem = () => {

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = quotes.indexOf(currentQuote);
      const nextIndex = (currentIndex + 1) % quotes.length;

      setCurrentQuote(quotes[nextIndex]);
    }, 10000);

      return( ) => clearInterval(interval);    
  }, [currentQuote]);

  return (
    <div className="quoteItem">
        <p className="quoteItem__text"> {currentQuote} </p>
    </div>
  )
}
