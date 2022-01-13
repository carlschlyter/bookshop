import { gql } from "@apollo/client";
import client from "../apollo-client";

const SubHeader = (test) => {
    return (
        <div>
            <h3>{test.name}</h3>
        </div>
    )
}


export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query test {
        page(id: "cG9zdDo5") {
          homePage {
            homePageSubheader
          }
        }
      }
      `,
    });
  
    return {
      props: {
        testy: data.page,
      },
   };
  }

  export default SubHeader
