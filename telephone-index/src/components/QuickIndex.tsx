import './QuickIndex.css'

import React from 'react';

function QuickIndex() 
{
  return (
    <div id="quick-index">
        { 
            _getItems().map( (item, _) => {
                return <div className="quick-index-item"> {item} </div>
            } )
        }
    </div>
);
}

function _getItems(): Array<string>
{
    const alphabet: Array<string> = []

    for( let i = 65; i <= 90; i++ )
    {
        alphabet.push( String.fromCharCode( i ) )
    }

    return alphabet
}

export default QuickIndex;