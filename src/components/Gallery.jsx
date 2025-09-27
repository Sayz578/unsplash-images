import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "../context"
import axios from "axios"

const url = `https://api.unsplash.com/search/photos?client_id=p_PHLxFf-E-LLzcKzjnzgv-fsC_3-rJpQxDFmE4FTMI&query=${serchTherm}`
// console.log(url);

const Gallery = () => {
    const {serchTherm} = useGlobalContext()
    const response = useQuery({
      queryKey: ["images", serchTherm],
      queryFn: async() => {
        const result = await axios.get(`${url}&query=${serchTherm}`)
        // console.log(result.data.results);
        return result.data.results
      }
    })
    // console.log(response);
    if (response.isLoading) {
      return(
        <section className="image-container">
          <h4>
            loading...
          </h4>
        </section>
      )
    }
    if (response.isError) {
      return(
        <section className="image-container">
          <h4>
            there are an error...
          </h4>
        </section>
      )
    }
    const resalts = response.data
    // console.log(response.data);
    
    if (resalts.length < 1) {
      return(
        <section className="image-container">
          <h4>
            no resalts found...
          </h4>
        </section>
      )
    }
  return (
    <section className="image-container">
          {resalts.map(item => {
            // console.log(item?.urls?.regular);
            const url = item?.urls?.regular
            return <img src={url} key={item.id} alt={item.alt_description} className="img"/>
          })}
    </section>
  )
}

export default Gallery