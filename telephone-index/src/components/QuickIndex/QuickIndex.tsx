import './QuickIndex.css'

import QuickIndexItem from './QuickIndexItem'

import React from 'react';

type QuickIndexProps = {
    onItemSelected: ( item: string ) => void,
    selectedItem: string
}

function QuickIndex( props: QuickIndexProps ) 
{
  return (
    <div id="quick-index">
        { 
            _getItems().map( (item, _) => {
                const isSelected = (item === props.selectedItem)
                return <QuickIndexItem key={item} onSelected={props.onItemSelected} text={item} isSelected={isSelected}/>
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