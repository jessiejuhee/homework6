import NewComments from "./NewComments";


const Post = ({ title, body, postId }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    
    <NewComments postId={postId} />
  </div>
}

export default Post;