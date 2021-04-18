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
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { FaSeedling, FaUsers } from 'react-icons/fa';
import { GiPayMoney } from 'react-icons/gi'
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
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to="/investors">
          <ListItem button>
            <ListItemIcon className={classes.icons} >
              <GiPayMoney />
            </ListItemIcon>
            <ListItemText primary='Investors' />
          </ListItem>
        </Link>
        <Link to="/startup">
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <FaSeedling />
            </ListItemIcon>
            <ListItemText primary='StartUp' />
          </ListItem>
        </Link>
        <Link to="/team">
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary='Team' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/users">
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <FaUsers />
            </ListItemIcon>
            <ListItemText primary='Users' />
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem button>
            <ListItemIcon className={classes.icons}>
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
