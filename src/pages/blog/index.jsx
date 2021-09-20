import * as React from 'react';
import Layout from '../../components/layout';
import { graphql,Link } from 'gatsby';


export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "ddd  D MMM YYYY")
        title
      }
      id
      slug
    }
  }
}
`;

const BlogPage = ({data})=>{
  //list of nodes containing data we need(eg id,content(body),date,title)
    let dataNodes = data.allMdx.nodes;
    return(
        <Layout  pageTitle ='Blog Page Posts'>
           {
             dataNodes.map(node => (
              <article key={node.id}>
                <h2>
                 <Link to={node.slug}>
                   {node.frontmatter.title}
                 </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article> 
             ))
           }
        </Layout>
    );
};

export default BlogPage;