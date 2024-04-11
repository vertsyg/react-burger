import styles from './not-found-page.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.not_found}>
      <span className={styles.emoji}>(ಠ_ಠ)</span>
      <h2>Страница не найдена</h2>
    </div>
  )
}