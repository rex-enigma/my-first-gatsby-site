import { graphql,} from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import { MDXRenderer} from 'gatsby-plugin-mdx'


export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: " ddd D MMM, YYYY")
    }
    body
  }
}
`;

const BlogPost = ({data}) => {
    let dataNode = data.mdx;
    console.log(dataNode);
    return(
        <Layout pageTitle={dataNode.frontmatter.title}>
            <p>{dataNode.frontmatter.date}</p>
            <MDXRenderer>
                {dataNode.body}
            </MDXRenderer>
        </Layout>
    );
};

export default BlogPost;