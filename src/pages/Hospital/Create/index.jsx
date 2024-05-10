import useCreateHospital from "../../../apis/hospital/create";
import AddOrEditHospital from "../../../components/Hospital/AddOrEdit";
import { OnlyAdmin } from "../../../dashboards/Admin";

function Main() {
  const { createHospitalReq, data, error, isLoading } = useCreateHospital();

  return (
    <OnlyAdmin>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Create New Hospital</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <AddOrEditHospital
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              submitReq={createHospitalReq}
            />
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </OnlyAdmin>
  );
}

export default Main;
