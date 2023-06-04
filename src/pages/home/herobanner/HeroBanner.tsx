import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { useAppSelector } from "../../../app/hooks";
import Img from "../../../components/lazyloadimage/Img";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();

  const { url } = useAppSelector((state: any) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e: any) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} className={""} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Thousands of movies, Tv shows and more to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={(e: any) => searchQueryHandler(e)}
            />
            <button onClick={() => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
