import { gql } from "@apollo/client";
import client from "../apollo-client";
import HeaderSection from "../components/Other/HeaderSection";
import InfoSection from "../components/Other/InfoSection";


const other = ({wednesday}) => {

// console.log({wednesday})

    return (

        
        <div>
            {
            wednesday.map(day => {
                // console.log({day})
                const typeName = day.__typename;
                // console.log({typeName})
                switch (typeName) {
                    case 'Page_Otherpage_Content_HeaderSection':
                        return (
                            <div key={wednesday.id}{...wednesday}> 
                              <HeaderSection />
                                <h1 key={day.id} >{day.header}</h1>     
                                <h2 key={day.id}> {day.subHeader}</h2>
                            </div>  
                        )  
                    case
                    'Page_Otherpage_Content_InfoSection':
                        return (
                            <div key={wednesday.id}{...wednesday}>
                              <InfoSection />
                                <h1 key={day.id} >{day.infoHeader}</h1>
                            
                                <h2 key={day.id}> {day.infoSubHeader}</h2>
                           </div> 
                        )

                    default: <p>No such layout</p>

                }

            }
            )}
        </div>
    )
}

export default other;

export async function getStaticProps() {
    const { data } = await client.query({
      query: gql`
      query test {
        page(id: "cG9zdDo3NA==") {
            otherPage {
              content {
                __typename
                ... on Page_Otherpage_Content_HeaderSection {
                  header
                  subHeader
                }
                ... on Page_Otherpage_Content_InfoSection {
                  infoHeader
                  infoSubHeader
                }
              }
            }
          }
      }
      `,
    });
//   const sections = data.page.otherPage.content
//     console.log({sections})
     return {
      props: {
        wednesday: data.page.otherPage.content,
      },
   };

  }
