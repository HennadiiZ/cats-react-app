// import classes from './App.module.scss';
// import { useContext } from 'react';
// import Slider from './components/Slider/Slider';
// import Layout from "./UI/layout/Layout";
// import DataContext from './_store/data-context'; 


// // const DATA = [
// //   {id: '9o', url: 'https://cdn2.thecatapi.com/images/9o.gif', width: 179, height: 176},
// //   {id: '405', url: 'https://cdn2.thecatapi.com/images/405.jpg', width: 1095, height: 730},
// //   {id: '4gp', url: 'https://cdn2.thecatapi.com/images/4gp.gif', width: 350, height: 254},
// //   {id: '73t', url: 'https://cdn2.thecatapi.com/images/73t.jpg', width: 500, height: 375},
// //   {id: '90b', url: 'https://cdn2.thecatapi.com/images/90b.jpg', width: 450, height: 398},
// //   {id: '98i', url: 'https://cdn2.thecatapi.com/images/98i.jpg', width: 480, height: 639},
// //   {id: 'bm5', url: 'https://cdn2.thecatapi.com/images/bm5.jpg', width: 1024, height: 768},
// //   {id: 'cb3', url: 'https://cdn2.thecatapi.com/images/cb3.jpg', width: 483, height: 640},
// //   {id: 'MTUwNzA3Mw', url: 'https://cdn2.thecatapi.com/images/MTUwNzA3Mw.png', width: 500, height: 741},
// //   {id: '6vPgXY9tb', url: 'https://cdn2.thecatapi.com/images/6vPgXY9tb.jpg', width: 750, height: 936},
// // ]

// function App() {
//   // const [catCards, setCatCards] = useState(DATA);
//   const catsDataCtx = useContext(DataContext); 
//   console.log(catsDataCtx.catsData);

//   return (
//     <Layout>
//       <main>
//         <Slider cards={catsDataCtx.catsData} />
//       </main>
//     </Layout>
//   );
// }

// export default App;



// import { useSelector } from 'react-redux';
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
