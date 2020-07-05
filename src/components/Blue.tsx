import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';

import { BlueState } from '../store';

// スタイルを定義
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(1)
    },
  })
);

type Props = {
  blue: BlueState
  onIncrement: () => void
  onDecrement: () => void
}

const BlueComponent: React.FC<Props> = ({ blue, onIncrement, onDecrement }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography variant="h2" color="inherit">
          Count =  { blue.count }
        </Typography>
        <div>
          <Fab color="primary" aria-label="add" className={classes.button} onClick={onIncrement}>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="add" className={classes.button} onClick={onDecrement}>
            <RemoveIcon />
          </Fab>
        </div>
    </div>
  );
};


export default BlueComponent;
