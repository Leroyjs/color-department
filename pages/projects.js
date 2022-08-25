import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {ProjectCards, RunningLine} from "components";
import "styles/global.style";
const Projects = ({data}) => {
    console.log(data)

    return (
        <>
            <ProjectCards/>
            <RunningLine outline mt="xlg"/>
        </>
    );
};

export default Projects;

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api.cd.rrn.su/',
        cache: new InMemoryCache()
    });

    const { data } = await client.query({
        query: gql`query {
              projects {
                id
                title
                description
                year
                photoUrl
                videoUrl
                previewVideoUrl
              }
        }`
    });

    return {
        props: {
            data
        }
    }
}
