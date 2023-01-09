import './QuickIndex.css'

import React from 'react';

type QuickIndexItemProps = {
    text: string
}

function QuickIndexItem( props: QuickIndexItemProps ) 
{
  return (
    <div className='quick-index-item'>
        { props.text }
    </div>
  );
}

export default QuickIndexItem;