import './QuickIndex.css'

import React from 'react';

function QuickIndexItem( props: { text: string } ) 
{
  return (
    <div className='quick-index-item'>
        { props.text }
    </div>
  );
}

export default QuickIndexItem;