import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "../context"
import axios from "axios"

const url = "https://api.unsplash.com/search/photos?client_id=p_PHLxFf-E-LLzcKzjnzgv-fsC_3-rJpQxDFmE4FTMI&query=dog"
console.log(url);

const Gallery = () => {
    const {serchTherm} = useGlobalContext()
  return (
    <div>Gallery</div>
  )
}

export default Gallery