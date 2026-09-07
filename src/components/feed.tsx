import { useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { feedData } from '../data/feed-data.tsx';

function Feed() {
  const [posts, setPosts] = useState(feedData);

  function toggleLike(id: number) {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  }

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="placeholder-post">
          <p>{post.post}</p>
          {post.image && (
            <img className="post__image" src={post.image} alt={`Post ${post.id}`} />
          )}

          <div className="post__actions">
            <button
              className={`post__likeButton${post.liked ? " post__likeButton--active" : ""}`}
              type="button"
              aria-pressed={post.liked ?? false}
              onClick={() => toggleLike(post.id)}
            >
              {post.liked ? <AiFillLike /> : <AiOutlineLike />}
              J'aime
            </button>
            <span className="post__likeCount">{post.likes} j'aime</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
