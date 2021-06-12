export const UPDATE_THEME = 'UPDATE_THEME';

export const UpdateTheme = theme => ({
  type: UPDATE_THEME,
  theme,
});

const updateTheme = (theme) => (dispatch) => {
	dispatch(UpdateTheme(theme));
};

export const themeActions = {
	updateTheme,
};