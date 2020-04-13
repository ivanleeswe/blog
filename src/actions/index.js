import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => { //defining a func that is going to return a func
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data})
}

export const fetchUser = id => async dispatch => { //gets an object with user info
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data})
}

//Wrong
// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts')

//   return {
//     type: 'FETCH_POSTS',
//     payload:response
//   }
// }

//Error: Actions must be plain objects. Use custom middleware for async actions.
//Whats wrong with fetchPosts?
//Action creators must return plain JS objects with a type property due to async await syntax
//By time our action gets to a reducer, we won;'t have fetched our data, reducer needs to wait to run or else we get nothing back since it alreadg processed before we get data back from api, thats why we need async await

//synchonous action creator: instantly returns an action with data readdy to go
//asynchronous action creator: takes some amount of time for it to get its data ready to go: needs middleware(redux thunk)
//middleware: function that gets called with every action we dispatch, has ability to stop, modify, or mess around with actions, tons of open source middleware exist, most popular is for dealing with async actions, we will  be using redux thunk for async issues
//actinon creator > action > dispatch > middleware > reducers > state
//normal rules of action creators: must return action objects, must havev type property, can optionally have a payload
//rules w/ redux thunk: action creators CAN return action objects OR action creators can return functions. if action object gets returned, must havev a type. If action objects gets returned, it can optionally havve payload