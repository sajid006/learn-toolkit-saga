
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getCatsFetch } from './catState';
function App() {
  const cats = useSelector(state => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);
  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Images of different species of cats. Lots of cats for your viewing pleasure.</p>
      <hr />
      <div className="Gallery">
        {cats.map( cat =>
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                width="200"
                height="200" />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
            </div>
        )}
      </div>
      <button>View more cats</button>
    </div>
  );
}

export default App;
