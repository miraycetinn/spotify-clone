import React from "react";

const IntroductionCard = ({title, photo}) => {
    return (
        <div className="flex justify-between flex-col hover:bg-white/[.10] bg-white/[.03]"
             style={{width: "371px", height: "80px" }}>
            <div className="flex items-center">
                <div>{photo}</div>
                <div className="pl-3"><strong>{title}</strong></div>
            </div>
        </div>
    )

}

export default IntroductionCard