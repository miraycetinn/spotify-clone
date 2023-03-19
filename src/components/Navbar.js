import React from "react";
import UserWidget from "./UserWidget";
function Navbar() {
    return (
        <nav class="bg-black w-full h-16">
            <div className="bg-black h-16 flex items-center justify-between px-6">
                <UserWidget
                    name="Jane Doe"
                    imageUrl="https://i.scdn.co/image/ab6775700000ee854b21de7237adb92977b25fcf"
                />
            </div>
        </nav>

    )

}
export default Navbar