import "./style.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const LikeContainer = ({ photo, user, handleLike }) => {
  return (
    <div className="like">
      {photo.like && user && (
        <>
          {photo.like.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.like.length} like(s)</p>
        </>
      )}
    </div>
  );
};

export default LikeContainer;