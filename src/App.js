import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions';

const App = props => {
  console.log(props);

  const remove = item => {
    // dispatch an action here to remove an item
    props.store.dispatch(removeFeature(item));
  };

  const add = item => {
    // dipsatch an action here to add an item
    props.store.dispatch(addFeature(item))
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures remove={remove} />
      </div>
      <div className="box">
        <AdditionalFeatures add={add} />
        <Total />
      </div>
    </div>
  );
};

export default App;
