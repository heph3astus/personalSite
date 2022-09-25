import { GraphQLClient} from "graphql-request";

export async function load({params}){
    const hygraph = new GraphQLClient(
        'https://api-us-east-1.hygraph.com/v2/cl75oaghy5gt101t887qsdric/master',
        {
            headers: {},
        }
    );
    const { projects } = await hygraph.request(
        `query getProject {
            projects(where: {slug: "${params.slug}"}) {
                name
                headerImage {
                    url
                }
                blurb
                description
                sourceCode
                demo
            }
        }
        
        `
    );
    return {
        project: projects[0]
    };
}
