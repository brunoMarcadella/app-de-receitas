import { useContext, useEffect, useState } from 'react';
import NavFilter from '../Components/NavFilter';
import { DoneRecipesContainer, Paragraph } from '../styles/StyledDoneRecipes';
import StoreContext from '../Context/StoreContext';
import CardRecipe from '../Components/CardRecipe';

function DoneRecipes() {
  const { filteredDoneRecipes, showByDoneFilter } = useContext(StoreContext);
  const [doneRecipes, setDoneRecipes] = useState([]);

  useEffect(() => {
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes')
    || JSON.stringify([]));
    setDoneRecipes(doneRecipesStorage);
  }, []);

  const ElementDoneRecipes = (
    <DoneRecipesContainer>
      {doneRecipes.map((recipe, index) => (
        <CardRecipe index={ index } key={ index } food={ recipe } page="DoneRecipes" />
      ))}
    </DoneRecipesContainer>
  );

  const FilteredDoneRecipes = (
    <div>
      {filteredDoneRecipes.map((recipe, index) => (
        <CardRecipe index={ index } key={ index } food={ recipe } page="DoneRecipes" />
      ))}
    </div>
  );

  return (
    <main>
      <NavFilter page="DoneRecipes" />
      <div>
        {doneRecipes.length === 0 && <Paragraph>Nenhuma receita feita</Paragraph>}
        {doneRecipes.length > 0 && showByDoneFilter
          ? FilteredDoneRecipes : ElementDoneRecipes}
      </div>
    </main>
  );
}

export default DoneRecipes;
