import React, { useState } from 'react';

import EntryForm from './EntryForm'
import Toolbar from './Toolbar'

function EntryEditor() 
{
    const [showEntryEditor, setShowEntryEditor] = useState<boolean>( false );

    const newEntryClickHandler = () => {
        setShowEntryEditor( true )
    }

    return (
        <div id="entry-editor">
            { showEntryEditor ? <EntryForm/> : <Toolbar onAddNewEntryClick = { newEntryClickHandler } /> }
        </div>
    )
}

export default EntryEditor