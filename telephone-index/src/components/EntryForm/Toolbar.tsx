import React from 'react';

type ToolbarProps = {
    onAddNewEntryClick: () => void
}

function Toolbar( props: ToolbarProps ) 
{
    return <div id="entry-editor__hidden"> 
        <button id="entry-editor__new-entry-button" onClick = { props.onAddNewEntryClick } > 
            Add New Entry 
        </button> 
    </div>
}

export default Toolbar