import { TIconProps } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils';
import styles from './header-button.module.css';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderButtonProps {
  icon: ({ type }: TIconProps) => ReactNode
  text: string,
  path: string
}

const HeaderButton = ({icon, text, path}: HeaderButtonProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${isActive ? `text_color_primary` : `text_color_inactive`} ${styles.header_button}`
      }
    >
      {({ isActive}) => (
        <>
          {icon({ type: isActive ? 'primary' : 'secondary' })}
          <span className={isActive ? 'active' : ''}>{text}</span>
        </>
      )}
    </NavLink>
  )
}

export default HeaderButton