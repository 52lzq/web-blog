import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Blog from './Blog';
import ProTip from '@/ProTip';
import { Button } from 'antd';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/52lzq'>
        My Github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <>
      <Button type='primary'>2323</Button>
      {/* // <Container maxWidth='sm'>
    //   <Box my={4}>
    //     <Typography variant='h4' component='h1' gutterBottom={true}>
    //       Create React App v4-beta example with TypeScript
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container> */}
      <Blog />
    </>
  );
}
