import { graphql,} from 'gatsby';
import * as React from 'react';
import Layout from '../../components/layout';
import { MDXRenderer} from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



export const query = graphql`
query($slug: String) {
  mdx(slug: {eq: $slug}) {
    body
    frontmatter {
      date(formatString: "ddd D MMM, YYYY")
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
}
`;
console.log('something');

const BlogPost = ({data}) => {
    let imageData = getImage(data.mdx.frontmatter.hero_image) ;    
    let dataNode = data.mdx;
   
    return(
        <Layout pageTitle={dataNode.frontmatter.title}>
            <p>{dataNode.frontmatter.date}</p>
            <GatsbyImage image={imageData} alt={dataNode.frontmatter.hero_image_alt}/>
            <p>
              Photo Credit:{" "}
              <a href={dataNode.frontmatter.hero_image_credit_link}>
                {dataNode.frontmatter.hero_image_credit_text}
              </a>
            </p>
            <MDXRenderer>
                {dataNode.body}
            </MDXRenderer>
        </Layout>
    );
};

export default BlogPost;