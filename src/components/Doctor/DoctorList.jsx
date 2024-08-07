import { useEffect, useState } from "react";
import Table from "../../base-components/Table";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddOrEditDoctor from "./AddOrEdit";
import useShowDoctor from "../../apis/doctor/show";
import useUpdateDoctor from "../../apis/doctor/update";
import EditModal from "../../components/Modals/Edit";
import useAllDoctors from "../../apis/doctor/doctors";
import useDeleteDoctor from "../../apis/doctor/delete";
import DeleteAlert from "../../components/Modals/DeleteAlert";

const DoctorList = ({ reFetchTopCards }) => {
  const user = useSelector((state) => state?.authUser?.user);
  const navigate = useNavigate();

  const {
    allDoctorsReq,
    data: dataAllDoctors,
    error: errorAllDoctors,
    isLoading: isLoadingAllDoctors,
    reFetch: reFetchAllDoctors,
  } = useAllDoctors();
  const {
    showDoctorReq,
    data: dataShowDoctor,
    isLoading: isLoadingShowDoctor,
  } = useShowDoctor();
  const {
    updateDoctorReq,
    data: dataUpdateDoctor,
    error: errorUpdateDoctor,
    isLoading: isLoadingUpdateDoctor,
  } = useUpdateDoctor();
  const {
    data: dataDeleteDoctor,
    isLoading: isLoadingDeleteDoctor,
    deleteDoctorReq,
  } = useDeleteDoctor();

  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    allDoctorsReq();
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
          <div className="w-56 text-black">
            <h2 className="text-xl font-semibold">
              Doctors{" "}
              {/* {isLoadingAllDoctors ? <>loading...</> : dataAllDoctors?.length} */}
            </h2>
          </div>
          <div className="flex w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
            <Button
              variant="primary"
              className="mr-2 shadow-md"
              onClick={() => navigate("/doctor/create")}
            >
              Add New Doctor
            </Button>
            {/* <Button
              variant="outline-primary"
              onClick={() => setShowFilter(!showFilter)}
            >
              <Lucide icon={showFilter ? "X" : "Filter"} className="w-5 h-5" />
            </Button> */}
          </div>
        </div>

        {/* <div className="border-b pb-5">
          {showFilter && <FilterDoctor reFetchAllDoctors={""} />}
        </div> */}

        {isLoadingAllDoctors ? (
          <p className="text-center mt-5 bg-white p-5 text-md">loading...</p>
        ) : errorAllDoctors ? (
          <p className="text-center mt-5 bg-white p-5 text-md text-red-500">
            failed to load
          </p>
        ) : (
          <div
            className="mt-8 overflow-auto intro-y lg:overflow-visible sm:mt-0"
            style={{ overflowX: "auto" }}
          >
            {dataAllDoctors?.length > 0 && (
              <div className="overflow-x-auto">
                <Table className="border-spacing-y-[10px] border-separate sm:mt-2">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th className="border-b-0 whitespace-nowrap">
                        DOCTOR NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        HOSPITAL NAME
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        EMAIL
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        PHONE
                      </Table.Th>
                      {/* <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        TOTAL PATIENTS
                      </Table.Th> */}
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        CREATED AT
                      </Table.Th>
                      <Table.Th className="text-center border-b-0 whitespace-nowrap">
                        ACTIONS
                      </Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {dataAllDoctors?.map((doctor, i) => (
                      <Table.Tr key={i} className="intro-x">
                        <Table.Td className="first:rounded-l-md last:rounded-r-md bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {/* <Link
                            to={`/doctor/${doctor?.id}`}
                            className="font-medium whitespace-nowrap"
                          > */}
                          {doctor?.name ? doctor?.name : "-"}
                          {/* </Link> */}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {doctor?.hospital ? doctor?.hospital : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {doctor?.email ? doctor?.email : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {doctor?.phone ? doctor?.phone : "-"}
                        </Table.Td>
                        {/* <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {doctor?.patients ? doctor?.patients : "-"}
                        </Table.Td> */}
                        <Table.Td className="first:rounded-l-md last:rounded-r-md text-center bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b]">
                          {doctor.createdAt ? doctor.createdAt : "-"}
                        </Table.Td>
                        <Table.Td className="first:rounded-l-md last:rounded-r-md w-56 bg-white border-b-0 dark:bg-darkmode-600 shadow-[20px_3px_20px_#0000000b] py-0 relative before:block before:w-px before:h-8 before:bg-slate-200 before:absolute before:left-0 before:inset-y-0 before:my-auto before:dark:bg-darkmode-400">
                          <div className="flex items-center justify-center">
                            <div
                              className="flex items-center mr-3 cursor-pointer"
                              onClick={() => editModalHandler(doctor?.id)}
                            >
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </div>
                            <div
                              className="flex items-center text-danger cursor-pointer"
                              onClick={() => deleteHandler(doctor?.id)}
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

            {dataAllDoctors?.data?.length === 0 && (
              <p className="text-center mt-5 bg-white p-5 text-md">
                No Doctors Found
              </p>
            )}
          </div>
        )}
      </div>

      <EditModal
        Component={AddOrEditDoctor}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        open={showEditModal}
        setOpen={setShowEditModal}
        isLoadingShow={isLoadingShowDoctor}
        dataShow={dataShowDoctor?.data}
        showReq={showDoctorReq}
        isLoading={isLoadingUpdateDoctor}
        data={dataUpdateDoctor}
        error={errorUpdateDoctor}
        submitReq={updateDoctorReq}
        reFetch={reFetchAllDoctors}
      />

      <DeleteAlert
        open={showDeleteAlert}
        setOpen={setShowDeleteAlert}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        data={dataDeleteDoctor}
        deleteReq={deleteDoctorReq}
        reFetch={() => {
          reFetchAllDoctors();
          reFetchTopCards();
        }}
        isLoading={isLoadingDeleteDoctor}
        title={"Delete Doctor"}
        subTitle={
          "Are you sure that you want to delete this Doctor? All of your data will be permanently removed. This action cannot be undone."
        }
      />
    </>
  );
};

export default DoctorList;
