import { useGlobalContext } from "../context"


const SerchForm = () => {
    const {setSerchTherm} = useGlobalContext()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const serchValue = e.target.elements.search.value
        if(!serchValue) return
        setSerchTherm(serchValue)
        console.log(serchValue);
        
    }
  return (
    <div>
        <h1 className="title">unSplash Images</h1>
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" name="search" className="form-input search-input" placeholder="add text"/>
            <button className="btn" type="submit">search</button>
        </form>
    </div>
  )
}

export default SerchForm