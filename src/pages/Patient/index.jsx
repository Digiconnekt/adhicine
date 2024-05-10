import Card from "../../components/Card";
import MedicineList from "../../components/Medicine/MedicineList";
import VerticalBarChart from "../../components/PatientVerticalBarChart";
import TomSelect from "../../base-components/TomSelect";
import Litepicker from "../../base-components/Litepicker";
import { useState } from "react";
import Lucide from "../../base-components/Lucide";

const Patient = () => {
  const [select, setSelect] = useState("1");
  const [daterange, setDaterange] = useState("");

  const cardsData = [
    {
      title: "Total Medicines",
      icon: "ShoppingCart",
      text: "text-gray-800",
      medType: "total",
      img: "../../../images/medicine-icon.png",
      // count: companyCount,
    },
    {
      title: "Taken Medicines",
      icon: "CreditCard",
      text: "text-gray-800",
      medType: "taken",
      img: "../../../images/medicine-icon.png",
      // count: storeCount,
    },
    {
      title: "Missed Medicines",
      icon: "CreditCard",
      text: "text-gray-800",
      medType: "missed",
      img: "../../../images/medicine-icon.png",
      // count: revenueCount,
    },
    {
      title: "Snoozed Medicines",
      icon: "CreditCard",
      text: "text-gray-800",
      medType: "snoozed",
      img: "../../../images/medicine-icon.png",
      // count: revenueCount,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Profile */}
            <div className="col-span-12 mt-8">
              <div className="px-5 pt-5 mt-5 intro-y box">
                <div className="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <div className="flex items-center justify-center flex-1 px-5 lg:justify-start">
                    <div className="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={
                          "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1714"
                        }
                      />
                    </div>
                    <div className="ml-5">
                      <div className="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                        John Travolta
                      </div>
                      <div className="text-slate-500">Cancer</div>
                    </div>
                  </div>
                  <div className="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
                    <div className="font-medium text-center lg:text-left lg:mt-3">
                      Contact Details
                    </div>
                    <div className="flex flex-col items-center justify-center mt-4 lg:items-start">
                      <div className="flex items-center truncate sm:whitespace-normal">
                        <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                        johntravolta@gmail.com
                      </div>
                      <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                        <Lucide icon="Phone" className="w-4 h-4 mr-2" />{" "}
                        9856956895
                      </div>
                      <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                        <Lucide icon="MapPin" className="w-4 h-4 mr-2" />{" "}
                        Santosh Nagar, Delhi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Profile */}

            {/* BEGIN: Cards */}
            <div className="col-span-12 mt-4">
              <div className="grid grid-cols-12 gap-6 mt-5">
                <Card cards={cardsData} isLoading={false} />
              </div>
            </div>
            {/* END: Cards */}

            {/* BEGIN: Medicine Chart */}
            <div className="col-span-12 intro-y box p-5 mt-10">
              <div className="flex items-center flex-col md:flex-row gap-5 border-b pb-5 mb-5">
                <div className="w-full md:w-[50%]">
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    options={{
                      placeholder: "Select Medicine",
                    }}
                    className="w-full"
                  >
                    <option value="1">Paracetamole 1</option>
                    <option value="2">Paracetamole 2</option>
                    <option value="3">Paracetamole 3</option>
                  </TomSelect>
                </div>

                <div className="relative w-full md:w-[50%] mx-auto">
                  <div className="absolute flex items-center justify-center w-10 h-full border rounded-l bg-slate-100 text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                    <Lucide icon="Calendar" className="w-4 h-4" />
                  </div>
                  <Litepicker
                    value={daterange}
                    onChange={setDaterange}
                    options={{
                      autoApply: false,
                      singleMode: false,
                      numberOfColumns: 2,
                      numberOfMonths: 2,
                      showWeekNumbers: true,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                    className="pl-12"
                  />
                </div>
              </div>

              <VerticalBarChart height={400} />
            </div>
            {/* END: Medicine Chart */}

            {/* BEGIN: Medicines List */}
            <MedicineList reFetchCard={""} />
            {/* END: Medicines List */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
