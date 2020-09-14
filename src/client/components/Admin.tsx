import { Button, CardActions, CardHeader, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export const Admin: React.FunctionComponent = () => (
  <Grid item xs={12}>
    <Card>
      <CardHeader title='Admin' />
      <CardContent>
        <TextField id='email' label='Email' variant='outlined' />
        <TextField id='password' label='Password' variant='outlined' />
      </CardContent>
      <CardActions style={{ paddingLeft: 20 }}>
        <Button variant='contained' color='primary'>
          Login
        </Button>
      </CardActions>
    </Card>
  </Grid>
);
