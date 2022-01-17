import { gql } from "@apollo/client";

const InfoSection = props => {
    return (
        <div>
            <p>Anka</p>
            <pre>{JSON.stringify(props, null, 2)}</pre>
        </div>
    )
}

export default InfoSection
