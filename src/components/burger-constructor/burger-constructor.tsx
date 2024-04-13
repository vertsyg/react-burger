import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css';
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient';
import OrderDetails from './order-details/order-details';
import Modal from '../modal/modal';

import { getBurgerConstructorBun, getBurgerConstructorIngredients, getIsAuth, getOrderModalIsOpen} from '../../services/selectors'
import { useDrop } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../types/hooks'
import { addIngredient, clearConstructorIngredients, closeOrderModal, createOrder, openOrderModal, sortIngredients } from '../../services/actions/ingredients'
import { BurgerIngredientsItemProps } from '../burger-ingredients/ingredient-item/ingredient-item'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const BurgerConstructor = () => {
  const isModalOpen = useAppSelector(getOrderModalIsOpen)
  const isAuth = useAppSelector(getIsAuth)
  const navigate = useNavigate()
  const bun = useAppSelector(getBurgerConstructorBun)
  const ingredients = useAppSelector(getBurgerConstructorIngredients)

  const dispatch = useAppDispatch()

  const handleCreateOrder = () => {
    if (!isAuth) {
      navigate('/login')
      return
    }
    dispatch(openOrderModal())
    
    if (bun && ingredients) {
      const allIngredientsId = [bun, bun, ...ingredients]
        .map((ingredient:BurgerIngredientsItemProps) => ingredient._id)
      dispatch(createOrder(allIngredientsId))
    }
    dispatch(clearConstructorIngredients())
  }

  const [, dropTarget] = useDrop({
    accept: 'burgerConstructor',
    drop(ingredient: BurgerIngredientsItemProps) {
      dispatch(addIngredient(ingredient))
    }
  })

  const moveCard = useCallback((dragIndex: number, hoverDragIndex: number) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(dragIndex, 0, newIngredients.splice(hoverDragIndex,1)[0])
    dispatch(sortIngredients(newIngredients))
  }, [dispatch, ingredients])
  
  const totalPrice = useMemo(()=> {
    return ingredients
    .map(ingredient => ingredient.price)
    .reduce((a, b) => a + b, 0) + (bun?.price ?? 0)*2
  }, [ingredients, bun])
    
  return (
    <>
      { isModalOpen && 
        <Modal handleClose={() =>dispatch(closeOrderModal())}>
          <OrderDetails/>
        </Modal>
      }
      <section ref={dropTarget} className={styles.burger_constructor}>
      {
        !bun && ingredients.length === 0 && <div>Перенесите сюда булку и ингредиенты</div>
      }
      {
        bun &&
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${bun.name} (верх)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      }
      <div className={styles.ingredients}>
        {ingredients.map((cartItem, index) => 
          <ConstructorIngredient 
            key={cartItem.uuid} 
            ingredient={cartItem}
            moveCard={moveCard}
            index={index}
          />
        )}
      </div> 
      {
        bun &&
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${bun.name} (низ)`}
          price={bun.price}
          thumbnail={bun.image}
        />
      }
        <div className={styles.order}>
          <div className={styles.order_price}>
            <p className="text text_type_digits-medium">
              {totalPrice}
            </p>
            <CurrencyIcon type={'primary'}/>
          </div>
          <Button 
            disabled={!bun || ingredients.length === 0}
            htmlType="button" 
            type="primary" 
            size="large" 
            onClick={handleCreateOrder}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}

export default BurgerConstructor