import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/fbconfig.js";

export default function useDatabase() {
  const notesRef = collection(db, "notes");
  const getNotes = () => {
    const q = query(notesRef, orderBy("timestamp", "desc"));
    return getDocs(q);
  };
  const addNote = (data) => {
    data = { ...data, timestamp: serverTimestamp() };
    return addDoc(notesRef, data);
  };
  const deleteNote = (id) => {
    const data = doc(db, "notes", id);
    return deleteDoc(data);
  };
  return {
    getNotes,
    addNote,
    deleteNote,
  };
}
