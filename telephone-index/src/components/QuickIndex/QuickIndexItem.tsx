import './QuickIndex.css'

import React from 'react';

type QuickIndexItemProps = {
    text: string,
    isSelected?: boolean,
    onSelected?: ( item: string ) => void,
    with?: ( prevState: number ) => void
}

function QuickIndexItem( props: QuickIndexItemProps ) 
{
    const clickHandler = () => {
        props.onSelected?.( props.text )
    }

    const id = 'quick-index-item-' + props.text

    const selectionClass = props.isSelected === true ? " quick-index-item-selected" : ""
    const classes = `quick-index-item${selectionClass}`

    return (
        <div id={ id } className={ classes } onClick={ clickHandler }>
            { props.text }
        </div>
    );
}

export default QuickIndexItem;