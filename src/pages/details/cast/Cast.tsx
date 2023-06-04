import "./style.scss";

import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
import Img from "../../../components/lazyloadimage/Img";
import avatar from "../../../assets/avatar.png";
import { useAppSelector } from "../../../app/hooks";

const Cast = ({ data, loading }: { data: any; loading: any }) => {
  const { url } = useAppSelector((state: any) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {
                data?.map((item: any) => {
                    let profileUrl = item.profile_path ? url.profile + item.profile_path : avatar;
                    return(
                        <div key={item.id} className="listItem">
                            <div className="profileImg">
                                <Img src={profileUrl} className={""} />
                            </div>

                            <div className="name">{item.name}</div>
                            <div className="character">{item.character}</div>
                        </div>
                    );
                })
            }
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
