import React from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import { userContext } from '../../UserContext';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const { login } = React.useContext(userContext);
  return (
    <>
      <ul className={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
