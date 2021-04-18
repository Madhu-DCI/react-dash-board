import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { useStyles } from './styles';
import Investors from '../../pages/Investors/Investors'
import StartUp from '../../pages/StartUp/StartUp'
import Team from '../../pages/Team/Team'
import Users from '../../pages/Users/Users'
import Settings from '../../pages/Settings/Settings'
import Home from '../../pages/Home/Home'
import Auth from '../../pages/Auth/Auth';

function Main() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth='lg' className={classes.container}>
        <Switch>
          <Route path="/investors" component={Investors} />
          <Route path="/startup" component={StartUp} />
          <Route path="/team" component={Team} />
          <Route path="/users" component={Users} />
          <Route path="/settings" component={Settings} />
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </main>
  );
}

export default Main;
