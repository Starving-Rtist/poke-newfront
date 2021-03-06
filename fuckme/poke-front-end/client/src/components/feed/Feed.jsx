import "./feed.css";
import { useState, useEffect } from "react";
import Share from "../share/Share";
import Post from "../post/Post";
// import {Posts} from "../../dummyData"
///Fetch posts
export default function Feed() {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((allPosts) => {
        setAllPosts(allPosts);
      });
  }, []);


  const handleDelete = (deletedPost) => {
    fetch(`/posts/${deletedPost.id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      const updatedPosts = allPosts.filter((post) => post.id !== deletedPost.id);
      setAllPosts(updatedPosts);
    });
  };
  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("fuck");
  //     setErrors([]);
  //     setIsLoading(true);

  //     fetch("/posts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newPost),
  //     }).then(() => {
  //       console.log("New Post Added");
  //       console.log(newPost);
  //       setIsLoading(false);
  //       navigate("/");
  //     });
  //   };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {allPosts.slice(0).reverse().map((post) => (
          <Post key={post.id}  post={post} handleDelete={handleDelete} allPosts={allPosts} />
          
        ))}
      </div>
    </div>
  );
}
