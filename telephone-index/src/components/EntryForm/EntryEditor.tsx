import React from 'react';

import EntryForm from './EntryForm'

type EntryEditorProps = {
    isVisible: boolean
}

function EntryEditor( props: EntryEditorProps ) 
{
    return (
        <div id="entry-editor">
            { props.isVisible ? <EntryForm/> : <div id="entry-editor__hidden"> Add New Entry </div> }
        </div>
    )
}

export default EntryEditor