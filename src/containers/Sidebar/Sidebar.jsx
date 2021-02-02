import clsx from 'clsx';
import {
  Divider,
  Drawer,
  IconButton,
  List,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

function Sidebar({ open, handleDrawerClose }) {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to="/shows">
          <ListItem button>
            <ListItemIcon>
              <MovieIcon />
            </ListItemIcon>
            <ListItemText primary='Shows' />
          </ListItem>
        </Link>
        <Link to="/courses">
          <ListItem button>
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary='Courses' />
          </ListItem>
        </Link>
        <Link to="/blogs">
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary='Blogs' />
          </ListItem>
        </Link>
        <Link to="/articles">
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary='Articles' />
          </ListItem>
        </Link>
        <Link to="/announcements">
          <ListItem button>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary='Announcements' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/users">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Users' />
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Settings' />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default Sidebar;
