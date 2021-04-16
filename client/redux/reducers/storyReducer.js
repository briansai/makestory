const initialState = {
  isLoading: false,
  loaded: false,
  data: null,
  error: null,
};

export const storyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_STORY_LOADING':
      return {
        ...state,
        isLoading: true,
        loaded: false,
        data: null,
        error: null,
      };
    case 'ADD_STORY_SUCCESS':
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.data,
        error: null,
      };
    case 'ADD_STORY_FAILURE':
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: null,
        error: action.err,
      };
    default:
      return state;
  }
};

export const newStoryReducer = (
  state = {
    title: 'New Story',
    key: 'new-story',
    value: [],
  },
  action
) => {
  switch (action.type) {
    case 'ADD_STORY_SUCCESS':
      return { ...state };
    case 'ADD_STORY_FAILURE':
      return;
    default:
      return { ...state };
  }
};

export const prioritizedReducer = (
  state = {
    title: 'Prioritized',
    key: 'prioritized',
    value: [],
  },
  action
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const inProgressReducer = (
  state = {
    title: 'In Progress',
    key: 'in-progress',
    value: [],
  },
  action
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const completedReducer = (
  state = {
    title: 'Completed',
    key: 'completed',
    value: [],
  },
  action
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export const deployedReducer = (
  state = {
    title: 'Deployed',
    key: 'deployed',
    value: [],
  },
  action
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
