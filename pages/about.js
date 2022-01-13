import { gql } from "@apollo/client";
import client from "../apollo-client";
import styles from '../styles/Layout.module.css';

const About = ({monday}) => {
    return (
        <div>
            <h1>Om-sidan</h1>
             <h2>{monday.aboutPage.header}</h2>
            <p>{monday.aboutPage.subHeader}</p>
        </div>
    )
}

export default About

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query test {
        page(id: "cG9zdDoxMg==") {
            aboutPage {
              header
              subHeader
            }
          }
      }
      `,
    });
  
    return {
      props: {
        monday: data.page,
      },
   };
  }


