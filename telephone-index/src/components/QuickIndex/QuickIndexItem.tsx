import './QuickIndex.css'

import React from 'react';

type QuickIndexItemProps = {
    text: string,
    onSelected?: ( item: string ) => void,
    with?: ( prevState: number ) => void
}

function QuickIndexItem( props: QuickIndexItemProps ) 
{
    const clickHandler = () => {
        props.onSelected?.( props.text )
    }

    const id = 'quick-index-item-' + props.text

    return (
        <div id={id} className = 'quick-index-item' onClick = { clickHandler }>
            { props.text }
        </div>
    );
}

export default QuickIndexItem;