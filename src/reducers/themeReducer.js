import {
  UPDATE_THEME
} from '../actions/themeAction';

const initialState = {
  theme: 'dark'
};

export function themeReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
  
    default:
      return state;
  }
}

export const getTheme = state => state.themeReducer.theme;