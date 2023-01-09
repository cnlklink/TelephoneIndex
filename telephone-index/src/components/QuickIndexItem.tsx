import React from 'react';

function QuickIndexItem( props: { text: string } ) 
{
  return (
    <div className='quick-item-item'>
        { props.text }
    </div>
  );
}

export default QuickIndexItem;