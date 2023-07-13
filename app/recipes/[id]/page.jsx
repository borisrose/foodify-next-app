import styles from "./recipe.module.scss"
// tu gères le module scss qui régit le style de ce composant donc tu l'importes pour que ce composant l'utilise
import RecipesService from "../../../lib/recipes"

// définition d'une petite fonction qui fait appel à mon service de recettes
const getData = async(id) => {

    const numericId = Number(id)
    return await RecipesService.findOne(numericId)

}

// il s'agit d'un composant tu vas pouvoir l'utiliser où tu veux
const Recipe = async({params}) => {

    console.log('params', params)

    let recipe = await getData(params.id)

    console.log('recipe', recipe)
    return(
        <main className={styles.container}>

            <article className={styles.card}>
                            <div className={styles.image}>
                                { recipe && <img src={recipe.url} alt="image de la recette" />} 
                            </div> 
                            <div className={styles.description}>
                            {recipe && <p> {recipe.description} </p>}
                            </div>
            </article>

        </main>
     
        
    )

}

export default Recipe