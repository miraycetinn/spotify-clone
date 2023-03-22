import React from "react";
import AlbumCard from "../components/AlbumCard";
import IntroductionCard from "../components/IntroductionCard";

function Home() {
    return (
        <div className="overflow-scroll px-8">


            <div className={"flex pb-3"}>
                <h1 className="font-semibold text-white text-3xl">Good morning</h1>
            </div>
            <div className={"flex justify-between pb-6"}>
                <IntroductionCard title={"Liked Songs"} photo={<img src={"https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"} alt="liked" style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Audio book"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8ac68ec060325174a675156467"} alt="audiobook" style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Philosophy"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8a687eb911c1ecd8f490425f43"} alt="pdc" style={{width:"80px" , height:"80px"}} />}/>
            </div>
            <div className={"flex justify-between pb-6"}>
                <IntroductionCard title={"Kahvem Demlenene Kadar"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8ae0d4bc7e91922d70de79fe1f"} alt="chat" style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Trend"} photo={<img src={"https://mosaic.scdn.co/640/ab67616d00001e0228c97d26cfb8361451247f68ab67616d00001e025b1bff1152ef6d402c9b75a8ab67616d00001e02a3a7f38ea2033aa501afd4cfab67616d00001e02a935e4689f15953311772cc4"} alt="trend" style={{width:"80px" , height:"80px"}} />}/>
                <IntroductionCard title={"Dilozof ile Dünyaya Fırlatıldık"} photo={<img src={"https://i.scdn.co/image/ab6765630000ba8a687eb911c1ecd8f490425f43"} alt="pdc" style={{width:"80px" , height:"80px"}} />}/>
            </div>

            <div className={"flex justify-between pb-3"}>
                <h1 className="font-semibold text-white text-xl hover:underline">Episodes for you</h1>
                <span>Show All</span>
            </div>
            <div className={"flex justify-between"}>
                <AlbumCard name={"Philosophy"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} alt="pdc" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Art"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1febf2f1cb2e0a966accca73f1"} alt="art" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Physiology"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1fb2f43ed2323187fc0336a3e3"} alt="pdc"/>} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Kahvem Demlene Kadar"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f2fc084fbcec8d1890bc18b18"} alt="chat" />} date={"Mar 27"} long={"41 min"}/>
                <AlbumCard name={"Philosophy-2"} photo={<img src={"https://i.scdn.co/image/ab67656300005f1f687eb911c1ecd8f490425f43"} alt="pdc" />} date={"Mar 27"} long={"41 min"}/>
            </div>

            <div className={"flex justify-between pb-3"}>
                <h1 className="font-semibold text-white text-xl hover:underline">Made for Jane</h1>
                <span>Show All</span>
            </div>
            <div className={"flex justify-between"}>
                <AlbumCard name={"Daily Mix 1"} photo={<img src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb727a2ac15afe659be999beba/1/tr/default"} alt="dm1" />} date={"Doja Cat, Arctic Monkeys, Miley Cyrus and more"} />
                <AlbumCard name={"Daily Mix 2"} photo={<img src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4293385d324db8558179afd9/2/tr/default"} alt="dm2 "/>} date={"Drake, Eminem, Spice and more"} />
                <AlbumCard name={"Daily Mix 3"} photo={<img src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb920dc1f617550de8388f368e/3/tr/default"} alt="dm3" />} date={"Imagine Dragons, Lost Frequencies, The Kooks and more"} />
                <AlbumCard name={"Daily Mix 4"} photo={<img src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba14fd21d411cb52a266bb69c/4/tr/default"} alt="dm4" />} date={"Yaşlı Amca, Athena, Ari Barokas and more"} />
                <AlbumCard name={"Daily Mix 5"} photo={<img src={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb32e5120c84a5f62bf8903e65/5/tr/default"} alt="dm5" />} date={"Omar Apollo, Rex Orange County, Hippo Campus and more"} />
            </div>

            <div className={"flex justify-between pb-3"}>
                <h1 className="font-semibold text-white text-xl hover:underline">Best of artists</h1>
                <span>Show All</span>
            </div>
            <div className={"flex justify-between"}>
                <AlbumCard name={"This Is Billie Eilish"} photo={<img src={"https://i.scdn.co/image/ab67706f00000002df12c206fd3c49ad933943f3"} alt="thisisbillie"/>} date={"All things Billie!"} />
                <AlbumCard name={"This Is The Weeknd"} photo={<img src={"https://i.scdn.co/image/ab67706f00000002256e5fd2d2b6df5b9e98ac4e"} alt="thisisweeknd" />} date={"The essential tracks from The Weeknd"} />
                <AlbumCard name={"This Is Harry Styles"} photo={<img src={"https://i.scdn.co/image/ab67706f00000002f4bb692d1a4ad8ba79f84655"} alt="thisisharry" />} date={"The essential tracks.All in one playlist"} />
                <AlbumCard name={"This Is Olivia Rodrigo"} photo={<img src={"https://i.scdn.co/image/ab67706f00000002c9da2f125669d66439d8ba5c"} alt="thisisolivia" />} date={"The essential tracks, all in one playlist"} />
                <AlbumCard name={"This Is Labrinth"} photo={<img src={"https://thisis-images.scdn.co/37i9dQZF1DZ06evO1hiJc4-default.jpg"} alt="thisislabrinth"/>} date={"The essential tracks. All in one playlist"} />
            </div>
        </div>
    )
}
export default Home
