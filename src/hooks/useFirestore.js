import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [everyNotes, setEveryNotes] = useState([]);

  useEffect(() => {
    let unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt','desc')
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setEveryNotes(documents);
      });
    return () => unsub();
  }, [collection]);
  
 
  return { everyNotes };
};

export default useFirestore;