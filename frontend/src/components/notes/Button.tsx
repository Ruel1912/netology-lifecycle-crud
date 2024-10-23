import { FC, ReactNode } from 'react'

interface ButtonProps {
  children?: ReactNode
  type?: 'button' | 'submit'
  onClickHandler?: () => void
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  onClickHandler,
}) => {
  return (
    <button className="btn btn-circle w-8 h-8 min-h-0" type={type} onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default Button
