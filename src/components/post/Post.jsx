import "./post.css";
import React from "react";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Here will be the Post Title.</span> <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Post Description : Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores ipsam in porro nisi iste veritatis et, animi perferendis
        aperiam itaque assumenda praesentium labore, illum ducimus officia non
        quaerat commodi rem! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores ipsam in porro nisi iste veritatis et, animi perferendis
        aperiam itaque assumenda praesentium labore, illum ducimus officia non
        quaerat commodi rem! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Maiores ipsam in porro nisi iste veritatis et, animi perferendis
        aperiam itaque assumenda praesentium labore, illum ducimus officia non
        quaerat commodi rem!
      </p>
    </div>
  );
};

export default Post;
