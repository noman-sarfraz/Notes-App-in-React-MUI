import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { TextField } from '@mui/material';
import './App.css';

const styles = {
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
}


const Create = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(null)
    const [detailsError, setdetailsError] = useState(null)
    const [category, setCategory] = useState('todos')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setdetailsError(false)
        
        if (title === '') {
            setTitleError(true)
        }

        if (details === '') {
            setdetailsError(true)
        }

        if(title && details) {
            fetch('https://notes-for-nomi.herokuapp.com/notes', {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({title, details, category})
            }).then(() => navigate('/'))
        }
    }

  return (
    <Container>

     {/* Typography */}
     <Typography
        variant="h5"
        component="h5"
        color="textSecondary"
        align="left"
        gutterBottom
    >
        Make a new note
    </Typography>

    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
            onChange={(e) => setTitle(e.target.value)}
            label='Note title'
            style={styles.field}
            variant='outlined'
            color='secondary'
            fullWidth
            required
            error={titleError}
        />
        <TextField
            onChange={(e) => setDetails(e.target.value)}
            label='Details'
            style={styles.field}
            variant='outlined'
            color='secondary'
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
        />
        
        <FormControl style={styles.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value='money' control={<Radio />} label='Money' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
            </RadioGroup>
        </FormControl>
        
        <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={ <KeyboardArrowRightOutlinedIcon /> }
        >
            Submit
        </Button>
    </form>
    
    </Container>
  );
}

export default Create;
