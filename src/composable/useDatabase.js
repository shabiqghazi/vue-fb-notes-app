import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/fbconfig.js";

export default function useDatabase() {
  const notesRef = collection(db, "notes");
  const getNotes = () => {
    const q = query(notesRef, orderBy("timestamp", "desc"));
    return getDocs(q);
  };
  const getNote = (id) => {
    const data = doc(db, "notes", id);
    return getDoc(data);
  };
  const addNote = (data) => {
    data = { ...data, timestamp: serverTimestamp() };
    return addDoc(notesRef, data);
  };
  const deleteNote = (id) => {
    const data = doc(db, "notes", id);
    return deleteDoc(data);
  };
  const updateNote = (id, data) => {
    const noteRef = doc(db, "notes", id);
    data = { ...data, timestamp: serverTimestamp() };
    return updateDoc(noteRef, data);
  };
  return {
    getNotes,
    getNote,
    addNote,
    deleteNote,
    updateNote,
  };
}
