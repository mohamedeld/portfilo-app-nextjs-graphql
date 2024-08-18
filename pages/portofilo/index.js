import axios from "axios"

const Portofilo = ({portofilo}) => {
  
  return (
    <div className="container">
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
        <button className="btn btn-primary" onClick={()=>fetchData()}>Fetch Data</button>
      </section>
      <section className="pb-5">
        <div className="row">
          {portofilo.data?.portfolios?.length> 0 ? portofilo.data?.portfolios?.map(item=>{
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
                </div>
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
        portofilo:data
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