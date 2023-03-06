import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";

  return (
    <li
      className={isList ? "flex gap1 m-2" : ""}
      key={video.id}
      onClick={() => {
        navigate(`/videos/watch/:${video.id}`, { state: { video } });
      }}
    >
      <div className={isList ? "basis-1/3 mr-2" : ""}>
        <img
          src={
            thumbnails.standard ? thumbnails.standard.url : thumbnails.high.url
          }
          className="w-full"
          alt=""
        />
      </div>
      <dl className={isList ? "basis-2/3" : ""}>
        <dt className="font-semibold my-2 line-clamp-2">{title}</dt>
        <dd className="text-sm opacity-80">{channelTitle}</dd>
        <dd className="text-sm opacity-80">{formatAgo(publishedAt)}</dd>
      </dl>
    </li>
  );
}
