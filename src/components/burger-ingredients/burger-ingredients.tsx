import { useRef, useState } from 'react'
import styles from './burger-ingredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientGroup from './ingredients-group/ingredients-group'
import { groupIngredientsByType } from '../../utils/groupIngredientsByType'
import Modal from '../modal/modal'
import IngredientDetails from './ingredient-details/ingredient-details'
import { closeIngredientModal } from '../../services/actions/ingredients'
import { getBurgerIngredients, getIsModalOpen, getSelectedIngredient } from '../../services/selectors'
import { useAppDispatch, useAppSelector } from '../../types/hooks'

const BurgerIngredients = () => {

  const [current, setCurrent] = useState('bun')
  
  const dispatch = useAppDispatch()
  const items = useAppSelector(getBurgerIngredients)
  const isModalOpen = useAppSelector(getIsModalOpen)
  const selectedIngredient = useAppSelector(getSelectedIngredient)
  
  const tabsRef = useRef<HTMLDivElement>(null)
  const bunRef = useRef<HTMLDivElement>(null)
  const sauceRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const tabsArr = [
    {
      value: 'bun',
      text: 'Булки',
      ref: bunRef
    }, {
      value: 'sauce',
      text: 'Соусы',
      ref: sauceRef
    }, {
      value: 'main', 
      text: 'Начинки',
      ref: mainRef
    }
  ] 

  const closeModal = () => {
    dispatch(closeIngredientModal())
  }

  const handleTabClick = (tabValue: string) => {
    setCurrent(tabValue)
    tabsArr.find(tab => tabValue === tab.value)?.ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleIngredientsScroll = () => {
    if (!tabsRef.current) {
      return; 
    }
    
    const tabsTop = tabsRef.current.getBoundingClientRect().top;
    let minValue = Infinity; 
    let closestValue;
  
    for (let tab of tabsArr) {
      if (tab.ref?.current) {
        const delta = Math.abs(tabsTop - tab.ref.current.getBoundingClientRect().top);
        if (delta < minValue) {
          minValue = delta;
          closestValue = tab.value;

          setCurrent(closestValue);
        }
      }
    } 
  };

  return (
    <>
      { isModalOpen && selectedIngredient &&
        <Modal title='Детали ингредиента' handleClose={closeModal}>
          <IngredientDetails/>
        </Modal>
      }
      <section className={styles.burger_ingredients}>
        <h2 className="text text_type_main-large">Соберите бургер</h2>
        <div className={styles.ingredients_tabs}>
          {
            tabsArr.map(({value,text}) => {
              return <Tab
                value={value}
                active={current === value}
                onClick={handleTabClick}
                children={text}
                key={value}
              />
            })
          }
        </div>
        <div 
          className={`${styles.ingredient_groups} custom-scroll`}
          ref={tabsRef}
          onScroll={handleIngredientsScroll}
        >
          <IngredientGroup 
            title='Булки' 
            items={groupIngredientsByType(items, 'bun')}
            ref={bunRef}
          />
          <IngredientGroup 
            title='Соусы' 
            items={groupIngredientsByType(items, 'sauce')}
            ref={sauceRef}
          />
          <IngredientGroup 
            title='Начинки' 
            items={groupIngredientsByType(items, 'main')}
            ref={mainRef}
          />
        </div>
      </section>
    </>
  )
}

export default BurgerIngredients