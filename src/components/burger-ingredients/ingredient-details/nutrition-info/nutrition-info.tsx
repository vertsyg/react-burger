import styles from './nutrition_info.module.css';

interface NutritionInfoProps {
  title: string,
  value: number
}

const NutritionInfo = ({title, value} : NutritionInfoProps) => {
  return (
    <div className={styles.nutrition_info}>
      <p className="text text_type_main-default text_color_inactive">{title}</p>
      <p className="text text_type_digits-default text_color_inactive">{value}</p>
    </div>
  )
}

export default NutritionInfo