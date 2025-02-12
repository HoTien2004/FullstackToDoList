import { graphQLRequest } from "./request";

export const notesLoader =  async ({ params: { folderId } }) => {
    console.log('loader', { folderId });

    const query = `query Folder($folderId: String!) {
        folder(folderId: $folderId) {
            id
            name
            notes {
                content
                id
            }
        }
    }`;

    const data = await graphQLRequest({query, 
        query,
            variables: {
                folderId
            }
    });
    return data;
}

export const noteLoader =  async ({ params: { noteId } }) => {
    console.log('loader', { noteId });

    const query = `query Folder($noteId: String) {
        note(noteId: $noteId) {
            content
            id
        }
    }`;

    const data = await graphQLRequest({query, 
        variables: {
            noteId
        }
    });
    return data;
}