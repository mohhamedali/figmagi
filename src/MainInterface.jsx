import React from 'react';
import { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Grid, Paper, IconButton, InputBase, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu';
import { purple } from '@mui/material/colors';
import Navbar from './Navbar';
import CreatePopUp from './CreatePopUp';

const drawerWidth = 240;

const MainInterface = () => {
  const [isHovered, setIsHovered] = useState(false);
  let [rooms, setRooms] = useState([])

  let addRooms = (room) => {
    setRooms((prev) => {
      return [...prev, room]
    })
    alert("New room added")
    console.log(rooms);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const styles = {
    container: {

      backgroundColor: isHovered ? '#9C27B0' : 'violet',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      margin: "2rem",
      height: '6rem',
      width: "9rem",
      scale:isHovered ? '105%' : '100%',

    }
  };
  const navigationItems = ['Home', 'About', 'Services', 'Contact'];
  const [showModal, setShowModal] = useState(false);
  let handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>

      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ bgcolor: purple[500] }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              My Interface
            </Typography>
            <InputBase
              startAdornment={<SearchIcon fontSize="small" sx={{ mr: 1 }} />}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              sx={{ mr: 2 }}
            />
            <IconButton color="inherit">
              <StarBorder />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />

          <h2 style={{ position: "fixed", top: '2px', left: "10px", fontSize: '2.2rem' }}>Welcome</h2>

          <Box sx={{ overflow: 'auto' }}>
            <List>
              {navigationItems.map((text) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            All Boards
          </Typography>
          <Grid container spacing={3}>
            <div style={{ display: 'flex', justifyContent: 'around',alignItems:"center", gap:"3rem",width:"100%",flexWrap:"wrap"}}>
              <Paper style={styles.container}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} onClick={handleShowModal} sx={{ height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: purple[500] }}>
                <AddIcon fontSize="large" />
                <Typography>Create New</Typography>

              </Paper>
              {rooms?.map((roomName, index) => {
                return (
                  <div>
                    <div key={index} style={{height:'6rem',width:'9rem',backgroundColor:'gray',borderRadius:"5px",margin:'2rem',shadow:"2px"}} >
                    <h2 style={{color:'white', textAlign:'center',fontFamily:'monospace'}}>{roomName}</h2>
                    </div>
                  
                  </div>
                )
              })}
            </div>
            {/* Other board items */}
          </Grid>
        </Box>
      </Box>
      {/* Modal for creating the room */}
      {showModal && <CreatePopUp handleShowModal={handleShowModal} addRooms={addRooms} />}
    </>
  );
};

export default MainInterface;