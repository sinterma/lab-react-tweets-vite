import ProfileImage from "./ProfileImage.jsx";
import User from "./User.jsx";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imageUrl={props.oneTweet.user.image} />
     <div className="body">
        <div className="top">

          <User name={props.oneTweet.user.name} handle={props.oneTweet.user.handle} />
  
          <span className="timestamp">{props.oneTweet.timestamp}</span>
        </div>

        <p className="message">{props.oneTweet.message}</p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment" data-testid="comment-icon"></i>
          <i className="fas fa-retweet" data-testid="retweet-icon"></i>
          <i className="far fa-heart" data-testid="heart-icon"></i>
          <i className="fas fa-share" data-testid="share-icon"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
