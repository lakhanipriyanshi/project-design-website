// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import { Link } from 'react-router-dom';
// import React,{useState,createContext} from 'react';
// export const CounterContext = createContext();
// export const search = createContext()
// function App() {
//   const [search, setSearch] = useState([]);
//   const getSearch = (searchTerm) => {
//     fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setSearch(res.products);
//       });
//     };
//   return (
//     <>
//     <CounterContext.Provider value={getSearch}>
//          <Header/>
//          <div className="card-container d-flex flex-wrap">
//           {search?.map((res) => {
//             return (
//               <div
//                 className="card"
//                 style={{ width: '20%', margin: '30px', marginLeft: '45px' }}
//                 key={res.id}
//               >
//                 <img
//                   width="200px"
//                   height="190px"
//                   style={{
//                     borderTopLeftRadius: '10px',
//                     borderTopRightRadius: '10px',
//                     margin: 0,
//                     padding: 0,
//                   }}
//                   className="card-img-top"
//                   src={res.thumbnail}
//                   alt=""
//                 />
//                 <div className="card2-body">
//                   <h1 className="card-title">{res.title.substring(0, 18)}</h1>

//                   <p className="card-price">${res.price}</p>
//                   <Link to={`/product/${res.id}`} className="btn btn-primary">
//                     View Product
//                   </Link>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//          </CounterContext.Provider>
//     </>
//   );
// }

// export default App;
import './App.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import React,{useState,createContext} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';


 
export const CounterContext = createContext();
export const SearchContext = createContext();

function App() {
  const dispatch=useDispatch()
  const [searchResults, setSearchResults] = useState([]);

  const getSearch = (searchTerm) => {
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSearchResults(res.products);
      });
  };

  return (
    <>
      {/* <CounterContext.Provider value={getSearch}>
        <Header />
        <div className="card-container d-flex flex-wrap">
          {searchResults?.map((res) => {
            return (
              <div
                className="card"
                style={{ width: '20%', margin: '30px', marginLeft: '45px' }}
                key={res.id}
              >
                <img
                  width="200px"
                  height="190px"
                  style={{
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px',
                    margin: 0,
                    padding: 0,
                  }}
                  className="card-img-top"
                  src={res.thumbnail}
                  alt=""
                />
                <div className="card2-body">
                  <h1 className="card-title">{res.title.substring(0, 18)}</h1>

                  <p className="card-price">${res.price}</p>
                  <Link to={`/product/${res.id}`} className="btn btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
       
  */}

    {/* </CounterContext.Provider> */}
    <div className="App">
      {/* <Header/> */}
      <button onClick={()=>{
        dispatch({type:'DEC'})
      }}>
        DECRMENT
      </button>
      <button onClick={()=>{
        dispatch({type:'INC'})
      }}>
        INCRMENT
      </button>
      
    </div>
       </>
  );
}

export default App;
