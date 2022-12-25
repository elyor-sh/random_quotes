import React, { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const DeleteButton: React.FC<IconButtonProps> = ({ ...rest }) => {
    return (
        <button {...rest} className={`p-2 ${rest.className || ''}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                enableBackground="new 0 0 24 24"
                width="20"
                height="20"
            >
                <path d="M 9.03125 -0.03125 C 8.56825 -0.03125 8.1875 0.3495 8.1875 0.8125 L 8.1875 3.6875 C 5.4705 3.9955 3.59375 4.62075 3.59375 5.34375 L 3.59375 6.71875 C 3.59375 7.00075 3.89425 7.258 4.40625 7.5 C 5.74625 8.129 8.643 8.5625 12 8.5625 C 15.36 8.5625 18.25175 8.129 19.59375 7.5 C 20.10275 7.258 20.40625 7.00075 20.40625 6.71875 L 20.40625 5.34375 C 20.40625 4.59575 18.38 3.95025 15.5 3.65625 L 15.5 0.8125 C 15.5 0.3485 15.12025 -0.03125 14.65625 -0.03125 L 9.03125 -0.03125 z M 9.875 1.5 L 10.9375 1.5 L 12.75 1.5 L 13.84375 1.5 C 13.92775 1.5 13.96875 1.90325 13.96875 2.40625 L 13.96875 3.53125 C 13.33175 3.49825 12.686 3.46875 12 3.46875 C 11.291 3.46875 10.5945 3.49425 9.9375 3.53125 L 9.71875 3.5625 L 9.71875 2.40625 C 9.71875 1.90325 9.792 1.5 9.875 1.5 z M 4.78125 9.53125 C 4.69125 9.62425 4.646 9.7125 4.625 9.8125 L 4.625 9.875 C 4.625 9.889 4.623 9.9245 4.625 9.9375 L 5.1875 21.6875 C 5.2385 22.6095 6.304 24 12 24 C 17.696 24 18.7625 22.6095 18.8125 21.6875 L 19.375 9.9375 C 19.376 9.9235 19.375 9.889 19.375 9.875 L 19.375 9.8125 C 19.359 9.7125 19.30975 9.62425 19.21875 9.53125 C 18.48575 10.27625 15.526 10.375 12 10.375 C 8.474 10.375 5.51825 10.27625 4.78125 9.53125 z" />
            </svg>
        </button>
    );
};

export const CloseButton: React.FC<IconButtonProps> = ({ ...rest }) => {
    return (
        <button {...rest} className={`p-2 ${rest.className || ''}`}>
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 502 502"
                xmlSpace="preserve"
                width="20"
                height="20"
            >
                <g>
                    <g>
                        <g>
                            <path
                                d="M428.483,73.517C381.076,26.108,318.045,0,251,0S120.924,26.108,73.517,73.517C26.108,120.924,0,183.955,0,251
				s26.108,130.076,73.517,177.483C120.924,475.892,183.955,502,251,502s130.076-26.108,177.483-73.517
				C475.892,381.076,502,318.045,502,251S475.892,120.924,428.483,73.517z M251,482C123.626,482,20,378.374,20,251
				S123.626,20,251,20s231,103.626,231,231S378.374,482,251,482z"
                            />
                            <path
                                d="M295.434,249l69.658-69.657c12.525-12.527,12.525-32.908,0-45.434c-6.069-6.068-14.137-9.41-22.718-9.41
				c-8.581,0-16.65,3.343-22.717,9.41L250,203.566l-69.657-69.656c-6.068-6.068-14.136-9.411-22.717-9.411
				c-8.581,0-16.65,3.342-22.718,9.41c-12.525,12.527-12.525,32.908,0,45.434L204.566,249l-69.658,69.657
				c-12.526,12.527-12.526,32.909,0.001,45.436c6.069,6.066,14.136,9.407,22.717,9.407c8.582,0,16.65-3.341,22.717-9.408
				L250,294.434l69.657,69.658c6.068,6.067,14.135,9.408,22.717,9.408c8.581,0,16.648-3.341,22.718-9.408
				c12.526-12.527,12.526-32.909,0-45.435L295.434,249z M350.95,349.948c-2.291,2.29-5.336,3.552-8.576,3.552
				c-3.239,0-6.285-1.261-8.574-3.551l-76.729-76.729c-1.876-1.875-4.419-2.929-7.071-2.929s-5.195,1.054-7.071,2.929L166.2,349.949
				c-2.289,2.29-5.335,3.551-8.574,3.551c-3.24,0-6.285-1.262-8.575-3.551c-4.729-4.728-4.729-12.421,0-17.149l76.729-76.729
				c1.875-1.876,2.929-4.419,2.929-7.071c0-2.652-1.054-5.195-2.929-7.071L149.051,165.2c-4.729-4.727-4.729-12.42,0-17.148
				c2.29-2.291,5.336-3.553,8.575-3.553c3.239,0,6.284,1.262,8.574,3.553l76.728,76.728c3.907,3.904,10.237,3.904,14.143,0
				l76.729-76.729c2.29-2.29,5.335-3.552,8.574-3.552s6.285,1.262,8.575,3.553c4.729,4.727,4.729,12.42,0,17.148l-76.729,76.729
				c-1.875,1.876-2.929,4.419-2.929,7.071s1.054,5.195,2.929,7.071l76.729,76.729C355.678,337.527,355.678,345.22,350.95,349.948z"
                            />
                            <path
                                d="M168.913,67.198c-2.504-4.924-8.526-6.886-13.446-4.38c-34.189,17.389-63.035,43.789-83.422,76.346
				C51.081,172.642,40,211.313,40,251c0,5.522,4.478,10,10,10s10-4.478,10-10c0-72.283,40.055-137.56,104.533-170.356
				C169.456,78.14,171.417,72.12,168.913,67.198z"
                            />
                            <path
                                d="M209.99,64.187c0.673,0,1.356-0.069,2.04-0.21C224.762,61.338,237.873,60,251,60c5.522,0,10-4.478,10-10s-4.478-10-10-10
				c-14.487,0-28.964,1.478-43.028,4.393c-5.409,1.121-8.884,6.413-7.763,11.821C201.188,60.938,205.349,64.187,209.99,64.187z"
                            />
                        </g>
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </button>
    );
};

export const ViewButton: React.FC<IconButtonProps> = ({ ...rest }) => {
    return (
        <button {...rest} className={`p-2 ${rest.className || ''}`}>
            <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 442.04 442.04"
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path
                            d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
			c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
			c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
			c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
			c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
			c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
			c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z"
                        />
                    </g>
                    <g>
                        <path
                            d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
			c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
			c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
			s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z"
                        />
                    </g>
                    <g>
                        <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </button>
    );
};

export const EditButton: React.FC<IconButtonProps> = ({ ...rest }) => {
    return (
        <button {...rest} className={`p-2 ${rest.className || ''}`}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <rect width="26" height="26" fill="url(#pattern0)" />
                <defs>
                    <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <use
                            xlinkHref="#image0_17_740"
                            transform="scale(0.0104167)"
                        />
                    </pattern>
                    <image
                        id="image0_17_740"
                        width="96"
                        height="96"
                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADyElEQVR4nO2cPUwUQRiG37kz4U4gJNbGkkYqE2NCIDHanDbXcTW1Ecq1krnYeNKAejWJjR6x0PhDiKU/jSUdiY2xNiEQFjTHWAyrJ/ezMzuzt3sz39Put/NNnjfMzW6YBQiCIAiCIAiC8A2W9QTyzMP11gJjbFlAzAD4AeDV0eThA764eGSrBwXQh8aT1goEePcV9jEs4ja/s3Bgo0/BxiCu0Vhv8d7yAUDMl9vYbjReT9roRX8BZ2istzgYVuIr2ReEY5UgqO6b9KMAOlCXH2EeAgVwir78CLMQKACYyI9IHoL3AZjLj0gWgtcB2JMfoR+Ct9tQTfnf1crELMpH73lzc0J1Hl4GoCn/M8LSDIB7ivVzOs8J3gWgKf9TWGSVIKjuB0u1BgTqareJWZSP3/GNjVJcpVcBJJB/q/OVQ7Bc4xohzJcPzt+Pq/ImgATLTs/3PcFyjUNxORIC1bgaLwLQkc+Ar9Gy068mLLIm1H6YL8YVOB+A7lZTANPjv9uX+13nzc2JcltsAbgUNxYDduJqnA4g4T5/6qRQ2F5de37t7IUO+XNqQ7G1uApnAzB8yOoKQVs+Aw+WFl7GlzmIxSfcPUBUCse/dsRY6a2AuK50FwMP7taUdkvOBWD/9QL2GLArgKtK1QL1052SEk4FoLvbEcA0gClrE9CUDzj0G6C7zxdh6SYriBsAflqZAAPXlS9vc4AED1m3on3+o6cvrogT9gHAhcQT0Fjzu28dcUzkRxiFYCBf3j7C2JAfkSgEQ/nACP8GJH2r2a/gkBV2GfBNeQICdVP5AHDOdIAsSPRiLaj2/Ueq1dVn46KNN8pbTQYeLJnLl0ONGDaXHeBUfkoPWWrDjRCuyZdDjgguypfDjgCuypdD5xyX5cvhc4zr8mWLnOKDfNkmh/giX7bKGT7Jl+1yhG/yZcuc4KN82TYH+Cpfts4Yn+XL9hniu3w5hYwg+dE0MoDk/2PoAZD8/xlqACS/m6EFQPJ7M5QASH5/Ug+A5A8m1QBIfjypBUDy1UglAJKvjvUASL4eVgMg+fpYC4DkJ8NKACQ/OcYBkHwzjAIg+eYkDoDk2yFRACTfHtoBkHy76B9RIvlWSeuMGMlXJI0ASL4G1g/phUVWGXQgjjc3J07aYgsQal8dEajbOhCXR6wHMOiz7h2nETU++eKufGCI54Rp2enNUAIg+f1JPQCSPxj9B7HHLZHGRAB4Jx/I07ciPJQP5CUAT+UDeQjAY/lA1gF4Lh/IMgCSDyCrAEj+X4YfAMknCIIgCIIgCIIgCIIgPOUPvMt1JnCL/MQAAAAASUVORK5CYII="
                    />
                </defs>
            </svg>
        </button>
    );
};
