import useCreatePatient from "../../../apis/patient/create";
import AddOrEditPatient from "../../../components/Patient/AddOrEdit";
import { OnlyDoctor } from "../../../dashboards/Doctor";

function Main() {
  const { createPatientReq, data, error, isLoading } = useCreatePatient();

  return (
    <OnlyDoctor>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Create New Patient</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y">
          {/* BEGIN: Form Layout */}
          <div className="p-5 intro-y box">
            <AddOrEditPatient
              type={"add"}
              isLoading={isLoading}
              data={data}
              error={error}
              submitReq={createPatientReq}
            />
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </OnlyDoctor>
  );
}

export default Main;
