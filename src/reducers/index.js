
const initialState = [{
  id: '0',
  subReddit: 'pugs',
  poster: 'DukeOfWindsor',
  timeOfPost: 'Sat Sep 14 2019 19:03:20 GMT-0700 (Pacific Daylight Time)',
  title: 'Angry pug',
  src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/4376924f-8207-49a6-85a4-60f2fe20ce91-profile_image-300x300.png',
  upvotes: 10000,
  downvotes: 300,
  comments: []
}]



/**
 *    You will add different action logic here by creating
 *    case statements
 */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default rootReducer;