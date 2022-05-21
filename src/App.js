import React from "react"
import Notes from './Notes';
import Create from './Create'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from '@mui/material/colors';
import './App.css';
import Layout from "./components/Layout";

const theme = createTheme({
  palette: {
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Notes/>} />
            <Route path="/create" element={<Create/>} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;