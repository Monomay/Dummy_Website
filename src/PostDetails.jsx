
import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const PostDetails = () => {

  const { id } = useParams();
  const [ signlePost,setSinglePost ]=useState({})
  // console.log(id);
  useEffect(() => {
    axios
      .get(`https://dummyapi.io/data/v1/post/${id}`, {
        headers: { "App-Id": "636cdfa0ef714b68b27e5ee0" },
      })
      .then((res) => {
        console.log(res.data);
        setSinglePost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <p>
      <h1> Post Details </h1>
        <h1>
        {signlePost?.id}
        </h1>
      </p>
      <img className="img-fluid" height="auto" width="100%" src={signlePost?.image} alt="" />
      <p>
        <h2>
        {signlePost.owner?.title} {signlePost.owner?.firstName} {signlePost.owner?.lastName}
        </h2>
      </p>
     </div>
  )
}

export default PostDetails