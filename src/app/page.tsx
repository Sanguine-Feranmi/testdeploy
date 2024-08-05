import Sidebar from "@/components/sidebar";
import Dashmenu from "@/components/dashmenu"
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook, faMessage, faList, faUser, faCog, faUsersCog, faTimes, faBusinessTime, faTv, faArrowAltCircleRight, faCaretDown, faBell} from "@fortawesome/free-solid-svg-icons";
import Dashboard from "@/components/dashboard";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="bg-slate-50 flex justify-between ">
      <section className="flex sticky">
        <Sidebar className="relative px-7 py-8 text-white">
          <div className="logo pb-10 w-full">
            <img src="/logoskaille1.png" alt="" className="mx-auto w-[70%]" />
          </div>
          <div className="text-white pb-[30px] md:pb-[65px]">
            <ul className="list-none leading-[80px]">
              <li>
                <FontAwesomeIcon icon={faHome} /> Dashboard
              </li>
              <li> <FontAwesomeIcon icon={faBook} /> My Courses</li>
              <li> <FontAwesomeIcon icon={faList} /> Resources</li>
              <li> <FontAwesomeIcon icon={faBusinessTime} /> My Schedule</li>
              <li> <FontAwesomeIcon icon={faMessage} /> Messages</li>
              <li> <FontAwesomeIcon icon={faUsersCog} /> Peer-to-Peer Support</li>
              <li> <FontAwesomeIcon icon={faUser} /> My Account</li>
              <li> <FontAwesomeIcon icon={faCog} /> Settings</li>
              <li> <FontAwesomeIcon icon={faTv} /> Live Class</li>
            </ul>
          </div>
          <div className="accCrumb">
            <hr className="text-white"/>
            <div className="acctxt py-8 leading-[40px]">
              <p className="justify-between flex">Reina James <FontAwesomeIcon icon={faArrowAltCircleRight} className="mt-1 text-3xl"/></p>
              <a href="Reinajame@skailleup.com">Reinajame@skailleup.com</a>
            </div>
          </div>
        </Sidebar>
      </section>
      <section>
      <Dashmenu>
          <div className="py-8">
            <div className="dashTop flex justify-between">
              <div className="dashTopGreet">
                <h1 className="text-4xl font-bold">Your Dashboard Today!</h1>
                <p>Hello Tutor Reina, welcome Back!</p>
              </div>
              <div className="dashTopLang">
                <div className="lang flex justify-between">
                  <p className="px-2" >Language:</p>
                  <p className="flex">English <span className="px-3"> <img src="/usflag.png" alt="" className="w-[60px] object-contain"/></span> <FontAwesomeIcon icon={faCaretDown} className=" text-[22px] px-2"/></p>
                  <p><FontAwesomeIcon icon={faBell} /></p> 
                  <div className="accImg px-3">
                    <img src="/avatar-head.png" className="w-[60px] -mt-8 rounded-full"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Dashboard>
            <div className="flex justify-between w-full">
              <div className="dash w-[70%]">
                wertyuytrfds
              </div>
              <div className="reminder w-[30%] border-2 rounded-2xl h-screen">
               ghjkjhgfdfgh 
              </div>
            </div>
        </Dashboard>
        </Dashmenu>
      </section>

    </div>
  );
}
