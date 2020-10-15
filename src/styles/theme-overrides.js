import './styles.css';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Akkurat Pro',
    fontSize: '1.6rem',
  },
  palette: {
    primary: { main: '#009149' },
  },
});

export default theme;
