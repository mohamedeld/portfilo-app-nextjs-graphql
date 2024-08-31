import {gql} from '@apollo/client'

export const GET_PORTFOLIO = gql`
  query getPortfilo($id: ID){
    portfolio(id: $id){
      _id,
      title,
      company,
      companyWebsite,
      location,
      jobTitle,
      description,
      startDate,
      endDate
    }
  }

`;


export const GET_PORTFOLIOS = gql`
  query getPortfilos{
    portfolios{
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

export const CREATE_PORTFOLIO= gql`
  mutation CreatePortfolio(
    $title:String
    $company:String
    $companyWebsite:String
    $location:String
    $jobTitle:String
    $description:String
    $startDate:String
    $endDate:String
  ){
    createPortfolio(input:{
      title:$title
      company: $company
      companyWebsite: $companyWebsite
      location: $location
      jobTitle: $jobTitle
      description:$description
      startDate: $startDate
      endDate: $endDate
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

export const UPDATE_PORTFOLIO = gql`
    mutation UpdatePortfolio($id: ID){
      updatePortfolio(id: $id,input:{
        title: "Work in meno",
        company: "WhoKnows",
        companyWebsite: "www.google.com",
        location: "meno, Montana",
        jobTitle: "Housekeeping",
        description: "So much responsibility....Overloaaaaaad",
        startDate: "2021-12-12T23:59Z",
      endDate: "2024-12-12T23:59Z",
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

export const DELETE_PORTFOLIO = gql`
  mutation DeletePortfolio($id:ID){
    deletePortfolio(id:$id)
  }

`

export const SIGNUP=gql`
  mutation SignUp(
    $username:String!
    $name:String!
    $avatar:String!
    $email:String!
    $password:String!
    $passwordConfirmation:String!
  ){
    signUp(input:{
      username:$username
      name:$name
      avatar:$avatar
      email:$email
      password:$password
      passwordConfirmation:$passwordConfirmation
    })
  }
`;

export const SIGNIN=gql`
  mutation SignIn(
    $email:String!
    $password:String!
  ){
    signIn(input:{
      email:$email,
      password:$password
    })
  }
`;

export const GET_SIGNLE_USER=gql`
  query GetSingleUser($id:ID){
    getSingleUser(id:$id){
      username
      name
      email
      role
      avatar
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetAllUsers{
    getAllUsers{
      username
      name
      email
      role
      avatar
    }
  }
`;

export const GET_AUTH_USER=gql`
  query GetAuthUser{
    getAuthUser{
      username
      name
      email
      role
      avatar
    }
  }
`;

export const  ALLCATEGORY = gql`
  query AllCategory{
    allCategory{
      title
      subTitle
      slug
    }
  }

`