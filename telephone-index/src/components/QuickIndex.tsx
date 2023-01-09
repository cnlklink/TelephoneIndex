import './QuickIndex.css'

import QuickIndexItem from './QuickIndexItem'

import React from 'react';

function QuickIndex() 
{
  return (
    <div id="quick-index">
        { 
            _getItems().map( (item, _) => {
                return <QuickIndexItem text={item}/>
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