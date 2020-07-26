export default function manageUsers(state = {
  user: {email: "", password: "", id: "", admin: false, habits: [], daily: { habits: []}, token: ''}, loading: false, signedin: false}, action){
    switch(action.type){
      
    case 'SIGN_IN': 
      return{
      ...state, user: {...state.user, token: action.token.token}, loading: 'done', signedin: true
      }
      
      case 'GET_INFO': 
      const { data } = action
      console.log("Get info", action)
        return{
          ...state, user: {...state.user, habits: data.habits, daily: { habits: data.daily.habits}, id: data.id}
        }

      case 'ADD_HABIT': 
      return{
        ...state, user: {...state.user, habits: [...state.user.habits, action.habit]}
      }


      case 'SET_HABITS':
        console.log(action)
      return{ 
        ...state, user: {...state.user, habits: action.habits.habits}
      }


    case 'CREATE_USER': 
      return{
        // post fetch to user and render a token and create a daily. push to home page
      }

    case 'SIGN_OUT': 
      return state = {
        user: {email: "", password: "", id: "", admin: false, habits: [], daily: { habits: [] }, token: ''}, loading: false, signedin: false}
        
    
    case 'MOVE_HABITS': 
    console.log("Move Habits", action.dailyhabits.daily_habits)
    return{
      ...state, user: {...state.user, daily: {...state.user.daily, habits: action.dailyhabits.daily_habits}}
    }

        
      

    default: 
    return state;
    }
  }
