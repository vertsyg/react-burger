import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredientsItemProps } from '../burger-ingredients/ingredient-item/ingredient-item'
import styles from './burger-constructor.module.css'
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient'
import OrderDetails from './order-details/order-details'
import Modal from '../modal/modal'
import { useModal } from '../../hooks/useModal'

interface BurgerConstructorProps {
  items: BurgerIngredientsItemProps[]
}

const BurgerConstructor = ({items} : BurgerConstructorProps) => {
  const { isModalOpen, openModal, closeModal } = useModal()

  const buns = items.filter(item => item.type === 'bun')
  const ingredients = items.filter(item => item.type !== 'bun')
  
  const totalPrice = ingredients
    .map(ingredient => ingredient.price)
    .reduce((a, b) => a + b) + buns[0].price*2

  return (
    <>
      { isModalOpen && 
        <Modal handleClose={closeModal}>
          <OrderDetails/>
        </Modal>
      }
      <section className={styles.burger_constructor}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${buns[0].name} (верх)`}
          price={buns[0].price}
          thumbnail={buns[0].image}
        />
        <div className={styles.ingredients}>
          {ingredients.map((cartItem) => 
            <ConstructorIngredient key={cartItem._id} {...cartItem}/>
          )}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${buns[0].name} (низ)`}
          price={buns[0].price}
          thumbnail={buns[0].image}
        />
        <div className={styles.order}>
          <div className={styles.order_price}>
            <p className="text text_type_digits-medium">
              {totalPrice}
            </p>
            <CurrencyIcon type={'primary'}/>
          </div>
          <Button htmlType="button" type="primary" size="large" onClick={openModal}>
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  )
}

export default BurgerConstructor