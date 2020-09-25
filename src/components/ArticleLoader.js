import React from 'react'
import ContentLoader from 'react-content-loader'

const ArticleLoader = props => (
    <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="14" y="-11" rx="2" ry="2" width="134" height="24" /> 
    <rect x="62" y="52" rx="2" ry="2" width="255" height="18" /> 
    <rect x="0" y="83" rx="2" ry="2" width="400" height="361" /> 
    <rect x="13" y="18" rx="2" ry="2" width="335" height="24" />
    </ContentLoader>
)

ArticleLoader.metadata = {
    name: 'xmorato',
    github: 'xmorato',
    description: 'Sorolls'
}

export default ArticleLoader