import Slider from './components/Slider/Slider';
import Layout from "./UI/layout/Layout";
import classes from './App.module.scss';
import React, { useEffect } from 'react';
import { fetchCatsList } from './_store/data-context';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const catsData = useSelector((state) => state.catsData);
  // console.log(catsData);

  const cats = useSelector((state) => state.cats);
  const dispatch = useDispatch();
  // console.log(cats)

  useEffect(() => {
    dispatch(fetchCatsList());
  }, [dispatch]);

  return (
    <Layout>
      <main className={classes.main}>
        <Slider cards={cats} />
      </main>
    </Layout>
  );
}

export default App;
