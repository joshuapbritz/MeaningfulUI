import { h } from 'preact';
import { useState } from 'preact/hooks';

const value = parseInt(window.localStorage.getItem('likes')) || 0;

export default () => {
  const [likes, setLikes] = useState(value);

  function updateLikes() {
    console.log('here');
    const value = parseInt(window.localStorage.getItem('likes') || 0);
    setLikes(value + 1);
    window.localStorage.setItem('likes', value + 1);
  }

  if (!!likes) {
    return <button onClick={() => updateLikes()}>Likes {likes}</button>;
  } else return <button onClick={() => updateLikes()}>Like</button>;
};
