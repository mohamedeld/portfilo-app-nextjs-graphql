import {  ALLCATEGORY } from "@/apollo/queries"
import { useQuery } from "@apollo/client"
import Link from "next/link";
import { DotLoader } from "react-spinners";

const Categories = () => {
  const {data,loading,error} = useQuery(ALLCATEGORY);
  if(loading){
    return (
      <DotLoader/>
    )
  }
  if(error){
    console.log(error)
  }

  return (
    <>
     <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Categories</h1>
          </div>
        </div>
      </section>
      <section className="fj-category-list">
        <div className="row">
         {
          data?.allCategory?.length > 0 && data?.allCategory?.map(item=>{
            return (
              <div className="col-md-4" key={item?._id}>
            <div className="fj-category-container">
              <Link className="fj-category subtle-shadow no-border" href={`forum/categories/${item?.id}`}>
                {
                // <div className="category-icon">
                //   <img src="images/pen.png" />
                // </div>
                }
                <div className="category-information">
                  <div className="heading gray-90">
                    {item?.title}
                  </div>
                  <div className="description">
                    {item?.subTitle}
                  </div>
                </div>
              </Link>
            </div>
          </div>
            )
          })
         }
          
          
        </div>
      </section>
    </>
  )
}

export default Categories