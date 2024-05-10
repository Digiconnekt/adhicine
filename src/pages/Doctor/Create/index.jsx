import useCreateDoctor from "../../../apis/doctor/create";
import AddOrEditDoctor from "../../../components/Doctor/AddOrEdit";
import { OnlyHospital } from "../../../dashboards/Hospital";

function Main() {
  const { createDoctorReq, data, error, isLoading } = useCreateDoctor();

  return (
    <OnlyHospital>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Create New Doctor</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <AddOrEditDoctor
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              submitReq={createDoctorReq}
            />
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </OnlyHospital>
  );
}

export default Main;
