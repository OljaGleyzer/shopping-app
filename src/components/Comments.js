import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  collectionGroup,
  addDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebaseconfig";
import { AuthContext } from "../store/AuthContext";

function Comments({ id }) {
  const productId = useParams();
  console.log("productId", productId.id);
  console.log("id :>> ", id);
  const { user, logout, checkUserStatus, userName, setUserName } =
    useContext(AuthContext);
  const [comments, setComments] = useState(null);
  const [text, setText] = useState("");

  const handleComment = (e) => {
    setText(e.target.value);
  };

  // Get Comments from the Firestore

  const getComments = async () => {
    try {
      //   const comments = query(
      //     collectionGroup(db, "products"),
      //     where("productID", "==", id)
      //   );
      //   const productRef = collection(db, "products");
      //   console.log("testing", productRef);
      const q = query(
        collection(db, `product_${id}`)
        // collection(db, `product_1`)
      );
      console.log("q :>> ", q);

      const querySnapshot = await getDocs(q);
      const cmts = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        cmts.push(doc.data());
      });
      setComments(cmts);
      console.log("cmts", cmts);
    } catch (error) {
      console.log("error", error);
    }
  };

  //   //SEND MESSAGES
  //   const sendComment = async () => {
  //     //what do we want to store? text + time + user
  //     const commentObj = {
  //       text: message,
  //       date: new Date(), //creates the current date
  //       user: user.email,
  //     };
  //     console.log("commentObj", commentObj); //ok
  //     // Cloud Firestore creates collections and documents implicitly the first time you add data
  //     // to the document. You do not need to explicitly create collections or documents.
  //     try {
  //       const docRef = await addDoc(collection(db,´product_${id}´), commentObj);
  //       console.log("Document written with ID: ", docRef.id);
  //       readComments();
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   };

  //   //Read Messages
  //   const readComments = async () => {
  //     const q = query(collection(db, "comments"));
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       const comments = [];
  //       querySnapshot.forEach((doc) => {
  //         comments.push(doc.data());
  //       });
  //       setTextMessages(comments);
  //     });

  useEffect(() => {
    getComments();
    // addComment();
    //   readComments();
    // addCommentFirestore();
  }, []);

  const addComment = async () => {
    try {
      const commentObj = {
        user: user.email,
        text: text,
      };
      const docRef = await addDoc(collection(db, "product_" + id), commentObj);
      console.log("docRef :>> ", docRef);
      console.log("message saved in database");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <h2 className="text-center"> Please leave a comment:</h2>

      {comments &&
        comments.map((comment, i) => {
          return (
            <div className="comment-section text-center" key={i}>
              <p> User: {comment.user}</p>
              <p> Comment: {comment.text}</p>
              {/* <p>{Comment.date?.seconds}</p> */}
            </div>
          );
        })}
      <input
        type="text"
        className="text-center"
        value={text}
        onChange={handleComment}
      />
      {user ? (
        <button onClick={addComment}>Send Comment</button>
      ) : (
        <button>you need to login first</button>
      )}
    </>
  );
}

export default Comments;
