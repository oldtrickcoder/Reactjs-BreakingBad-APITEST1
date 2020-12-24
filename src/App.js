import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/header'
import Search from './components/ui/search'
import CharacterGrid from './components/characters/charactergrid'
import './App.css';


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, getQuery] = useState('')
  useEffect(()=>{
    const fetchItems = async()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)

    }
    fetchItems();
  }, [query])





  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=> getQuery(q)}/> 
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
