import { gql } from "@apollo/client";
import client from "../apollo-client";


const other = ({wednesday}) => {

// console.log({wednesday})

    return (

        
        <div>
            <p>Det här är en annan sida</p>
            <h1>Annan-sida</h1>
            <h2>{wednesday.header}</h2>
            <p>{wednesday.subHeader}</p>
            {wednesday.map(day => {
                // console.log({day})
                const typeName = day.__typename;
                // console.log({typeName})
                switch (typeName) {
                    case 'Page_Otherpage_Content_HeaderSection':
                        return (
                            <div> 
                                <h1 key={day.id} >{day.header}</h1>     
                                <h2 key={day.id}> {day.subHeader}</h2>
                            </div>  
                        )  
                    case
                    'Page_Otherpage_Content_InfoSection':
                        return (
                            <div>
                                <h1 key={day.id} >{day.infoHeader}</h1>
                            
                                <h2 key={day.id}> {day.infoSubHeader}</h2>
                           </div> 
                        )

                }

            })}
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
