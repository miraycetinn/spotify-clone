function Playlists() {
    const playLists=new Array(40).fill(0)
    return(
        <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
            <ul>

                    {playLists.map((item,key)=>
                        <li>
                        <a href="#" className="text-sm text-link hover:text-white flex h-8 items-center">
                            {key+1}. Çalma Listem
                        </a>
                        </li>)

                    }

            </ul>
        </nav>
    )
}

export default Playlists