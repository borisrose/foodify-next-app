'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import styles from "./recipe-button.module.scss"
import Link from 'next/link'

const RecipeButton = ({id}) => {


    return(

        <Link className={styles.container} href={`/recipes/${id}`}>

            <FontAwesomeIcon icon={faInfoCircle} className={styles.icon}/>

        </Link>
    )
}







export default RecipeButton