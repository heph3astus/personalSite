import { GraphQLClient } from 'graphql-request';


export async function load() {



    const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl75oaghy5gt101t887qsdric/master',
    {
        headers: {},
    }
    );
    const { projects, authors, skills } = await hygraph.request(
    `query GetMainPageData {
        projects {
            slug
            name
            iconImage {
                url
            }
            headerImage {
                url
            }
            blurb
        }
        authors(first:1) {
            name
            intro
            picture {
                url
            }
            bio
            slug
            githubLink
            mainProject
            resume {
                url
            }
            email
        }
        skills {
            skillName
            icon {
                url
            }
            skillTag
            displayOnMain
        }
    }`
    );


    return {
        projects: projects,
        pInfo: authors[0],
        skills: skills
    };
}
