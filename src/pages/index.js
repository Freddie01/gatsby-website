import React from "react"

  export default ({data}) => (
    <div style={{color: 'tomato'}} >
      <h1>{data.siteMetadata.title}</h1>
      <p>This is a paragraph</p>
    </div>
  ) 

export const query = graphql`
    query FirstQuery {
        site{
            siteMetaData{
                title
                author
            }
        }
    }
    `