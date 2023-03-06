import React from "react";
import { useLocation } from "react-router";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video }
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-2/3">
        <div className="youtube_wrap">
          <iframe
            width="100%"
            height="640"
            src={`https://www.youtube.com/embed/${video.id}`}
            title={title}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="p-10">
          <h2 className="">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <aside className="basis-1/3 lg:pl-5">
        <RelatedVideos id={video.id} />
      </aside>
    </section>
  );
}
