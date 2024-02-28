import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils'
import styles from './header-button.module.css'
import { ReactNode } from 'react'

interface HeaderButtonProps {
  icon: ({ type }: TIconProps) => ReactNode
  text: string,
  isActive: boolean
}

const HeaderButton = ({icon, text, isActive}: HeaderButtonProps) => {
  return (
    <a href='/' className={`${isActive ? 'text_color_primary' : 'text_color_inactive'} ${styles.header_button}`}>
      {icon({ type: isActive ? 'primary' : 'secondary' })}
      <span>{text}</span>
    </a>
  )
}

export default HeaderButton