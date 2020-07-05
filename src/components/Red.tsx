import React, { useEffect } from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { RedState } from '../store';

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
  red: RedState
  onUpdateTime: () => void
}

const RedComponent: React.FC<Props> = ({ red, onUpdateTime }) => {
  const classes = useStyles();
  useEffect(() => {
    setInterval(() => {
      onUpdateTime();
    }, 1000);
  });

  return (
    <div className={classes.root}>
        <Typography variant="h2" color="inherit">
          Time =  { red.time }
        </Typography>
    </div>
  );
};


export default RedComponent;
