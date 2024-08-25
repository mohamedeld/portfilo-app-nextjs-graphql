import { SIGNUP } from "@/apollo/queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";

const Register = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const router = useRouter();
  const [signUp,{data,error,loading,reset}] = useMutation(SIGNUP);
  const onSubmit = async (data) => {
    try{
      const subData = {
        username: data?.username,
        name: data?.name,
        email: data?.email,
        password: data?.password,
        passwordConfirmation: data?.passwordConfirmation,
        avatar: data?.avatar,
      }
      await signUp({
        variables:subData
      })
      toast.success("signed up successfully")
      isUserExist();
      reset({
        username:'',
        name:'',
        email:'',
        password: '',
        passwordConfirmation: '',
        avatar: '',
      });
      
    }catch(error){
      console.log(error?.message);
      toast.error(error?.message);
    }
  }
  const isUserExist = ()=>{
     if(data?.signUp){
        router.push("/login")
    } 
  }
  return (
    <>

      <div className="bwm-form mt-5">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Register</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="username">User name</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="username"
                  {...register("username", {
                    required: true
                  })}
                />
                {errors?.username && <p>{errors?.username?.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"

                  className="form-control"
                  id="name" {...register("name", {
                    required: true
                  })}
                />
                {errors?.name && <p>{errors?.name?.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="text"
                  name="avatar"

                  className="form-control"
                  id="avatar" {...register("avatar", {
                    required: true
                  })}
                />
                {errors?.avatar && <p>{errors?.avatar?.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"

                  className="form-control"
                  id="email" {...register("email", {
                    required: true
                  })}
                />
                {errors?.email && <p>{errors?.email?.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password" {...register("password", {
                    required: true
                  })}
                />
                {errors?.password && <p>{errors?.password?.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirmation">PasswordConfirmation</label>
                <input
                  type="password"
                  name="passwordConfirmation"
                  className="form-control"
                  id="passwordConfirmation"{...register("passwordConfirmation", {
                    required: true
                  })}
                />
                {errors?.passwordConfirmation && <p>{errors?.passwordConfirmation?.message}</p>}
              </div>
              <button
                type="submit"
                className="btn btn-main bg-blue py-2 ttu">{isSubmitting ? 'Submitting...':'Submit'}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register