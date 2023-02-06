import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Avatar, Collapse, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import EggIcon from '@mui/icons-material/Egg';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FitbitIcon from '@mui/icons-material/Fitbit';
import styles from '../components/Dashboard.module.scss';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Link from 'next/link';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '60ch',
        },
    },
}));

const mdTheme = createTheme();

const avatarOptions = ['Profile', 'Account', 'Dashboard', 'Logout'];

function DashboardContent({ children }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [drop, setDrop] = React.useState(true);
  const handleClick = () => {
    setDrop(!drop);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} className={styles.container} sx={{ display: "flex" }}>
            <Grid className={styles.searchInput}>
              <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                      marginLeft: '5px',
                      ...(open && { display: 'none' }),
                  }}
              >
                  <MenuIcon />
              </IconButton>
            </Grid>
            <Grid className={styles.avatarContainer} sx={{ display: "flex" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Nome" src="../../public/favicon.ico" sx={{ marginRight: '20px' }}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {avatarOptions.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
        </AppBar>
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <FitbitIcon 
                    sx={{
                        marginRight: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end' 
                    }}
                />
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end' 
                        }}
                    />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link href="/home">
                        <ListItemText primary="Home" />
                    </Link>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <StorefrontIcon />
                    </ListItemIcon>
                    <Link href="/products">
                      <ListItemText primary="Produtos" />
                    </Link>
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <Link href="/producers">
                      <ListItemText primary="Produtores" />
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                      <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Categorias" />
                  {drop ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={drop} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                              <EggIcon />
                          </ListItemIcon>
                          <Link href="/products/organics">
                            <ListItemText primary="Orgânicos" />
                          </Link>
                      </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                              <AgricultureIcon />
                          </ListItemIcon>
                          <Link href="/products/pesticides">
                            <ListItemText primary="Defensivos" />
                          </Link>
                      </ListItemButton>
                  </List>
                </Collapse>

              <ListItemButton>
                  <ListItemIcon>
                      <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Lista de compras" />
              </ListItemButton>

            </List>
        </Drawer>
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) => theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="xlg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    {/* <Grid item xs={12}>

                    </Grid> */}
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            {/* <Chart /> */}
                            {children}
                        </Paper>
                    </Grid>
                </Grid>
                {/* <Copyright sx={{ pt: 4 }} /> */}
            </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function MainLayout({ children }) {
  return <DashboardContent>{children}</DashboardContent>;
}