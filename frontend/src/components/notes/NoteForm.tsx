import React, { FC, useRef } from 'react'
import Button from './Button'
import { INote } from './Notes'
import { MdSend } from 'react-icons/md'

interface NoteFormProps {
  addNote: (note: INote) => void
}

const NoteForm: FC<NoteFormProps> = ({ addNote }) => {
  const refContent = useRef<HTMLTextAreaElement>(null)

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const content = refContent.current?.value
    if (content) {
      addNote({
        content,
      })
    }
  }

  return (
    <form method="POST" onSubmit={onSubmitHandler} className="w-full">
      <h2 className="font-bold text-2xl mb-2">New note</h2>
      <div className="relative w-full max-w-md">
        <textarea
          className="textarea textarea-bordered textarea-lg w-full min-h-40"
          name="content"
          id="content"
          ref={refContent}
          required
        ></textarea>
        <div className="absolute bottom-0 right-10 z-10 translate-x-1/2 -translate-y-1/2">
          <Button type="submit"><MdSend /></Button>
        </div>
      </div>
    </form>
  )
}

export default NoteForm
