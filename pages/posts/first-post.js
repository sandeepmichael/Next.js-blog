import Link from "next/link";
import Head from 'next/head'
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>MY PROJECTS</h1>
      <hr />
      <a href='https://iwt-auth.herokuapp.com/'>www.heroku.com</a>
      <p>This is basic mern stack authentication project.

        TECH STACK USED:Reactjs,nodejs,mongodb,jwt(jsonwebtoken)


      </p>
      <hr/>
      <a href='https://secure-brook-86485.herokuapp.com/'>www.heroku.com</a>
      <p>This is the simple personalBlog created with Nodejs and it also have a connection to Mongo Database.so basically it's a full stack application.</p>
      <hr/>
      <a href='https://vigilant-jackson-4c7134.netlify.app/'>www.netlify.com</a>
      <p>This is the fourth project. in this project i used the react.js and also youtube api key to get the results This is same as like as the youtube app. when we search for any video the request will be sent to youtubeAPI and that api will send the respective results.</p>
      <hr/>


    </Layout>)
}