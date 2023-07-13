import RecipeCard from "./recipe-card"
import styles from "./recipes-list.module.scss"

const RecipesList = ({recipes}) => {

    return( 
        <ul className={styles.container}>
            {recipes && recipes.map(recipe => <RecipeCard recipe={recipe} key={recipe.id}/>)}
        </ul>
    )

}

export default RecipesList 