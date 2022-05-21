import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoteCard from './components/NoteCard'
import Masonry from '@mui/lab/Masonry';

function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://notes-for-nomi.herokuapp.com/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])

  const handleDelete = async (id) => {
    await fetch('https://notes-for-nomi.herokuapp.com/notes/'+id, {
      method: 'DELETE',
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <Container>
      <Masonry
        columns={{ xs: 1, md: 2, lg: 3 }} spacing={{ xs: 1, md: 2, lg: 3 }}
      >
        { notes.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        )) }
      </Masonry>
    </Container>        
  )
}

export default Notes