import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure to import the CSS for the DatePicker
import { CREATE_PORTFOLIO, GET_PORTFOLIO } from "@/apollo/queries";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { DotLoader } from "react-spinners";
import { client } from "@/pages/_app";

const EditProfolioPage = () => {
  const router = useRouter();
  const { register,handleSubmit,formState:{errors,isSubmitting}, control } = useForm();
  const id = router?.query?.id;

  const {data,loading,error} = useQuery(GET_PORTFOLIO,{
    variables:{
      id:id
    }
  });
  if(loading){
    return(
      <DotLoader/>
    )
  }
  if(error){
    console.log(error)
  }
  async function onSubmit(values) {
    try{
      const {data} = client.mutate({
        mutation:CREATE_PORTFOLIO,
        variables:{
          title:values?.title,
          company: values?.company,
          companyWebsite: values?.companyWebsite,
          location: values?.location,
          jobTitle: values?.jobTitle,
          description:values?.description,
          startDate: values?.startDate,
          endDate: values?.endDate,
        }
      });
      toast.success("added successfully");
      router.push("/portofilo")
    }catch(error){
      console.log(error);
      toast.error(error?.message)
    }
  }

  return ( 
    <div className="bwm-form">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1 className="page-title">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                {...register("title")}
                value={data?.portfolio?.title}
                type="text"
                className="form-control"
                id="title"
              />
              {errors.title && <p className="error">{errors.title.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                {...register("company")}
                value={data?.portfolio?.company}
                type="text"
                className="form-control"
                id="company"
              />
              {errors.company && <p className="error">{errors.company.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                {...register("location")}
                value={data?.portfolio?.location}
                type="text"
                className="form-control"
                id="location"
              />
              {errors.location && <p className="error">{errors.location.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                {...register("jobTitle")}
                value={data?.portfolio?.jobTitle}
                type="text"
                className="form-control"
                id="jobTitle"
              />
              {errors.jobTitle && <p className="error">{errors.jobTitle.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description")}
                value={data?.portfolio?.description}
                rows="5"
                className="form-control"
                id="description"
              />
              {errors.description && <p className="error">{errors.description.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="startDate">Start Date</label>
              <Controller
                control={control}
                name="startDate"
                value={data?.portfolio?.startDate}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => field.onChange(date)}
                    className="form-control"
                  />
                )}
              />
              {errors.startDate && <p className="error">{errors.startDate.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="endDate">End Date</label>
              <Controller
                control={control}
                name="endDate"
                value={data?.portfolio?.endDate}
                render={({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => field.onChange(date)}
                    className="form-control"
                  />
                )}
              />
              {errors.endDate && <p className="error">{errors.endDate.message}</p>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfolioPage;