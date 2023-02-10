import React, { useState } from 'react';

import EntryForm from './EntryForm'
import Toolbar from './Toolbar'

function EntryEditor() 
{
    const [showEntryEditor, setShowEntryEditor] = useState<boolean>( false );

    const newEntryClickHandler = () => {
        setShowEntryEditor( true )
    }

    const newEntryCancelClickHandler = () => { 
        setShowEntryEditor( false )
    }

    return (
        <div id="entry-editor">
            { showEntryEditor ? <EntryForm onCancelClick = { newEntryCancelClickHandler } /> : <Toolbar onAddNewEntryClick = { newEntryClickHandler }/> }
        </div>
    )
}

export default EntryEditor