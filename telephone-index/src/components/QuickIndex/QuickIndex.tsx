import './QuickIndex.css'

import QuickIndexItem from './QuickIndexItem'

import React from 'react';

type QuickIndexProps = {
    onItemSelected: ( item: string ) => void
}

function QuickIndex( props: QuickIndexProps ) 
{
  return (
    <div id="quick-index">
        { 
            _getItems().map( (item, _) => {
                return <QuickIndexItem onSelected={props.onItemSelected} text={item}/>
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