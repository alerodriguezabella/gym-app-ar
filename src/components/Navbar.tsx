import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: '#4C5C68'}} position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: '#DCDCDD'}}
          >
            <MenuIcon sx={{color: '#DCDCDD'}}/>
          </IconButton> */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
            <Link href="/"> 
              <img alt='app-logo' style={{ margin: 'auto', width: '50px', height: '50px'}} src={require('../assets/gym-app-logo.png')}/>
            </Link>
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}