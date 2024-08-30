import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Make sure to import the CSS for the DatePicker

const NewProfolioPage = () => {
  const { register,handleSubmit, formState: { errors, isSubmitting }, control } = useForm();

  async function onSubmit(data) {
    console.log("data", data);
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

export default NewProfolioPage;