import fakeData from '../fakeData/index.js';
import { FolderModel, AuthorModel } from '../models/index.js';

export const resolvers = {
    Query: {
        folders: async (parent, args, context) => { 
            const folders = await FolderModel.find({
                authorId: context.uid,
            });
            console.log({folders, context});
            return folders;
        },
        folder: async (parent, args) => {
            const folderId = args.folderId;
            console.log({folderId});
            const foundFolder = await FolderModel.findOne({_id: folderId});
            return foundFolder;
        },
        note: (parent, args) => {
            const noteId = args.noteId;
            return fakeData.notes.find(note => note.id === noteId)
        }
    },
    Folder: {
        author: async (parent, args) => {
            console.log({ parent, args });
            return await AuthorModel.findOne({ uid: parent.authorId });
        },
        notes: (parent, args) => {
            console.log({parent});
            return fakeData.notes.filter( note => note.folderId === parent.id);
        }
    },
    Mutation: {
        addFolder: async (parent, args, context) => {
            const newFolder = new FolderModel({...args, authorId: context.uid});
            await newFolder.save();
            console.log({newFolder});
            return newFolder;
        },
        register: async (parent, args) => {
            const foundUser = await AuthorModel.findOne({ uid: args.uid });

            if (!foundUser) {
                const newUser = new AuthorModel(args);
                await newUser.save();
                return newUser;
            }
            return foundUser;
        }
    }
}