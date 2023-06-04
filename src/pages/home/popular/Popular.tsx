import { useState } from "react";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchtabs/SwitchTabs";
import "../style.scss";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab: any) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs
          data={["Movies", "TV Shows"]}
          onTabChange={(tab: any) => onTabChange(tab)}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endpoint}/>
    </div>
  );
};

export default Popular;
