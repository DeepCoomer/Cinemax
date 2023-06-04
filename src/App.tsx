import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useAppDispatch } from "./app/hooks";
import { getApiConfiguration, getApiGenres } from "./app/reducer/home.reducer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useAppDispatch();
  // const { url } = useAppSelector((state: any) => state.home);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration", "")
      .then((res) => {
        console.log(res);

        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => console.log(err));
  };

  const genresCall = async () => {
    let promises: any = [];
    let endPoints = ["tv", "movie"];

    let allGenres: any = {};

    endPoints.forEach((endPoint: string) => {
      promises.push(fetchDataFromApi(`/genre/${endPoint}/list`, ""));
    });

    const data: any = await Promise.all(promises);


    data.map(({ genres }: {genres: any}) => {
      return genres.map((item: any) => (allGenres[item.id] = item));
  });

    dispatch(getApiGenres(allGenres));
  };

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
