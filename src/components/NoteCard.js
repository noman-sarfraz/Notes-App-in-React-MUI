import { DeleteOutlined } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import { blue, green, pink, yellow } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import React from 'react'

const styles = {
  avatar: (note) => {
    if (note.category === 'work') {
      return {backgroundColor: yellow[700]}
    }
    if (note.category === 'money') {
      return {backgroundColor: green[500]}
    }
    if (note.category === 'todos') {
      return {backgroundColor: pink[500]}
    }
    if (note.category === 'reminders') {
      return {backgroundColor: blue[500]}
    }
}}

function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader 
          avatar={
            <Avatar style={styles.avatar(note)}>
              { note.category[0].toUpperCase() }
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard