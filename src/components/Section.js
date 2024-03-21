import AlbumCard from "./AlbumCard";
import React from "react";

function Section( {title}) {
    return(
        <section>
            <h1 className="font-semibold text-white text-xl hover:underline">{title}</h1>
            <div className={"flex justify-between"}>
                <AlbumCard name={"Philosophy"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} alt="pdc" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Art"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1febf2f1cb2e0a966accca73f1"} alt="art" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Physiology"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1fb2f43ed2323187fc0336a3e3"} alt="pdc"/>} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Kahvem Demlene Kadar"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f2fc084fbcec8d1890bc18b18"} alt="chat" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Philosophy-2"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} alt="pdc" />} date={"Mar 27"} long={"41 min"}/>
            </div>
        </section>
    )
}

export default Section