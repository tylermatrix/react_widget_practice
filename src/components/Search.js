import React, {useState, UseEffect, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);


  useEffect(() => {
   const search = async () => {
   const {data} =  await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term
      },
    });
    setResults(data.query.search);
   }

   if (term) {
    search();
   }
  
  }, [term]);


  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
          type="text" 
          className="input"
          value={term}
          onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
};

export default Search;
