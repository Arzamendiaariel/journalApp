import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


export const loadNotes = async( uid = '') => {
    if ( !uid ) throw new Error("User's UID doesn't exist");

    const collectionRef = query(collection( FirebaseDB, `${ uid }/journal/notes` ), orderBy("date"))
    const docs = await getDocs(collectionRef);

    const notes = [];
    docs.forEach( doc => {
        notes.unshift({ id: doc.id, ...doc.data() });
    });

    return notes;
}
