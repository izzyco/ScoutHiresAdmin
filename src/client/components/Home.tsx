import { makeStyles, CardHeader, Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const useStyles = makeStyles(() => ({
  LogoImg: {
    width: 150,
    paddingBottom: 25,
  },
}));

export const Home: React.FunctionComponent = () => {
  const classes = useStyles({});
  return (
    <Grid container spacing={0} alignItems='center' justify='center'>
      <Grid item>
        <Typography>
          <h2>Scout</h2>
        </Typography>
      </Grid>
    </Grid>
  );
};
