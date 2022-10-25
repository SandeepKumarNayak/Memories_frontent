import React from "react";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom";
import { deletePost, likePost } from "../../../actions/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faComment, faHeart, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function Post({setCurrentId, post }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };
  const handleEdit = ()=>{
    setCurrentId(post._id);
  }
  const handleLike = ()=>{
    dispatch(likePost(post._id));
  }
  return (
    <div className="p-4 md:w-full">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={post.image}
          alt="blog"
        />
        <div className="p-6">
          <div className="flex justify-between content-center mb-2">
            <h2 className="tracking-widest text-xl title-font font-medium text-gray-400">
              {post.title}
            </h2>
            <div >
              {/* For edit */}
              <button className="mr-3 text-xl text-gray-600 hover:text-green-600" onClick={handleEdit}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>

              {/* for delete  */}
              <button onClick={handleDelete} className="mr-3 text-xl text-gray-600 hover:text-red-600">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {post.subTitle}
          </h1>
          <p className="leading-relaxed mb-3">
            {post.message.substring(0, 50) + "..."}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link to={`/posts/${post._id}`} post={post} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More &nbsp;
              <FontAwesomeIcon className="text-indigo-500 text-xl"  icon={faArrowRightLong} />
            </Link>
            <span onClick={handleLike} className="cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
               <FontAwesomeIcon icon={faHeart} />
              &nbsp;{post.likes.length}
            </span>
            <span className="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
              <FontAwesomeIcon icon={faComment} />
              &nbsp;6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
