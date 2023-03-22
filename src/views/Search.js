import React from "react";
import BrowseCard from "../components/BrowseCard";

function Search() {
    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="pl-6 mt-4 font-semibold text-white text-xl">Browse All</div>
            </div>
            <div className="flex justify-between pt-3 pl-6">
                <div className="flex bg-orange-600 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Podcast"} boxImage={<img src={"https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-blue-900 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Made For You"} boxImage={<img src={"https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-purple-900 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Live Events"} boxImage={<img src={"https://concerts.spotifycdn.com/images/live-events_category-image.jpg"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-pink-600 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"New releases"} boxImage={<img src={"https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-green-800 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Pop"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
            </div>

            <div className="flex justify-between pt-3 pl-6">
                <div className="flex bg-orange-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Hip-Hop"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-pink-400 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Mood"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-rose-900 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Ramadan"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf433b1d3680909c5f912d5780"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-purple-400 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Charts"} boxImage={<img src={"https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-pink-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Trending"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
            </div>

            <div className="flex justify-between pt-3 pl-6">
                <div className="flex bg-orange-500 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Country"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-pink-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"R&B"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005cafbe6a6e705e1a71117c2d0c2c"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-orange-500 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Chill"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-blue-900 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Sleep"} boxImage={<img src={"https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-red-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Love"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
            </div>

            <div className="flex justify-between pt-3 pl-6">
                <div className="flex bg-teal-600 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Summer"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-red-600 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Flamenco"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf52358a0c50f81063155a8636"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-pink-900 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Karaoke"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf8eb00a9a2c00093ccde516c6"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-red-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Netflix"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf0b0c71c920d6a745461ada69"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
                <div className="flex bg-teal-700 rounded-xl text-white font-semibold text-xl">
                    <BrowseCard boxTitle={"Reggae"} boxImage={<img src={"https://i.scdn.co/image/ab67fb8200005caf6ba3a99776446ab3b295d2a6"} alt="abc" style={{width:"100px" , height:"100px"}} />}/>
                </div>
            </div>
        </div>
    );
};
export default Search