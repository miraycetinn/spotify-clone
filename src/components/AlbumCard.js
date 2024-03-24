import React from "react";

const AlbumCard = ({photo, name, date, long}) => {


    return (
        <div className="flex justify-between flex-col hover:bg-white/[.10] bg-black/[.03] hover:cursor-pointer"
             style={{width: "186px", height: "259px", padding: "14px"}}>
            <div>{photo}</div>
            <div><strong>{name}</strong></div>
            <div className="text-xs"><span>{date} . {long}</span></div>

        </div>
    )
}
export default AlbumCard