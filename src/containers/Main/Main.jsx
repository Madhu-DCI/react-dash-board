import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import { useStyles } from './styles';
import Shows from '../../pages/Shows/Shows'
import Courses from '../../pages/Courses/Courses'
import Blogs from '../../pages/Blogs/Blogs'
import Articles from '../../pages/Articles/Articles'
import Announcements from '../../pages/Announcements/Announcements'
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
          <Route path="/shows" component={Shows} />
          <Route path="/courses" component={Courses} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/articles" component={Articles} />
          <Route path="/announcements" component={Announcements} />
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
