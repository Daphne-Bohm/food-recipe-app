# Food recipe app

Dit is mijn tweede React app. In deze app heb ik gebruik gemaakt van de https://www.edamam.com/ API. De user kan recepten zoeken.

## Wat heb ik hiervan geleerd?

1. Ik heb useEffect Hook geleerd. Alles wat in deze function staat wordt, wordt uitgevoerd wanneer de applicatie renders (opnieuw wordt weergegeven).
useEffect(() =>{
    getRecipes();
}, [query]);
In dit geval wordt de function getRecipes() uitgevoerd wanneer een query/zoekopdracht wordt gedaan.

2. Ik heb geleerd hoe ik fetch api in React kan gebruiken.

3. Omdat ik gebruik heb gemaakt van een API key, heb ik geleerd hoe ik deze API key kan veilig stellen door middel van .env.
   In App.js:  import 'dotenv/config';
               const API_KEY = process.env.REACT_APP_API_KEY;
               const API_ID = process.env.REACT_APP_API_ID;
   .env file:  REACT_APP_API_ID = "..."
               REACT_APP_API_KEY = "..."
   .gitignore: .env

4. Ik heb geleerd hoe ik een css module kan maken: recipe.module.css. In de Recipe.js nog importeren import style from './recipe.module.css'; className={style.recipe}
   Om toegang te hebben tot die module style. gebruiken en recipe is in dit geval de classname.
   
5. Ik heb geoefend met state en props.

