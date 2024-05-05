import logo from "../../public/logo-transparent-svg.svg";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <section className="bg-neutral-800 sm:grid grid-cols-12 text-white py-12 px-3 sm:px-0">
                <div className="mb-4 sm:mb-0 sm:col-span-4 flex items-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mb-4 sm:mb-0 sm:col-span-4 flex flex-col pl-1 sm:pl-5">
                    <h5 className="text-xl sm:text-2xl font-semibold">About</h5>
                    <a href="" className="hover:underline text-sm sm:text-base">About Us</a>
                    <a href="" className="hover:underline text-sm sm:text-base">Our Services</a>
                    <a href="" className="hover:underline text-sm sm:text-base">Our Portfolio</a>
                    <a href="" className="hover:underline text-sm sm:text-base">Our Blog</a>
                </div>
                <div className="sm:col-span-4 flex flex-col">
                    <h5 className="text-xl sm:text-2xl font-semibold">Follow us</h5>
                    <span className="flex gap-2">
                        <a href="" className="hover:grayscale-[30%]"><>
                            {/*?xml version="1.0" ?*/}
                            <svg
                                className="w-6 h-6 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-11 lg:h-11"
                                height="100%"
                                style={{
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    strokeLinejoin: "round",
                                    strokeMiterlimit: 2
                                }}
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="100%"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g>
                                    <path
                                        d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                                        style={{ fill: "#1877f2", fillRule: "nonzero" }}
                                    />
                                    <path
                                        d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                                        style={{ fill: "#fff", fillRule: "nonzero" }}
                                    />
                                </g>
                            </svg>
                        </>
                        </a>
                        <a href="" className="hover:grayscale-[30%]"><>
                            {/*?xml version="1.0" ?*/}
                            <svg
                                className="w-6 h-6 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-11 lg:h-11"
                                enableBackground="new 0 0 48 48"
                                id="Layer_1"
                                version="1.1"
                                viewBox="0 0 48 48"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <circle cx={24} cy={24} fill="#1CB7EB" r={24} />
                                <g>
                                    <g>
                                        <path
                                            d="M36.8,15.4c-0.9,0.5-2,0.8-3,0.9c1.1-0.7,1.9-1.8,2.3-3.1c-1,0.6-2.1,1.1-3.4,1.4c-1-1.1-2.3-1.8-3.8-1.8    c-2.9,0-5.3,2.5-5.3,5.7c0,0.4,0,0.9,0.1,1.3c-4.4-0.2-8.3-2.5-10.9-5.9c-0.5,0.8-0.7,1.8-0.7,2.9c0,2,0.9,3.7,2.3,4.7    c-0.9,0-1.7-0.3-2.4-0.7c0,0,0,0.1,0,0.1c0,2.7,1.8,5,4.2,5.6c-0.4,0.1-0.9,0.2-1.4,0.2c-0.3,0-0.7,0-1-0.1    c0.7,2.3,2.6,3.9,4.9,3.9c-1.8,1.5-4.1,2.4-6.5,2.4c-0.4,0-0.8,0-1.3-0.1c2.3,1.6,5.1,2.6,8.1,2.6c9.7,0,15-8.6,15-16.1    c0-0.2,0-0.5,0-0.7C35.2,17.6,36.1,16.6,36.8,15.4z"
                                            fill="#FFFFFF"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </>
                        </a>
                        <a href="" className="hover:grayscale-[30%]"><>
                            {/*?xml version="1.0" ?*/}
                            <svg
                                className="w-6 h-6 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:w-11 lg:h-11"
                                id="Layer_1"
                                style={{ enableBackground: "new 0 0 32 32" }}
                                version="1.1"
                                viewBox="0 0 32 32"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                        __html: "\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:#FFFFFF;}\n"
                                    }}
                                />
                                <g>
                                    <linearGradient
                                        gradientTransform="matrix(16.0027 -27.7174 27.7174 16.0027 -878.9595 -482.2268)"
                                        gradientUnits="userSpaceOnUse"
                                        id="SVGID_1_"
                                        x1="-1.206969e-06"
                                        x2={1}
                                        y1={32}
                                        y2={32}
                                    >
                                        <stop offset={0} style={{ stopColor: "#FEC053" }} />
                                        <stop offset="0.327" style={{ stopColor: "#F2203E" }} />
                                        <stop offset="0.648" style={{ stopColor: "#B729A8" }} />
                                        <stop offset={1} style={{ stopColor: "#5342D6" }} />
                                    </linearGradient>
                                    <path
                                        className="st0"
                                        d="M16,0L16,0c8.8,0,16,7.2,16,16c0,8.8-7.2,16-16,16C7.2,32,0,24.8,0,16C0,7.2,7.2,0,16,0z"
                                    />
                                    <path
                                        className="st1"
                                        d="M20.7,6h-9.5C8.3,6,6,8.4,6,11.4v9.2c0,2.9,2.3,5.3,5.3,5.4h9.5c2.9,0,5.3-2.4,5.3-5.4v-9.2   C26,8.4,23.7,6,20.7,6z M24.2,20.5c0,2-1.6,3.7-3.7,3.7h-9.1c-2,0-3.7-1.7-3.6-3.7v-9c0-2,1.6-3.7,3.6-3.7h9.1c2,0,3.7,1.7,3.7,3.7   V20.5z"
                                    />
                                    <path
                                        className="st1"
                                        d="M16,10.9c-2.8-0.1-5.2,2.2-5.2,5c-0.1,2.8,2.2,5.2,5,5.2s5.2-2.2,5.2-5l0-0.1C21.1,13.2,18.8,10.9,16,10.9z    M16,19.3c-1.8,0-3.3-1.4-3.4-3.2c0-1.8,1.4-3.3,3.2-3.4s3.3,1.4,3.4,3.2l0,0.1C19.3,17.8,17.8,19.3,16,19.3z"
                                    />
                                    <path
                                        className="st1"
                                        d="M21.3,9.4c0.6,0,1.1,0.5,1.1,1.2s-0.5,1.2-1.1,1.2s-1.1-0.5-1.1-1.2S20.7,9.4,21.3,9.4z"
                                    />
                                </g>
                            </svg>
                        </>
                        </a>
                    </span>
                </div>
            </section>
            <section className="bg-neutral-900 text-center py-2">
                <h6 className="text-white font-medium text-base md:text-lg">Copyright ©{currentYear} SetapKu| Agustinus Henan All rights reserved.</h6>
            </section>
        </footer>
    )
}