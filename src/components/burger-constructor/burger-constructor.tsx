import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIngredientsItemProps } from '../burger-ingredients/ingredient-item/ingredient-item'
import styles from './burger-constructor.module.css'
import ConstructorIngredient from './constructor-ingredient/constructor-ingredient'

interface BurgerConstructorProps {
  items: BurgerIngredientsItemProps[]
}

const BurgerConstructor = ({items} : BurgerConstructorProps) => {

  const buns = items.filter(item => item.type === 'bun')
  const ingredients = items.filter(item => item.type !== 'bun')
  
  const totalPrice = ingredients
    .map(ingredient => ingredient.price)
    .reduce((a, b) => a + b) + buns[0].price*2

  return (
    <section className={styles.burger_constructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={`${buns[0].name} (верх)`}
        price={buns[0].price}
        thumbnail={buns[0].image}
      />
      {ingredients.map((cartItem) => 
        <ConstructorIngredient key={cartItem._id} {...cartItem}/>
      )}
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
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor