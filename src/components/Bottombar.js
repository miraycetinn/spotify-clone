function Bottombar() {
    return (
        <div className="h-24 bg-footer border-t border-white border-opacity-5 relative">
            <div className=" flex flex-col justify-evenly h-full items-center ">
                <div className="flex flex-row justify-between">
                    <button>
                        <svg role="img" height="16" width="16" aria-hidden="true" fill="#FFFFFF" viewBox="0 0 16 16"
                             data-encore-id="icon" className="m-auto mr-5 Svg-sc-ytk21e-0 uPxdw">
                            <path
                                d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
                            <path
                                d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg role="img" height="16" width="16" aria-hidden="true" fill="#FFFFFF" viewBox="0 0 16 16"
                             data-encore-id="icon" className="m-auto mr-4 Svg-sc-ytk21e-0 uPxdw">
                            <path
                                d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                        </svg>
                    </button>
                    <button >
                        <div className="flex items-center bg-white h-8 w-8 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
                                 className="m-auto flex w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
                                     className="m-auto w-6 h-6">
                                    <path fillRule="evenodd"
                                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                          clipRule="evenodd"/>
                                </svg>
                            </svg>
                        </div>
                    </button>
                    <button>
                        <svg role="img" height="16" width="16" aria-hidden="true" fill="#FFFFFF" viewBox="0 0 16 16"
                             data-encore-id="icon" className="m-auto ml-4 Svg-sc-ytk21e-0 uPxdw">
                            <path
                                d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                        </svg>
                    </button>
                    <button>
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="#FFFFFF" data-encore-id="icon"
                             className="m-auto ml-5 Svg-sc-ytk21e-0 uPxdw">
                            <path
                                d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                        </svg>
                    </button>
                </div>

                <div className=" w-1/3 bg-gray-200 rounded-full h-1.5 group dark:bg-gray-700">
                    <div className="bg-white h-1.5 group-hover:bg-green-600 rounded-full" style={{width: "45%"}}></div>
                </div>
            </div>

        </div>
    )
}

export default Bottombar