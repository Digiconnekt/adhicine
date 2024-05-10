import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Link, useNavigate } from "react-router-dom";
import FilterMedicine from "./Filter";
import { useSelector } from "react-redux";

import useAllMedicines from "../../apis/medicine/medicines";

const MedicineList = ({ reFetchCard }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const fakeMedicineData = {
    data: [
      {
        id: "1",
        name: "Paracetamole",
        total: "95",
        taken: "95",
        missed: "95",
        snoozed: "95",
        status: true,
      },
      {
        id: "2",
        name: "Paracetamole",
        total: "95",
        taken: "95",
        missed: "95",
        snoozed: "95",
        status: false,
      },
    ],
  };

  const {
    allMedicinesReq,
    data: dataAllMedicines,
    isLoading: isLoadingAllMedicines,
    reFetch: reFetchAllMedicines,
  } = useAllMedicines();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    allMedicinesReq();
  }, []);

  const reFetch = () => {
    reFetchAllMedicines();
    reFetchCard();
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Medicines -{" "}
              {isLoadingAllMedicines ? (
                <>loading...</>
              ) : (
                dataAllMedicines?.data?.length
              )}
            </h2>
          </div>
          <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="border-b pb-5">
          {showFilter && (
            <FilterMedicine reFetchAllMedicines={reFetchAllMedicines} />
          )}
        </div>

        {isLoadingAllMedicines ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {fakeMedicineData?.data?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        MEDICINE NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TAKEN
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        MISSED
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        SNOOZED
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        STATUS
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CREATED AT
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        ACTIONS
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {fakeMedicineData?.data?.map((medicine, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <Link
                            to={`/medicine/${medicine?.id}`}
                            className="font-medium whitespace-nowrap"
                          >
                            {medicine?.name ? medicine?.name : "-"}
                          </Link>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {medicine?.total ? medicine?.total : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {medicine?.taken ? medicine?.taken : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {medicine?.missed ? medicine?.missed : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {medicine?.snoozed ? medicine?.snoozed : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <div
                            className={clsx([
                              "flex items-center justify-center",
                              { "text-success": medicine?.status },
                              { "text-danger": !medicine?.status },
                            ])}
                          >
                            {medicine?.status ? "Active" : "Inactive"}
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {medicine.created_at
                            ? moment(medicine.created_at).format("DD/MM/YYYY")
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <div
                              className="flex items-center mr-3 cursor-pointer"
                              onClick={() => editModalHandler(medicine?.id)}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </div>
                            <div
                              className="flex items-center text-danger cursor-pointer"
                              onClick={() => deleteHandler(medicine?.id)}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-1" />
                              Delete
                            </div>
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            )}

            {dataAllMedicines?.data?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Companies Found
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MedicineList;
