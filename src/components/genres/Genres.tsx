// import React from 'react'
import { useAppSelector } from "../../app/hooks";
import "./style.scss";

const Genres = ({ data }: { data: any }) => {
  const { genres } = useAppSelector((state: any) => state.home);
  return (
    <div className="genres">
      {data?.map((g: any) => {
        if (!genres[g]?.name) {
            return;
        }
        return <div key={g} className="genre">{genres[g]?.name}</div>;
      })}
    </div>
  );
};

export default Genres;
