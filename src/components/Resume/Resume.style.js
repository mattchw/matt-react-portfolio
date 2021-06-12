import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	containerItem: {
		paddingTop: 50,
		paddingBottom: 50,
    margin: '0 auto'
	},
	skillItem: {
    paddingTop: 10,
	},
	resumeLeftTitle: {
		borderLeft: '3px solid #025f89',
		float: 'left',
		paddingLeft: 10,
	},
	resumeLeftTitleSM: {
		borderBottom: '3px solid #025f89',
		float: 'left',
		padding: 10,
	},
	resumeRightInfo: {
		textAlign: 'left',
	},
	resumeRightInfoName: {
		textAlign: 'center'
	},
	resumeAccordionDark: {
		backgroundColor: '#424242',
		color: 'white'
	}
}));