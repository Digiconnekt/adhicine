import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import EditModal from "../../components/Modals/Edit";
import DeleteAlert from "../../components/Modals/DeleteAlert";
import AddOrEditHospital from "./AddOrEdit";
import useShowHospital from "../../apis/hospital/show";
import useUpdateHospital from "../../apis/hospital/update";
import useAllHospitals from "../../apis/hospital/hospitals";
import useDeleteHospital from "../../apis/hospital/delete";

const HospitalList = () => {
  const navigate = useNavigate();

  const {
    data: dataAllHospitals,
    error: errorAllHospitals,
    isLoading: isLoadingAllHospitals,
    reFetch: reFetchAllHospitals,
    allHospitalsReq,
  } = useAllHospitals();
  const {
    showHospitalReq,
    data: dataShowHospital,
    isLoading: isLoadingShowHospital,
  } = useShowHospital();
  const {
    updateHospitalReq,
    data: dataUpdateHospital,
    error: errorUpdateHospital,
    isLoading: isLoadingUpdateHospital,
  } = useUpdateHospital();
  const {
    data: dataDeleteHospital,
    isLoading: isLoadingDeleteHospital,
    deleteHospitalReq,
  } = useDeleteHospital();

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    allHospitalsReq();
  }, []);

  const deleteHandler = (id) => {
    setShowDeleteAlert(true);
    setSelectedId(id);
  };

  const editModalHandler = (id) => {
    setShowEditModal(true);
    setSelectedId(id);
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="flex flex-wrap items-center justify-between col-span-12 mt-2 intro-y sm:flex-nowrap">
          <div className="w-56 text-slate-500">
            <h2 className="text-lg font-semibold">
              Total Hospitals -{" "}
              {isLoadingAllHospitals ? (
                <>loading...</>
              ) : (
                dataAllHospitals?.length
              )}
            </h2>
          </div>
          {/* <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <Button
              variant="primary"
              className="mr-2 shadow-md"
              onClick={() => navigate("/hospital/create")}
            >
              Add New Hospital
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button>
          </div> */}
        </div>

        {/* <div className="border-b pb-5">
          {showFilter && (
            <FilterHospital reFetchAllHospitals={reFetchAllHospitals} />
          )}
        </div> */}

        {isLoadingAllHospitals ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : errorAllHospitals ? (
          <p className="text-center mt-5 bg-white p-5 text-md text-red-500">
            failed to load
          </p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllHospitals?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        HOSPITAL NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        PHONE
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        LOCATION
                      </Table.Th>
                      {/* <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL DOCTORS
                      </Table.Th> */}
                      {/* <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL PATIENTS
                      </Table.Th> */}
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        ACTIONS
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataAllHospitals?.map((hospital, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {/* <Link
                            to={`/hospital/${hospital?.id}`}
                            className="font-medium whitespace-nowrap"
                          > */}
                          {hospital?.name ? hospital?.name : "-"}
                          {/* </Link> */}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {hospital?.email ? hospital?.email : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {hospital?.phone ? hospital?.phone : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {hospital?.location ? hospital?.location : "-"}
                        </Table.Td>
                        {/* <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {hospital?.doctors ? hospital?.doctors : "-"}
                        </Table.Td> */}
                        {/* <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {hospital?.patients ? hospital?.patients : "-"}
                        </Table.Td> */}
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <div
                              className="flex items-center mr-3 cursor-pointer"
                              onClick={() => editModalHandler(hospital?.id)}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </div>
                            {/* <div
                              className="flex items-center text-danger cursor-pointer"
                              onClick={() => deleteHandler(hospital?.id)}
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-1" />
                              Delete
                            </div> */}
                          </div>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </div>
            )}

            {dataAllHospitals?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Hospitals Found
              </p>
            )}
          </div>
        )}
      </div>

      <EditModal
        Component={AddOrEditHospital}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        open={showEditModal}
        setOpen={setShowEditModal}
        isLoadingShow={isLoadingShowHospital}
        dataShow={dataShowHospital?.data}
        showReq={showHospitalReq}
        isLoading={isLoadingUpdateHospital}
        data={dataUpdateHospital}
        error={errorUpdateHospital}
        submitReq={updateHospitalReq}
        reFetch={reFetchAllHospitals}
      />

      <DeleteAlert
        open={showDeleteAlert}
        setOpen={setShowDeleteAlert}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        data={dataDeleteHospital}
        deleteReq={deleteHospitalReq}
        reFetch={reFetchAllHospitals}
        isLoading={isLoadingDeleteHospital}
        title={"Delete Hospital"}
        subTitle={
          "Are you sure that you want to delete this hospital? All of your data will be permanently removed. This action cannot be undone."
        }
      />
    </>
  );
};

export default HospitalList;
