import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-item.module.css'
import { useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../../modal/modal'

export interface BurgerIngredientsItemProps {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  __v: number
}

interface IngredientItemProps {
  ingredient: BurgerIngredientsItemProps;
}

const IngredientItem = ({ingredient}: IngredientItemProps) => {
  const {name, price, image} = ingredient
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      { isModalOpen && 
        <Modal title='Детали ингредиента' handleClose={handleOpen}>
          <IngredientDetails ingredientInfo={ingredient}/>
        </Modal>
      }
      <div className={styles.ingredient_item}  onClick={handleOpen}>
        <Counter count={1}/>
        <img src={image} alt={name}/>
        <div className={styles.ingredient_price}>
          {price}
          <CurrencyIcon type={'primary'}/>
        </div>
        <p>{name}</p>
      </div>
    </>
  )
}

export default IngredientItem