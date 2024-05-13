import {useState} from 'react'
export default function Form({getMovie}){
    const [searchValue, setSearchValue] = useState("")
    // The component must return some JSX
    function handleChange(e){
        setSearchValue(e.target.value)
    }
    function handleClick(e){
        e.preventDefault();
        getMovie(searchValue)
    }
    return     (
    <div>
    <form>
      <input type="text" onChange={handleChange} />
      <input type="submit" value="submit" onClick={handleClick}/>
    </form>
  </div>)
  };