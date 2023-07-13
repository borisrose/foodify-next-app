// classe ou objet anonyme c'est l'objet par défault donc on l'important ne le placer PAS à l'intérieur de { }
export default {

    // C'est une sorte d'Active Record en ce sens où c'est un fichier consacré aux requêtes concernant les recettes 
    // et ici c'est un objet anonyme ou une classe anonyme qui gère uniquement les méthodes des recettes
    async findOne(id){

        try {

            // je récupère ma ressource en format js grâce au parsing opéré par la méthode json()
            const recipe = await(await fetch(`http://localhost:3300/api/v1/recipes/${id}`)).json();

              // gestion du 404
            if(!recipe){

                console.log('404 aucune recette ayant cet id')
                return // il met fin à l'exécution de la fonction donc on ne peut pas passer au return suivant.
            }
            // else implicite

            return recipe

        }
        catch(err){

            // gestion du problème technique 500 Erreur Serveur
            console.trace(err)

        }

    },

    
    async findAll(){

        try {

             // je récupère mes ressources en format js grâce au parsing opéré par la méthode json()
            const recipes = await(await fetch(`http://localhost:3300/api/v1/recipes`)).json();

            console.log('recipes: ' + recipes)

            // gestion du 404
            if(!recipes){

                console.log('404 aucune recette trouvée')
                return // il met fin à l'exécution de la fonction donc on ne peut pas passer au return suivant.
            }
            // else implicite

            return recipes
        
        }
        catch(err){
            // gestion du problème technique liaison avec le serveur défaillante
            //500
            console.trace(err)
        }
       

    }


}