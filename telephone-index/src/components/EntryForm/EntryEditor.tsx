import React, { useState } from 'react';

import EntryForm from './EntryForm'

function EntryEditor() 
{
    const [showEntryEditor, setShowEntryEditor] = useState<boolean>( false );

    const newEntryClickHandler = () => {
        setShowEntryEditor( true )
    }

    return (
        <div id="entry-editor">
            { showEntryEditor ? <EntryForm/> : <div id="entry-editor__hidden"> <button id="entry-editor__new-entry-button" onClick= {newEntryClickHandler} > Add New Entry </button> </div> }
        </div>
    )
}

export default EntryEditor