import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Greeting = () => {
  const user = useSelector((state) => state?.authUser?.user);

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="bg-[#C7D2FE] p-5 mt-5 rounded-lg">
      <h1 className="text-xl font-semibold">
        {greeting}, {user?.name}
        <span className="text-2xl ms-1">👋</span>
      </h1>
      <p className="text-sm mt-1">
        Here is what’s happening with your Dashboard.
      </p>
    </div>
  );
};

export default Greeting;
