import { DEFAULT_STORE } from "./constants";
import { UPDATE_INPUT_ONE } from "./constants";
import { UPDATE_INPUT_TWO } from "./constants";

const initialState = {
    value1: "----",
    value2: "----",
};

function stateUpdate(state = initialState, action) {

    switch (action.type) {
        case DEFAULT_STORE:
            state = { ...state, value1: action.value1, value2: action.value2 };
            return state;
        case UPDATE_INPUT_ONE:
            state = { ...state, value1: action.value1};
            return state;
        case UPDATE_INPUT_TWO:
            state = { ...state, value2: action.value2 };
            return state;
        default:
            return state;
    };
};
export default stateUpdate;