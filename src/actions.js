export const incGameNumber = () => ({ type: 'INC_GAME_NUMBER' });

export const setGameResult= (t_start, t_end, clickCounter) => ({type: 'SET_GAME_RESULT', startTime: t_start, endTime: t_end, clickCounter: clickCounter});
