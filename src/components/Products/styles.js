import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#e3f2fd',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Allerta Stencil',
    fontWeight: 'bold',
    margin: '5% 0'
  }
}));