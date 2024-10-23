import { useEffect, useState } from 'react'
import NotesCards from './NotesCards'
import NoteForm from './NoteForm'
import Button from './Button'
import { GrUpdate } from 'react-icons/gr'
const { VITE_BACKEND_URL: backendUrl } = import.meta.env

export interface INote {
  id?: number
  content: string
}

const Notes = () => {
  const [notes, setNotes] = useState<INote[]>([])

  const fetchNotes = () => {
    fetch(`${backendUrl}/notes`)
      .then((response) => response.json())
      .then((json) => {
        setNotes(json)
      })
  }

  const deleteNote = (id: number) => {
    fetch(`${backendUrl}/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      fetchNotes()
    })
  }

  const addNote = (note: INote) => {
    fetch(`${backendUrl}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then(() => {
      fetchNotes()
    })
  }

  const updateNote = () => fetchNotes()

  useEffect(fetchNotes, [])

  return (
    <>
      <div className="flex items-end gap-4 mb-4">
        <h1 className="text-5xl font-bold">Notes</h1>
        <Button onClickHandler={updateNote}>
          <GrUpdate />
        </Button>
      </div>
      <NotesCards notes={notes} deleteNote={deleteNote} />
      <NoteForm addNote={addNote} />
    </>
  )
}

export default Notes
