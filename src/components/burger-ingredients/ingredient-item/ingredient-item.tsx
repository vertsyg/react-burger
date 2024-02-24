import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './ingredient-item.module.css'
import { useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'

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

const IngredientItem = ({name, price, image}: BurgerIngredientsItemProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      { isModalOpen && <IngredientDetails ingredientInfo={name} handleClose={handleOpen}/>}
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