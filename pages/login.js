import { SIGNIN } from '@/apollo/queries';
import { useMutation } from '@apollo/client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

const Login = () => {
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      router.push("/");
    }
  },[])

  const router = useRouter();
  const onSubmit = async (subData)=>{
    try{

      const res=  await signIn("credentials",{
        email:subData.email,
        password:subData.password,
        redirect:false
        });
        if(res?.status === 200){
          toast.success("logined successfully");
          router.push("/");
        }else{
          toast.error("something went wrong check your credentials");
          
          return;
        }
    }catch(error){
      console.log(error)
    }
   
    // reset();
  }
   return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Login Page</h1>
          </div>
        </div>
      </section>
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1 className="page-title">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email" 
                  name="email"
                  {...register("email",{required:true})}
                  
                  />
                  {errors?.email && <span>{errors?.email?.message}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password" name="password"
                  {...register("password",{required:true})}
                  
                  />
                  {errors?.password && <span>{errors?.password?.message}</span>}
              
              </div>
              <button
                type="submit"
                className="btn btn-main bg-blue py-2 ttu">
                  {isSubmitting ? 'Submitting...':'Submit'}
                </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login