import {GET_RESTORATION, GET_RESTORATIONS, GET_RESTORATIONS_FILTER} from "../actions/actions"
let initialState = { restorations: [] };

const restorationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTORATIONS:
            return {...state, restorations: action.payload};
        case GET_RESTORATIONS_FILTER:
            return {...state, restorations: action.payload};
        case GET_RESTORATION:
            return {...state, restorations: action.payload};
        default:
            return state;
    }
}

export { restorationReducer };
