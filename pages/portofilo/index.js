import { useCreatePortfolio, useDeletePortfolio, useGetPortfolios, useUpdatePortfolio } from "@/apollo/actions";
import { CREATE_PORTFOLIO, GET_PORTFOLIOS, UPDATE_PORTFOLIO } from "@/apollo/queries";
import { useMutation, useQuery } from "@apollo/client";
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DotLoader } from "react-spinners";



const Portofilo = () => {
  // const [getPortfolios,{loading,data}] = useLazyQuery(GET_PORTFOLIOS);
  // const [portfolios,setPortfolios] = useState([]);
  const {data:dataP,loading,error} = useGetPortfolios();
  
  const [createPortfolio,{data:dataC,loading:createLoading}] = useCreatePortfolio();
  const [updatePortfolio,{loading:updateLoading}]=useUpdatePortfolio();
  const [deletePortfolio] = useDeletePortfolio();
  if(loading || createLoading){
    return (
      <DotLoader/>
    )
  }
  const portfolios = dataP && dataP?.portfolios || [];



  if(error){
    return(
      <p>{error?.message}</p>
    )
  }


  // const graphDeletePort= async (id)=>{
  //   const query = `
  //     mutation DeletePortfolio($id:ID){
  //       deletePortfolio(id:"${id}")
  //     }
  //   `;
  //   const response = await axios.post("http://localhost:4000/graphql",{query}).then(({data})=> console.log(data)).catch(err=> console.log(err))
  // }
  
  return (
    <>
    <div className="container">
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button className="btn btn-primary" >
          <Link href="/portofilo/new">create data</Link>
        </button>
      </section>
      <section className="pb-5">
        <div className="row">
         {portfolios?.length> 0 ? portfolios?.map(item=>{ 
           return (
              <div className="col-md-4" key={item?._id}>
              <div className="card subtle-shadow no-border">
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text fs-2">{item?.description}</p>
                </div>
                <div className="card-footer no-border">
                  <small className="text-muted">Last updated 3 mins ago</small>
                  <Link href={`/portofilo/${item?._id}`}>Go to details</Link>
                </div>
                <div className="d-flex justify-items-center align-items-center gap-4">
                <button className="btn btn-primary" 
               >
                <Link href={`/portofilo/${item?._id}/edit`}>Update</Link>
               </button>
                <button className="btn btn-danger" onClick={()=> deletePortfolio({
                  variables:{
                    id:item._id
                  }
                })}>Delete</button>
                </div>
              </div>
            </div> 
           )}) 
           : <p>Not Items found</p>} 
          
         </div> 
       </section> 
     </div> 
    </>
  )
}

export default Portofilo

