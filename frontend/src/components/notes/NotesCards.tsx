import { FC } from 'react'
import { INote } from './Notes'
import Button from './Button'
import { MdClose } from 'react-icons/md'

interface NotesCardsProps {
  notes: INote[]
  deleteNote: (id: number) => void
}

const NotesCards: FC<NotesCardsProps> = ({ notes = [], deleteNote }) => {
  return (
    <div className="mb-12 flex gap-4 flex-wrap">
      {notes.map((note) => (
        <div key={note.id} className="card bg-slate-100 w-72 shadow-xl relative">
          <div className="card-body">
            <p>{note.content}</p>
            <div className="absolute top-0 right-0 z-10 translate-x-1/2 -translate-y-1/2">
              <Button onClickHandler={() => note.id && deleteNote(note.id)}>
                <MdClose />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotesCards
