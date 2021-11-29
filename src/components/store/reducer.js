const initialState = {
    gameNumber: 0,
    clickCounter: 0,
    startTime: undefined,
    endTime: undefined
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC_GAME_NUMBER":
            return {
                ...state,
                gameNumber: state.gameNumber + 1,
            };
        case "SET_GAME_RESULT":
            return {
                ...state,
                startTime: action.startTime,
                endTime: action.endTime,
                clickCounter: action.clickCounter
            }
        default:
            return state;
    }
}

export default reducer;