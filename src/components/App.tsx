import React from 'react'

import { AppState } from '../store';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


import Blue from '../Containers/Blue';
import Red from '../Containers/Red';

// スタイルを定義
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
  })
);


type Props = {
  app: AppState
  onTogglePage: () => void
}

const AppComponent: React.FC<Props> = ({ app, onTogglePage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h2" color="inherit" className={classes.flex}>
          { app.page }
          </Typography>
          <Button color="primary" onClick={onTogglePage}>{ app.page === "blue" ? "red" : "blue" }</Button>
        </Toolbar>
      </AppBar>
      <Container>
      { app.page === 'blue' && <Blue /> }
      { app.page === 'red' && <Red /> }
      </Container>
    </div>
  );
};


export default AppComponent
