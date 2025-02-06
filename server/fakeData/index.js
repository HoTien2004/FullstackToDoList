export default {
    authors: [
        {
            id: 123,
            name: 'tienho'
        },
        {
            id: 999,
            name: 'quyettien'
        }
    ],
    folders: [
        {
            id: "1",
            name: 'Folder 1',
            createdAt: '2021-01-01',
            authorId: 123,
        },
        {
            id: "2",
            name: 'Folder 2',
            createdAt: '2021-01-01',
            authorId: 999,
        },
        {
            id: "3",
            name: 'Folder 3',
            createdAt: '2021-01-01',
            authorId: 123,
        }
    ],
    notes: [
        {
            id: "123",
            content: "<p>Go to supermarket</p>",
            folderId: "1"
        },
        {
            id: "124",
            content: "<p>Go to park</p>",
            folderId: "1"
        },
        {
            id: "125",
            content: "<p>Go to school</p>",
            folderId: "2"
        }
    ]
}