import React, { useEffect, useState } from 'react'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import { draftToHtml } from 'draftjs-to-html'

export default function Note() {

    const note = {
        id: '999',
        content: '<p>This is new note</p>'
    };

    const [editorState, setEditorState] = useState(() => {
        return EditorState.createEmpty();
    });

    const [rawHTML, setRawHTML] = useState(note.content);

    useEffect(() => {
        const blockFromHtml = convertFromHTML(note.content);
        const state = ContentState.createFromBlockArray(
            blockFromHtml.contentBlocks,
            blockFromHtml.entityMap,
        )
        setEditorState(EditorState.createWithContent(state))
    }, [note.id]);


    useEffect(() => {
        setRawHTML(note.content);
    }, [note.content]);

    const handleOnchange = (e) => {
        setEditorState(e);
        setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
    };

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={handleOnchange}
            placeholder='Write something'
        />
    )
}
