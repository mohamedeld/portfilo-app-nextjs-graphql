import { GET_PORTFOLIO } from "@/apollo/queries";
import withApollo from "@/hoc/withApollo";
import { formatDate } from "@/utils/functions";
import { useQuery } from "@apollo/react-hooks";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DotLoader } from "react-spinners";

const PortofiloDetail = () => {
  const router = useRouter();
  const [portfolioId, setPortfolioId] = useState(null);

  useEffect(() => {
    // Update portfolioId state when router.query.id changes
    if (router.query.id) {
      setPortfolioId(router.query.id);
    }
  }, [router.query.id]);
    const {loading,error,data} = useQuery(GET_PORTFOLIO,{variables:{
      id:portfolioId
    },
    skip:!portfolioId
  });

  if(loading) {
    return (
      <DotLoader />
    )
  }
  if(error){
    toast.error(error?.message)
  }
 
  if(data){
    console.log("data", data);  
  }


  return (
    <>
    
      {data? (
        <div className="portfolio-detail">
        <div className="container">

          <div className="jumbotron">
            <h1 className="display-3">{data?.portfolio?.title}</h1>
            <p className="lead">{data?.portfolio?.jobTitle}</p>
            <p>
              <a className="btn btn-lg btn-success" href={data?.portfolio?.companyWebsite} role="button">
                See Company</a>
              </p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4 className="title">Location</h4>
              <p className="text">{data?.portfolio?.location}</p>

              <h4 className="title">Start Date</h4>
              <p className="text">{formatDate(data?.portfolio?.startDate)}</p>
            </div>

            <div className="col-lg-6">
              {/* TODO: days later... */}
              <h4 className="title">Days</h4>
              <p className="text">{data?.portfolio?.daysOfExperience}</p>

              <h4 className="title">End Date</h4>
              <p className="text">{(data?.portfolio?.endDate && formatDate(data?.portfolio?.endDate)) || 'Present'}</p>
            </div>
            <div className="col-md-12">
              <hr />
              <h4 className="title">Description</h4>
              <p>{data?.portfolio?.description}</p>
              </div>
          </div>
        </div>
      </div>
      )
      :(
        <DotLoader/>
      )}
   
    </> 
  )
}

export default PortofiloDetail;
