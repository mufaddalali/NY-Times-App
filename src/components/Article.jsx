import PropTypes from 'prop-types';
import newsdefault from '../assets/img/news-default-big.png';
import { Link } from 'react-router-dom';
const Article = ({articles}) => {


  return (
    <div className="flex flex-wrap">
    {articles.length > 0 ? (
      articles.map((article, index) => {
        const imageMedia = article.media.find(media => media.type === "image");
        const MediumImage = imageMedia?.['media-metadata'].find(metadata => metadata.format === "mediumThreeByTwo440");
        const imageUrl = MediumImage?.url || newsdefault;
        return (

      <div className="p-4 md:w-1/3" key={index}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageUrl} alt={article.title}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{article.byline}</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 min-h-14">{article.title}</h1>
            <p className="leading-relaxed mb-3">
            {article.abstract.length > 100
                          ? `${article.abstract.substring(0, 100)}...`
                          : article.abstract}
                         </p>
            <div className="flex items-center flex-wrap ">
              <Link to={`/articledetail/${index}`} className="text-blue-900 bg-white-100 py-2 px-3 rounded-md transition-all hover:shadow-md inline-flex items-center border border-blue-600 hover:bg-blue-100">View Detail
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              {article.source}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              {article.type}
              </span>
            </div>
          </div>
        </div>
      </div>


        );
      })
    ) : (
      <div className="my-3 text-2xl text-center px-4 py-3 text-gray-700 rounded-md w-3/6 m-auto">
        <h1>Loading please wait...</h1>
      </div>
    )}
  </div>
  )
}
Article.propTypes = {
  articles: PropTypes.array.isRequired,
  };
export default Article