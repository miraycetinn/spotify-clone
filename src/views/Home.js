import {useState} from "react";
import AlbumCard from "../components/AlbumCard";

function Home() {
    return (
        <div className=" px-8">
            <div className={"flex justify-between"}>
                <h1 className="font-semibold hover:underline-offset-2">Episodes For You</h1>
                <span>Show All</span>
            </div>
            <div className={"flex justify-between"}>
                <AlbumCard name={"Felsefe"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Sanat"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1febf2f1cb2e0a966accca73f1"} />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Psikoloji"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1fb2f43ed2323187fc0336a3e3"} />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Sohbet"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f2fc084fbcec8d1890bc18b18"} />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Felsefe-2"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} />} date={"Mar 27"} long={"41 min"}/>
            </div>

        </div>
    )
}
export default Home
