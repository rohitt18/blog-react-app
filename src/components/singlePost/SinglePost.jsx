import "./singlePost.css";
import React from "react";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitlte">
          Here will be the Post Title.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rohit</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam
          in porro nisi iste veritatis et, animi perferendis aperiam itaque
          assumenda praesentium labore, illum ducimus officia non quaerat
          commodi rem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maiores ipsam in porro nisi iste veritatis et, animi perferendis
          aperiam itaque assumenda praesentium labore, illum ducimus officia non
          quaerat commodi rem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maiores ipsam in porro nisi iste veritatis et, animi
          perferendis aperiam itaque assumenda praesentium labore, illum ducimus
          officia non quaerat commodi rem!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
