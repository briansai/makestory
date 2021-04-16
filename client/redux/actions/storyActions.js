import axios from 'axios';

export const addStory = (story) => {
  (dispatch) => {
    dispatch({ type: 'ADD_STORY_LOADING' });

    axios
      .post('/api/story', { story })
      .then((res) => {
        dispatch({ type: 'ADD_STORY_SUCCESS', data: res });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_STORY_FAILURE', err });
      });
  };
};
