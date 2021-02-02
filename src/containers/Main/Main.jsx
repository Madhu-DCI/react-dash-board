import { Container } from '@material-ui/core';
import { useStyles } from './styles';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        {/* MAIN CONTENT */}
      </Container>
    </main>
  );
}

export default Main;
