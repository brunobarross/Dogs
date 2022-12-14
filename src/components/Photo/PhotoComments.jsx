import React from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { userContext } from '../../UserContext';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(userContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <ul
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
        ref={commentsSection}
      >
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
};

export default PhotoComments;
