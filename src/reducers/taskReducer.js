//Individual reducer that will be passed in combineReducer in index.js
// reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.


const initialState = {
    tasks: [],
};

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'DELETE_TASK':
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state;
    }
}

export default taskReducer;

// ...state is a spread operator used to create a shallow copy of the current state. 
// It's a way to maintain immutability, meaning you don't directly modify the existing state, but instead, you create a new object with the desired changes.