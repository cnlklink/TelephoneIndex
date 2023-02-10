import React from 'react';

type EntryFormProps = {
    onCancelClick: () => void
}

function EntryForm( props: EntryFormProps ) 
{
    return (
        <form id="entry-editor__form">
            <button id="entry-form__cancel-button" onClick= { props.onCancelClick } > Cancel </button>
            <button id="entry-form__createButton"> Create </button>
        </form>
    )
}

export default EntryForm