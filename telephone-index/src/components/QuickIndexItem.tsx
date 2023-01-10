import './QuickIndex.css'

import React, { useState } from 'react';

type QuickIndexItemProps = {
    text: string
}

function QuickIndexItem( props: QuickIndexItemProps ) 
{
    const clickHandler = () => {
        alert( 'Item clicked = ' + props.text )
    }

    return (
        <div className = 'quick-index-item' onClick = { clickHandler }>
            { props.text }
        </div>
    );
}

export default QuickIndexItem;