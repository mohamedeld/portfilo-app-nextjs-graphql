const express = require("express");
const next = require("next");
require("dotenv/config");
const port = parseInt(process.env.PORT,10) || 3000
const {buildSchema} = require("graphql");
const {graphqlHTTP} = require("express-graphql");
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const data = {
  portfolio:[
    {
      _id:"adsf21",
      title:"Job in USB",
      content:"welcome in programming",
      jobTitle:"programmer",
      daysOfExperience:12,
      isCurrentEmployed:false
    },
    {
      _id:"ads545f21",
      title:"Job in USB",
      content:"welcome in programming",
      jobTitle:"programmer",
      daysOfExperience:12,
      isCurrentEmployed:false
    },
    {
      _id:"ads333f21",
      title:"Job in USB",
      content:"welcome in programming",
      jobTitle:"programmer",
      daysOfExperience:12,
      isCurrentEmployed:false
    },
    {
      _id:"adsse1f21",
      title:"Job in USB",
      content:"welcome in programming",
      jobTitle:"programmer",
      daysOfExperience:12,
      isCurrentEmployed:false
    },
    {
      _id:"adssdff21",
      title:"Job in USB",
      content:"welcome in programming",
      jobTitle:"programmer",
      daysOfExperience:12,
      isCurrentEmployed:false
    },
  ]
}


app.prepare().then(()=>{
  const server = express();

  const schema = buildSchema(`
      type Query{
        hello:String
        portfolio:{
          _id:ID
          title:String
          content:String
          jobTitle:String
          daysOfExperience:Int
          isCurrentEmployed:Boolean
        }
      }
    `);
    const root ={
      hello:()=> "welcome",
      portfolio:()=>{
        return data.portfolio[0]
      }
    }
    server.use('/graphql',graphqlHTTP({
      schema,
      rootValue:root,
      graphiql:true
    }))
  server.all("*",(req,res)=>{
    return handle(req,res);
  });

  server.listen(port,(err)=>{
    if(err){
      throw err;
    }
    console.log(`Server running on port ${port}`)
  })
})