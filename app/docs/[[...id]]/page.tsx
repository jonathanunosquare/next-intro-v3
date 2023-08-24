import styles from './style.module.css'

const DocsIdPage = ({ params }) => {
  const { id } = params
  return <div className={styles.title}>Docs ID Page: {id}</div>
}

export default DocsIdPage
