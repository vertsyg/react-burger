import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredient-item.module.css'
import { openIngredientModal } from '../../../services/actions/ingredients';
import { useDrag } from 'react-dnd';
import { getBurgerConstructorBun, getBurgerConstructorIngredients } from '../../../services/selectors';
import { getCount } from '../../../utils/getCount';
import { useAppDispatch, useAppSelector } from '../../../types/hooks';

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
  __v: number,
  uuid?: string
}

interface IngredientItemProps {
  ingredient: BurgerIngredientsItemProps;
}

const IngredientItem = ({ingredient}: IngredientItemProps) => {
  const {name, price, image, _id} = ingredient
  const dispatch = useAppDispatch()
  const ingredientItems = useAppSelector(getBurgerConstructorIngredients)
  const bunItem = useAppSelector(getBurgerConstructorBun)
  const [, dragRef] = useDrag({
    type: 'burgerConstructor',
    item: ingredient
  })

  const openIngredientsModal = () => {
    dispatch(openIngredientModal(ingredient))
  }

  const allIngredients = bunItem ? [bunItem, ...ingredientItems] : ingredientItems
  const count = getCount(allIngredients, _id)

  return (
    <div 
      className={styles.ingredient_item} 
      onClick={openIngredientsModal}
      ref = {dragRef}
    > 
      {count !== 0 ? <Counter count={count}/> : ''}
      <img src={image} alt={name}/>
      <div className={styles.ingredient_price}>
        {price}
        <CurrencyIcon type={'primary'}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default IngredientItem