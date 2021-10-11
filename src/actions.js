import { DEFAULT_STORE } from "./constants";
import { UPDATE_INPUT_ONE } from "./constants";
import { UPDATE_INPUT_TWO } from "./constants";

export function initFunction() {
    return {
        type: DEFAULT_STORE, value1: "----", value2: "----"
    }
}

export function updateInputOneFunction(value1) {
    return {
        type: UPDATE_INPUT_ONE, value1: value1
    }
}

export function updateInputTwoFunction(value2) {
    return {
        type: UPDATE_INPUT_TWO, value2: value2
    }
}