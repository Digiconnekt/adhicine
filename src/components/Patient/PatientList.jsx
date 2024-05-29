import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Link, useNavigate } from "react-router-dom";
import FilterPatient from "./Filter";
import { useSelector } from "react-redux";

const PatientList = ({
  dataAllPatients,
  isLoadingAllPatients,
  errorAllPatients,
}) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Patients -{" "}
              {isLoadingAllPatients ? <>loading...</> : dataAllPatients?.length}
            </h2>
          </div>
          <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            {user?.role === "doctor" && (
              <Button
                variant="primary"
                className="mr-2 shadow-md"
                onClick={() => navigate("/patient/create")}
              >
                Add New Patient
              </Button>
            )}
            <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="border-b pb-5">
          {showFilter && <FilterPatient reFetchAllPatients={""} />}
        </div>

        {isLoadingAllPatients ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : errorAllPatients ? (
          <p className="text-center mt-5 bg-white p-5 text-md text-red-500">
            failed to load
          </p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllPatients?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        PATIENT NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CONTACT
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        DOCTOR NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL MEDICINES
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
                    {dataAllPatients?.map((patient, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <Link
                            to={`/patient/${patient?.id}`}
                            className="font-medium whitespace-nowrap"
                          >
                            {patient?.name ? patient?.name : "-"}
                          </Link>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {patient?.email ? patient?.email : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {patient?.contact ? patient?.contact : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {patient?.doctor_name ? patient?.doctor_name : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {patient?.medicines ? patient?.medicines : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-40 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          <div
                            className={clsx([
                              "flex items-center justify-center",
                              { "text-success": patient?.status },
                              { "text-danger": !patient?.status },
                            ])}
                          >
                            {patient?.status ? "Active" : "Inactive"}
                          </div>
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {patient.created_at
                            ? moment(patient.created_at).format("DD/MM/YYYY")
                            : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <div
                              className="flex items-center mr-3 cursor-pointer"
                              onClick={() => editModalHandler(patient?.id)}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </div>
                            <div
                              className="flex items-center text-danger cursor-pointer"
                              onClick={() => deleteHandler(patient?.id)}
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

            {dataAllPatients?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Patients Found
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PatientList;
