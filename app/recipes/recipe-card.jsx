import RecipeButton from "./recipe-button";
import styles from "./recipe-card.module.scss"

const RecipeCard = ({ recipe }) => {


    return(

        <article className={styles.container}>


            <div className={styles.image} aria-label="conteneur de l'image de la recette">

                <img src={recipe.url} alt="image de la recette"/> 
                <RecipeButton id={recipe.id}/>

            </div>



        </article>

    )


}

export default RecipeCard;