import ProfileImage from "./ProfileImage";
import { User } from "./User";

function Tweet({ tweetProp }) {
  // first way to receive props is like this
  console.log("here are our props", tweetProp);
  return (
    <div className="tweet">
      {/*  making a test comment to show the curlies */}
      <ProfileImage image={tweetProp.user.image} />
      <div className="body">
        <User
          name={tweetProp.user.name}
          handle={tweetProp.user.handle}
          timeStamp={tweetProp.timeStamp}
        />
        <p className="message">{tweetProp.message}</p>

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
