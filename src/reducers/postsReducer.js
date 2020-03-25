export default (state = [], action) => { //dealing with arr or list of records
  switch (action.type) { //use switch instead of if
    case 'FETCH_POSTS':
      return action.payload;
    default:
        return state;
  }
}

  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  // return state;

//rules of reducers
//Must return any value besides undefined
//Produces 'state', or data to beused inside of your app using only previous state and the action object that has been dispatched
    //first time reducer is called: reducer takes undefined and action #1 to return state v1
    //second time reducer is called: reducer takes state v1 and action #2 to return state v2
//Must not return reach 'out of itself or own function' to decide what value to return (reducers are pure)
    //when reducer gets called, it only looks at previous state value and action object to decide what to return, thats it
    //badL return document.queryselectyor(), bad return axios.get(), good return state + action
//Must not mutate its input 'state' argument << misleading
    //never state[0],state.pop, state.push, state.age...
    //JK. YOU CAN MUTATE IT ALL DAY AND NOT SEE ANY ERRORS
    //there is a corner case that applies where you can mutate, but for beginners it is easier to say you cant
    //best practice is dont mutate

//Removing ele from arr 
  // state.filter(ele => ele !== 'hi')
//Adding ele to arr
  // [...state, 'hi']
//Replacing
  //state.map(el => el === 'hi' ? 'bye' : el)

//Updating prop of obj
  // { ...state, name: 'Sam'}
//Adding
  //{ ...state,age:30}
//Removing
  //{...state,age:undefined}
  //_.omit(state,'age')
    
