import { gql } from "@apollo/client";
import client from "../apollo-client";

const contact = ({tuesday}) => {
    return (
        <div>
            <h1>Kontakt-sidan</h1>
            <h2>{tuesday.contactPage.header}</h2>
            <p>{tuesday.contactPage.subHeader}</p>
        </div>
    )
}

export default contact;

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query test {
        page(id: "cG9zdDoyMw==") {
            contactPage {
              header
              subHeader
            }
          }
      }
      `,
    });
  
    return {
      props: {
        tuesday: data.page,
      },
   };
  }
