import RecipesList from "./recipes-list"
import styles from "./recipes.module.scss"
import RecipesService from "../../lib/recipes"

const getData = async() => {
    return await RecipesService.findAll();
}



const Recipes = async() => {

    const data = await getData();

    return(

        <main className={styles.container}>

            <header className={styles.header}>
                <h1> Les Recettes </h1>
            </header>


            <RecipesList recipes={data}/>




        </main>
    )
}

export default Recipes