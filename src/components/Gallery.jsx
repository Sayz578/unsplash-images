import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "../context"
import axios from "axios"

const url = "https://api.unsplash.com/search/photos?client_id=p_PHLxFf-E-LLzcKzjnzgv-fsC_3-rJpQxDFmE4FTMI&query=dog"
// console.log(url);

const Gallery = () => {
    const {serchTherm} = useGlobalContext()
    const response = useQuery({
      queryKey: ["images", serchTherm],
      queryFn: async() => {
        const result = await axios.get(`${url}&query=${serchTherm}`)
        // console.log(result.data);
        return result.data
      }
    })
    console.log(response);
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
    const resalts = response.data.resalts
    if (resalts.lenght<1) {
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
          <h4>
            no resalts found...
          </h4>
        </section>
  )
}

export default Gallery