import * as React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

export const query = graphql`
 query{
   allFile{
     nodes{
       name
     }
   }
 }
`;

const BlogPage = ({data})=>{
    let blogNameList = data.allFile.nodes;
    return(
        <Layout  pageTitle ='Blog Page Posts'>
           <ul>
           {blogNameList.map((node)=>(
                <li key={node.name}>
                    {node.name}
                </li>
           ))}
           </ul>
        </Layout>
    );
};

export default BlogPage;