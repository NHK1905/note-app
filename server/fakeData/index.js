export default {
    authors: [
        {
            id: 1,
            name: "NHK"
        },
        {
            id: 2,
            name: "HTH"
        }
    ],
    folders: [
        {
            id: "1",
            name: "Home",
            createdAt: "2022-11-18T03:45:13Z",
            authorId: 1,
        },
        {
            id: "2",
            name: "New Folder",
            createdAt: "2022-10-18T03:45:13Z",
            authorId: 2,
        },
        {
            id: "3",
            name: "Work",
            createdAt: "2022-9-18T03:45:13Z",
            authorId: 2,
        },
    ],
    notes: [
        {
            id: "123",
            content: "<p>Go to school</p>",
            folderId: "1"
        },
        {
            id: "456",
            content: "<p>Go to supermarket</p>",
            folderId: "2"
        },
        {
            id: "789",
            content: "<p>Go to swim</p>",
            folderId: "1"
        },
    ],
}