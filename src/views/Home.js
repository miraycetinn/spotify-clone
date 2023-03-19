import React from "react";
import AlbumCard from "../components/AlbumCard";
import IntroductionCard from "../components/IntroductionCard";

function Home() {
    return (
        <div className=" px-8">


            <div className={"flex pb-3"}>
                <h1 className="font-semibold text-white text-3xl">Good morning</h1>
            </div>
            <div className={"flex justify-between pb-6"}>
                <IntroductionCard title={"Beğendiğin Şarkılar"} photo={<img src={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"} style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Sesli Kitap"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8ac68ec060325174a675156467"} style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Felsefe"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8a687eb911c1ecd8f490425f43"} style={{width:"80px" , height:"80px"}} />}/>
            </div>
            <div className={"flex justify-between pb-6"}>
                <IntroductionCard title={"Kahvem Demlenene Kadar"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8ae0d4bc7e91922d70de79fe1f"} style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Trend Yabancılar"} photo={<img src={"https://mosaic.scdn.co/640/ab67616d00001e0228c97d26cfb8361451247f68ab67616d00001e025b1bff1152ef6d402c9b75a8ab67616d00001e02a3a7f38ea2033aa501afd4cfab67616d00001e02a935e4689f15953311772cc4"} style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Dilozof ile Dünyaya Fırlatıldık"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8a687eb911c1ecd8f490425f43"} style={{width:"80px" , height:"80px"}} />}/>
            </div>

            <div className={"flex justify-between pb-3"}>
                <h1 className="font-semibold text-white text-xl hover:underline">Episodes for you</h1>
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
