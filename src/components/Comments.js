import { collection, getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../config/firebaseconfig";

function Comments() {
  // console.log("db", db);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const q = query(collection(db, "comments"));

    const querySnapshot = await getDocs(q);
    const cmts = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      cmts.push(doc.data());
    });
    setComments(cmts);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <h2 className="text-center"> Please leave a comment:</h2>

      {comments &&
        comments.map((comment, id) => {
          return (
            <div className="text-center">
              <p>{Comment.author}</p>
              <p>{Comment.text}</p>
              {/* <p>{Comment.date?.seconds}</p> */}
            </div>
          );
        })}
    </>
  );
}

export default Comments;
