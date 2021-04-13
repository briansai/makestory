export const newStoryReducer = (
  state = {
    title: 'New Story',
    key: 'new-story',
    value: [],
  },
  action
) => {
  switch (action.type) {
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
