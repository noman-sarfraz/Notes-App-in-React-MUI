import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Link, AppBar, Toolbar, ThemeProvider, Avatar } from '@mui/material'
import { makeStyles } from '@mui/styles' 
import React from 'react'
import { format } from 'date-fns'
import Noman from './Noman.jpg'

const drawerWidth = '20%'

const styles = {
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    padding: '1%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#f4f4f4'
  },
  appbar: {
    width: `80%`,
    color: 'textSecondary',
    backgroundColor: 'white'
  },
  title: {
    padding: '5%'
  },
  date: {
    flexGrow: 1
  },
  avatar: {
    marginLeft: '1%'
  },
  li: {
    backgroundColor: '#dedede',
    marginBottom: '1%'
    
  }
  
}

const useStyles = makeStyles((theme) => {
  return {
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  
}})

const menuItems = [
  {
    text: 'My Notes',
    icon: <SubjectOutlined color='secondary' />,
    path: '/'
  },
  {
    text: 'Create Note',
    icon: <AddCircleOutlineOutlined color='secondary' />,
    path: '/create'
  }
]

function Layout({ children }) {
  const classes = useStyles()

  return (
    <div style={styles.root}>
      {/* app bar */}
      <AppBar
        style={styles.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography 
            color='textSecondary'
            style={styles.date}
          >
            Today is { format(new Date(), 'do MMMM Y') }
          </Typography> 
          <Typography 
            color='textSecondary'
          >
            Nomi
          </Typography>
          <Avatar src={Noman} style={styles.avatar} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        style={styles.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' style={styles.title}>
            My Notes
          </Typography>
        </div>

        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              component={Link}
              href={item.path}
              style={styles.li}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      <div style={styles.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}

export default Layout