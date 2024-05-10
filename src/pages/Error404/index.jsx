import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import errorIllustration from "../../assets/images/error-illustration.svg";
import Button from "../../base-components/Button";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="py-2 bg-[#164E63]">
        <div className="container">
          {/* BEGIN: Error Page */}
          <div className="flex flex-col items-center justify-center h-screen text-center error-page lg:flex-row lg:text-left">
            <div className="mt-10 text-white lg:mt-0">
              <div className="font-medium intro-x text-8xl text-white text-center">
                404
              </div>
              <div className="mt-5 text-xl font-medium intro-x lg:text-3xl text-gray-300 text-center">
                Oops. This page has gone missing.
              </div>
              <div className="mt-3 text-lg intro-x text-gray-300 text-center">
                You may have mistyped the address or the page may have moved.
              </div>
              <Button className="px-4 py-3 mt-10 text-white border-white intro-x w-full text-center">
                <Link to={"/"}>Back to Home</Link>
              </Button>
            </div>
          </div>
          {/* END: Error Page */}
        </div>
      </div>
    </>
  );
}

export default Main;
