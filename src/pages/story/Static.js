import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/story.css"
import "../../style/Static.css"
import data from "../../image/graph.png"
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Story from "../../Apis/Story";

function Static() {
    const [Contnet, setContent] = useState([])

    useEffect(() => {
        const main = new Story();
        const response = main.Static();
        response.then((res) => {
            console.log("res", res)
            setContent(res.data)
        }).catch((error) => {
            console.log("erorr", error)
        })
    }, [])
    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-title">
                                    <h6>Statistics </h6>

                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                                    <g clip-path="url(#clip0_151_464)">
                                                        <path d="M24.3556 57.013C23.0916 56.2833 22.2693 55.2079 21.8885 53.7869C21.5078 52.3658 21.6826 51.0245 22.413 49.763L25.0667 45.1666C25.4426 44.5155 25.9786 44.0966 26.6746 43.9102C27.3706 43.7237 28.043 43.8187 28.6917 44.1953L33.2881 46.849L36.2735 41.6781C35.1686 40.9381 34.1672 40.0402 33.2691 38.9844C32.3711 37.9287 31.7332 36.7566 31.3556 35.4681C31.2585 35.1056 31.2264 34.7419 31.2594 34.3769C31.2924 34.0119 31.3962 33.6765 31.5707 33.3707L32.4663 31.8194L30.8001 30.8575C30.4937 30.6806 30.2304 30.4519 30.0102 30.1716C29.7901 29.8913 29.6306 29.5694 29.532 29.206L27.3465 21.0497C27.1522 20.3247 27.232 19.6558 27.5859 19.043C27.9397 18.4301 28.4791 18.0266 29.2041 17.8323C30.9562 17.3628 32.9197 17.4117 35.0947 17.979C37.2696 18.5463 39.1427 19.2825 40.714 20.1876C41.7482 20.7847 42.7098 21.442 43.5988 22.1596C44.4879 22.8772 45.3079 23.7337 46.059 24.7291C46.5676 23.8481 47.3053 23.2781 48.272 23.0191C49.2386 22.7601 50.1625 22.8849 51.0434 23.3935L70.8652 34.8376C72.1292 35.5674 72.9516 36.6428 73.3323 38.0638C73.7131 39.4848 73.5383 40.8261 72.8078 42.0877L58.2125 67.3676C57.1068 69.2827 55.4966 70.5236 53.382 71.0902C51.2674 71.6568 49.2525 71.3872 47.3374 70.2815L24.3556 57.013ZM37.8844 49.5027L49.3753 56.137C50.0264 56.5129 50.4453 57.0489 50.6318 57.7449C50.8183 58.4409 50.7232 59.1133 50.3466 59.762L49.0198 62.0602C48.6438 62.7113 48.5491 63.3849 48.7356 64.0809C48.9221 64.7769 49.3406 65.3117 49.9911 65.6852C50.6422 66.0611 51.3158 66.1559 52.0118 65.9694C52.7078 65.7829 53.2426 65.3644 53.6161 64.7139L68.2115 39.4339L49.8261 28.8191L49.03 30.198L54.5908 50.9513C54.7365 51.4951 54.7203 52.0097 54.5421 52.4952C54.364 52.9806 54.058 53.378 53.6241 53.6872C53.1893 53.998 52.7279 54.178 52.2399 54.2271C51.7519 54.2763 51.2393 54.1469 50.7021 53.8388C50.3957 53.6619 50.1374 53.4229 49.9272 53.1217C49.717 52.8206 49.5718 52.5202 49.4915 52.2205L47.0146 42.9767L46.2896 43.171C45.4438 43.3976 44.602 43.55 43.7643 43.6281C42.9266 43.7063 42.1165 43.6727 41.3342 43.5275L37.8844 49.5027ZM34.4305 26.825L37.4182 28.5499C38.0693 28.9259 38.4881 29.4619 38.6746 30.1579C38.8611 30.8539 38.7661 31.5262 38.3895 32.175L36.8636 34.8179C37.1463 35.3897 37.5035 35.8767 37.9351 36.2791C38.3667 36.6815 38.8506 37.0375 39.3868 37.3471C40.2678 37.8558 41.1404 38.1808 42.0045 38.3222C42.8687 38.4637 43.8438 38.3882 44.9298 38.096L45.6548 37.9017L44.2949 32.8267C43.8254 31.0746 43.0618 29.5224 42.004 28.1701C40.9462 26.8178 39.6316 25.6891 38.0603 24.784C37.2943 24.3417 36.5333 23.979 35.7775 23.6958C35.0217 23.4127 34.2328 23.187 33.4106 23.0188L34.4305 26.825ZM44.4234 59.4065L28.3362 50.1185L27.0093 52.4167L43.4413 61.9037C43.5254 61.4926 43.6489 61.0787 43.8119 60.6621C43.9748 60.2455 44.1786 59.8269 44.4234 59.4065Z" fill="url(#paint0_linear_151_464)" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_464" x1="26.2134" y1="17.972" x2="71.3407" y2="48.9128" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <clipPath id="clip0_151_464">
                                                            <rect width="63.6889" height="63.6889" fill="white" transform="translate(32.5073 0.4375) rotate(30)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Stories </h6>
                                                <p>{Contnet.stories || "1200"} </p>
                                            </div>
                                            <div className="static-data">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="82" height="88" viewBox="0 0 82 88" fill="none">
                                                    <g clip-path="url(#clip0_232_839)">
                                                        <path d="M24.3556 57.0166C23.0916 56.2868 22.2693 55.2114 21.8885 53.7904C21.5078 52.3694 21.6826 51.0281 22.413 49.7665L25.0667 45.1702C25.4426 44.519 25.9786 44.1002 26.6746 43.9137C27.3706 43.7272 28.043 43.8223 28.6917 44.1988L33.2881 46.8525L36.2735 41.6817C35.1686 40.9416 34.1672 40.0437 33.2691 38.988C32.3711 37.9322 31.7332 36.7601 31.3556 35.4716C31.2585 35.1091 31.2264 34.7454 31.2594 34.3804C31.2924 34.0154 31.3962 33.68 31.5707 33.3742L32.4663 31.823L30.8001 30.861C30.4937 30.6841 30.2304 30.4555 30.0102 30.1752C29.7901 29.8948 29.6306 29.573 29.532 29.2096L27.3465 21.0533C27.1522 20.3283 27.232 19.6593 27.5859 19.0465C27.9397 18.4337 28.4791 18.0301 29.2041 17.8358C30.9562 17.3664 32.9197 17.4153 35.0947 17.9825C37.2696 18.5498 39.1427 19.286 40.714 20.1912C41.7482 20.7883 42.7098 21.4456 43.5988 22.1631C44.4879 22.8807 45.3079 23.7372 46.059 24.7326C46.5677 23.8516 47.3053 23.2817 48.272 23.0226C49.2386 22.7636 50.1625 22.8884 51.0434 23.397L70.8652 34.8411C72.1292 35.5709 72.9516 36.6463 73.3323 38.0673C73.7131 39.4883 73.5382 40.8296 72.8078 42.0912L58.2125 67.3711C57.1068 69.2863 55.4966 70.5271 53.382 71.0937C51.2674 71.6603 49.2525 71.3908 47.3374 70.2851L24.3556 57.0166ZM37.8844 49.5062L49.3753 56.1405C50.0264 56.5164 50.4453 57.0524 50.6318 57.7484C50.8183 58.4444 50.7232 59.1168 50.3466 59.7655L49.0198 62.0637C48.6438 62.7149 48.5491 63.3884 48.7356 64.0844C48.9221 64.7804 49.3406 65.3152 49.9911 65.6887C50.6422 66.0647 51.3158 66.1594 52.0118 65.9729C52.7078 65.7864 53.2426 65.3679 53.6161 64.7174L68.2115 39.4375L49.8261 28.8227L49.03 30.2016L54.5908 50.9549C54.7365 51.4986 54.7203 52.0132 54.5421 52.4987C54.364 52.9842 54.058 53.3815 53.6241 53.6908C53.1893 54.0015 52.7279 54.1815 52.2399 54.2307C51.7519 54.2798 51.2393 54.1504 50.7021 53.8423C50.3957 53.6654 50.1374 53.4264 49.9272 53.1253C49.717 52.8241 49.5718 52.5237 49.4915 52.2241L47.0146 42.9803L46.2896 43.1745C45.4438 43.4012 44.602 43.5536 43.7643 43.6317C42.9266 43.7098 42.1165 43.6762 41.3342 43.531L37.8844 49.5062ZM34.4305 26.8286L37.4182 28.5535C38.0693 28.9294 38.4881 29.4654 38.6746 30.1614C38.8611 30.8574 38.7661 31.5298 38.3895 32.1785L36.8636 34.8214C37.1463 35.3932 37.5035 35.8803 37.9351 36.2827C38.3667 36.6851 38.8506 37.0411 39.3868 37.3507C40.2678 37.8593 41.1404 38.1843 42.0045 38.3258C42.8687 38.4672 43.8438 38.3918 44.9298 38.0995L45.6548 37.9052L44.2949 32.8302C43.8254 31.0781 43.0618 29.5259 42.004 28.1736C40.9462 26.8214 39.6316 25.6927 38.0603 24.7875C37.2943 24.3452 36.5333 23.9825 35.7775 23.6994C35.0217 23.4162 34.2328 23.1905 33.4106 23.0223L34.4305 26.8286ZM44.4234 59.41L28.3362 50.122L27.0093 52.4202L43.4413 61.9072C43.5254 61.4961 43.6489 61.0823 43.8119 60.6656C43.9748 60.249 44.1786 59.8304 44.4234 59.41Z" fill="url(#paint0_linear_232_839)" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_232_839" x1="26.2134" y1="17.9756" x2="71.3407" y2="48.9163" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>

                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 7.5C14.337 7.5 13.7011 7.76339 13.2322 8.23223C12.7634 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.7634 11.2989 13.2322 11.7678C13.7011 12.2366 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.2366 16.7678 11.7678C17.2366 11.2989 17.5 10.663 17.5 10C17.5 9.33696 17.2366 8.70107 16.7678 8.23223C16.2989 7.76339 15.663 7.5 15 7.5ZM15 16.25C18.3375 16.25 25 17.9125 25 21.25V25H5V21.25C5 17.9125 11.6625 16.25 15 16.25ZM15 18.625C11.2875 18.625 7.375 20.45 7.375 21.25V22.625H22.625V21.25C22.625 20.45 18.7125 18.625 15 18.625Z" fill="url(#paint0_linear_151_479)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_479" x1="4.31973" y1="8.63637" x2="25.8837" y2="10.0377" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Users</h6>
                                                <p>{Contnet.user || "1500"}</p>
                                            </div>
                                            <div className="static-data">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                                                    <g clip-path="url(#clip0_151_470)">
                                                        <path d="M40.3045 18.388C42.0893 19.4184 43.3917 21.1157 43.9251 23.1064C44.4585 25.0971 44.1792 27.2182 43.1488 29.003C42.1183 30.7878 40.421 32.0902 38.4303 32.6236C36.4396 33.157 34.3186 32.8778 32.5338 31.8473C30.749 30.8168 29.4466 29.1196 28.9132 27.1289C28.3798 25.1381 28.659 23.0171 29.6895 21.2323C30.72 19.4474 32.4172 18.1451 34.4079 17.6116C36.3986 17.0782 38.5197 17.3575 40.3045 18.388ZM38.3618 21.7528C37.4694 21.2376 36.4089 21.0979 35.4135 21.3646C34.4182 21.6313 33.5695 22.2825 33.0543 23.1749C32.5391 24.0674 32.3995 25.1279 32.6662 26.1232C32.9329 27.1186 33.584 27.9672 34.4765 28.4825C35.3689 28.9977 36.4294 29.1373 37.4247 28.8706C38.4201 28.6039 39.2687 27.9527 39.784 27.0603C40.2992 26.1679 40.4388 25.1074 40.1721 24.112C39.9054 23.1167 39.2542 22.268 38.3618 21.7528ZM31.5624 33.5297C36.0545 36.1232 43.7298 43.5381 41.1364 48.0302L38.2223 53.0774L11.3038 37.5359L14.2178 32.4886C16.8113 27.9966 27.0704 30.9362 31.5624 33.5297ZM29.7169 36.7263C24.7201 33.8414 18.036 33.2575 17.4144 34.3342L16.3459 36.1849L36.8713 48.0353L37.9398 46.1846C38.5614 45.1079 34.7136 39.6112 29.7169 36.7263Z" fill="url(#paint0_linear_151_470)" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_470" x1="23.1039" y1="14.9829" x2="51.0386" y2="33.6257" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <clipPath id="clip0_151_470">
                                                            <rect width="46.6244" height="46.6245" fill="white" transform="matrix(0.866024 0.500002 -0.499998 0.866027 24.0005 0)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path d="M23.9062 5.625H6.09375C4.28157 5.625 2.8125 7.09407 2.8125 8.90625V21.0938C2.8125 22.9059 4.28157 24.375 6.09375 24.375H23.9062C25.7184 24.375 27.1875 22.9059 27.1875 21.0938V8.90625C27.1875 7.09407 25.7184 5.625 23.9062 5.625Z" stroke="url(#paint0_linear_151_481)" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.8125 11.25H27.1875M7.5 17.5781H10.3125V18.75H7.5V17.5781Z" stroke="url(#paint1_linear_151_481)" stroke-width="3.51562" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_481" x1="1.98342" y1="9.03409" x2="28.1885" y2="11.2479" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_151_481" x1="1.98342" y1="12.6136" x2="27.2485" y2="17.9496" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Subscribers  </h6>
                                                <p>{Contnet.totalSubscription || "1280"}</p>
                                            </div>
                                            <div className="static-data">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="87" viewBox="0 0 79 87" fill="none">
                                                    <g clip-path="url(#clip0_151_476)">
                                                        <path d="M69.9835 35.7191L37.234 16.8112C33.9022 14.8875 29.6418 16.0291 27.7181 19.3609L14.7811 41.7685C12.8575 45.1004 13.999 49.3608 17.3309 51.2844L50.0804 70.1924C53.4123 72.116 57.6726 70.9744 59.5963 67.6426L72.5333 45.235C74.4569 41.9032 73.3154 37.6428 69.9835 35.7191Z" stroke="url(#paint0_linear_151_476)" stroke-width="3.98063" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M25.2302 23.6719L70.0454 49.5459M27.1312 40.2824L32.3022 43.2678L31.0583 45.4224L25.8873 42.4369L27.1312 40.2824Z" stroke="url(#paint1_linear_151_476)" stroke-width="7.46367" stroke-linejoin="round" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_476" x1="26.0581" y1="18.7159" x2="71.888" y2="50.6028" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_151_476" x1="22.2584" y1="25.299" x2="63.0461" y2="61.9284" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <clipPath id="clip0_151_476">
                                                            <rect width="63.69" height="63.69" fill="white" transform="translate(32.0005) rotate(30)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="Static-image">
                                    <Image src={data} alt="Not Responseive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AuthLayout>

        </>);
}

export default Static;