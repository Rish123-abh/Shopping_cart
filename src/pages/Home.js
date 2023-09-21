import { useState,useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
function Home(){
    const API_URL = "https://fakestoreapi.com/products";
    const[loading,setloading]=useState(false);
    const[posts,setposts]=useState([])
    async function fetchdata(){
        setloading(true);

        try {
            const response=await fetch(API_URL);
            const data = await response.json();
            setposts(data);
        } catch (error) {
            console.log("Data not found");
            setposts([]);
        }
        setloading(false);
    }

    useEffect(()=>{
        fetchdata();
    },[])
    return(
        <div>
        {
          loading ? <Spinner />  :
          posts.length > 0 ? 
          (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2  space-y-10 space-x-5 min-h-[80vh] ml-10">
            {
              posts.map( (post) => (
              <Product key = {post.id} post={post}/>
            ) )
            }
          </div>) :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div> 
        }
      </div>
    )
}
export default Home;