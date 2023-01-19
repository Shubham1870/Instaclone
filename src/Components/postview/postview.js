import { useEffect, useState } from "react"
import Header from "../Header/header"

import "./postview.css"

const url="https://instaclone5.onrender.com"
const Postview = () => {
  const [Posts, setPosts] = useState([]);
  const getUserData = async () => {
    fetch(`${url}/getposts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  };
  console.log(Posts);
  useEffect(() => {
  getUserData();
  }, []);
  return (
    <><Header/>
      {Posts.length > 0 ? (
        <div>   
        
          {Posts.map((post, i) => {
            return (        
    <section className="card-container">
    <section className="card-header">
    <div>
        <div className="Post-name">{post.name}</div>
        <div className="post-location">{post.location}</div>
    </div>
    <span>
        <i className="fa fa-ellipsis-h" aria-hidden="true"/>
    </span>
    </section>
   
<section className="card-image">
<img src={`${url}/Images/${post.image}`} alt="post-img" />
</section>
<section className="card-action">
    <span>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </span>
    <span>
    <i class="fa fa-paper-plane" aria-hidden="true"></i>
    </span>
    <span>
        {post.date}
    </span>
    </section>
    <section className="likes">
<span>{post.likes}</span>
<span> likes</span>
</section>
    
    <section className="description">
        <p>{post.description}</p>
    </section>
    </section>

            )
          })}</div>
      ) : (
        <div className="zeropost">
          <h3>want to add post!!click on camera</h3>
        </div>
      )}

    </>
  )
}
export default Postview
