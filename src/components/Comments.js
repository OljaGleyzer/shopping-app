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
import { Link, useParams } from "react-router-dom";
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
  }, []);

  const addComment = async () => {
    try {
      const commentObj = {
        user: user.email,
        text: text,
      };
      const docRef = await addDoc(collection(db, "product_" + id), commentObj);
      const updateComments = [...comments, commentObj];
      setComments(updateComments);
      setText("");
      console.log("docRef :>> ", docRef);
      console.log("message saved in database");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <>
      <div className="comment-section container">
        <h2 className="text-center"> Please leave a comment:</h2>

        {comments &&
          comments.map((comment, i) => {
            return (
              <div className="comment text-center" key={i}>
                <p> User: {comment.user}</p>
                <p> Comment: {comment.text}</p>
                {/* <p>{Comment.date?.seconds}</p> */}
              </div>
            );
          })}
        <div className="input-comment">
          <input
            type="text"
            className="text-center"
            value={text}
            onChange={handleComment}
          />
          {user ? (
            <button onClick={addComment}>Submit</button>
          ) : (
            <Link to="/login">
              <button> login first</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Comments;
