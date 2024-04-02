import { useParams } from "react-router-dom";
import { Api } from "../api/api";
import newsdefault from "../assets/img/news-default-big.png";
const ArticleDetails = () => {
  const { data } = Api();
  const { id } = useParams();

  const SingleArticle = data[id];
  console.log(SingleArticle)

  const imageMedia = SingleArticle?.media.find(
    (media) => media.type === "image"
  );
  const MediumImage = imageMedia?.["media-metadata"].find(
    (metadata) => metadata.format === "mediumThreeByTwo440"
  );
  const imageUrl = MediumImage?.url || newsdefault;

  return (
    <div className="flex flex-wrap px-8 w-full">
      {SingleArticle ? (
        
          <div className="py-8 flex flex-wrap md:flex-nowrap w-full">
            <div className="md:w-2/4 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img
                className="w-full pt-2 object-contain"
                src={imageUrl}
                alt={SingleArticle.title}
              />
            </div>
            <div className="md:flex-grow pl-10 flex-grow">
            <span className="inline-block py-1 px-2 rounded bg-blue-100 text-blue-500 text-xs font-medium tracking-widest mb-2">{SingleArticle.section}</span>
             
              <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                {SingleArticle.title}
              </h1>
              <p className="leading-relaxed mb-3 text-lg">{SingleArticle.abstract}</p>
              <a target="_blank"
              rel="noreferrer"
                  href={SingleArticle.url}
                  className="text-blue-900 bg-white-100 py-2 px-3 text-md rounded-md transition-all hover:shadow-md inline-flex items-center border text-sm border-blue-600 hover:bg-blue-100"
                >
                  Read Article here
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="mt-10 flex justify-between">
                  
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Article {SingleArticle.byline}
              </h2>

              <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Published on: {SingleArticle.published_date}
              </span>
                </div>
                <div className="tags mt-2 pt-2 border-t">
                  Tags:
                {SingleArticle?.des_facet && SingleArticle.des_facet?.map((tag, index) => (
  <span key={index} className="inline-flex py-1 px-2 mx-2 rounded bg-blue-100 text-blue-800 text-xs tracking-widest mb-2">{tag}</span>
))}
                </div>
            </div>
          </div>
      
      ) : (
        <div className="my-3 text-2xl text-center px-4 py-3 text-gray-700 rounded-md w-3/6 m-auto">
          <h1>Loading please wait...</h1>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
