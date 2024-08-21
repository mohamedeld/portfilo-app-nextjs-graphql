import axios from "axios"
import Link from "next/link"
import { useState } from "react";

const Portofilo = ({portofilo}) => {
  console.log(portofilo)
  const [portofilos,setPortofilos] = useState(portofilo);
  async function createData(){
    const query = `
      mutation CreatePortfolio{
        createPortfolio(input:{
        title: "Work in Mansoura",
        company: "WhoKnows",
        companyWebsite: "www.google.com",
        location: "Mansoura, Montana",
        jobTitle: "Housekeeping",
        description: "So much responsibility....Overloaaaaaad",
        startDate: "01/01/2020",
        endDate: "01/01/2021",
      }){
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        startDate
        endDate
        }
      }
    `;
    const response = await axios.post("http://localhost:4000/graphql",{query}).then(({data})=> setPortofilos(prev=> [...prev,data?.data?.createPortfolio])).catch(err=> console.log(err));
  }
  async function updatedPortofiloData(id){
    const query = `
      mutation UpdatedPortfolio{
        updatePortfolio(id:"${id}",input:{
          title: "Work in meno",
          company: "WhoKnows",
          companyWebsite: "www.google.com",
          location: "meno, Montana",
          jobTitle: "Housekeeping",
          description: "So much responsibility....Overloaaaaaad",
          startDate: "01/01/2020",
          endDate: "01/01/2021",
        }){
          _id
          title
          company
          companyWebsite
          location
          jobTitle
          description
          startDate
          endDate
        }
      }
    `;
    const response = await axios.post("http://localhost:4000/graphql",{query}).then(({data})=> {
     
      const updatedPortfolio = data?.data?.updatePortfolio;
      const index = portofilos?.findIndex(p=> p?._id === id);
      
      const newPortfolios = portofilos?.slice();
     
      newPortfolios[index] = updatedPortfolio;
      setPortofilos(newPortfolios)
    }).catch(err=> console.log(err));
  }
  return (
    <div className="container">
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button className="btn btn-primary" onClick={()=>createData()}>create data</button>
      </section>
      <section className="pb-5">
        <div className="row">
          {portofilos?.length> 0 ? portofilos?.map(item=>{
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
                <button className="btn btn-primary" onClick={()=> updatedPortofiloData(item?._id)}>Update</button>
              </div>
            </div>
            )})
            : <p>Not Items found</p>}
          
        </div>
      </section>
    </div>
  )
}

export default Portofilo

export async function getServerSideProps(){
  try{
    const query = `
    query Portfolios{
      portfolios{
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
      }
    }
    `;
    const {data}= await axios.post('http://localhost:4000/graphql',{query});
    return {
      props:{
        portofilo:data?.data?.portfolios
      }
    }
  }catch(error){
    console.log(error);
    return {
      props: {
        error: "Failed to fetch portfolios"
      }
    };
  }
}