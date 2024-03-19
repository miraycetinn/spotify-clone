import React from "react";
import { Menu } from '@headlessui/react'
import {Icon} from "../Icons";

function UserWidget({ name, imageUrl }) {
    return (
        <Menu as="Nav" className={"relative"}> {/* dropdownun yana açılması engellendi */}
                    <Menu.Button
                        className=" bg-gray-900 opacity-90 hover:bg-gray-700 rounded-full flex items-center">
                        <img className="rounded-full w-8 h-8 object-cover mr-2" src={imageUrl} alt="user profile"/>
                        <span className=" pr-3 text-sm font-semibold">{name}</span>
                        <svg role="img" height="16" width="16" aria-hidden="true" fill="#FFFFFF"
                             className="pr-2 w-6 h-6 Svg-sc-ytk21e-0 gQUQL eAXFT6yvz37fvS1lmt6k" viewBox="0 0 16 16"
                             data-encore-id="icon">
                            <path d="m14 6-6 6-6-6h12z"></path>
                        </svg>
                    </Menu.Button>
                    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>  {/* menü itemlerini kutu içine aldık ve stillendirdik */}
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex justify-between items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Account
                                    <Icon size={12} name="external" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 flex items-center px-2 text-sm rounded ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Log out
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
        </Menu>
    );

};
export default UserWidget;