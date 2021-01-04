import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 200
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardItem: {
    fontFamily: 'Questrial'
  },
  cardPrice: {
    fontFamily: 'Questrial'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));