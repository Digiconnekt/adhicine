import React from "react";

const MachineLogs = () => {
  return (
    <>
      <div className="content">
        {/* heading start */}
        <div className="intro-y flex items-center mt-8">
          <h2 className="text-lg font-medium mr-auto">Machine Logs Table</h2>
        </div>
        {/* heading end */}

        {/* table start */}
        <div className="intro-y box mt-5">
          <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
            <div className="text-base text-slate-500 mr-auto">
              Showing results for 01-01-2023 to 24-01-2023
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex items-center">
                <label htmlFor="from" className="text-base text-slate-500">
                  From:
                </label>
                <input
                  type="date"
                  className="form-control sm:w-40 box ml-2"
                  id="from"
                  name="from"
                />

                {/* vertical line break start */}
                <div className="w-px h-10 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                {/* vertical line break end */}

                <label htmlFor="to" className="text-base text-slate-500">
                  To:
                </label>
                <input
                  type="date"
                  className="form-control sm:w-40 box ml-2"
                  id="to"
                  name="to"
                />
              </div>
            </div>
          </div>
          <div className="p-5" id="hoverable-table">
            <div className="preview">
              <div className="overflow-x-auto">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">Sr. No.</th>
                      <th className="whitespace-nowrap">Machine</th>
                      <th className="whitespace-nowrap">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>24-01-2023</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>24-01-2023</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>24-01-2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* table end */}

        {/* pagination start */}
        <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-4">
          <nav className="w-full sm:w-auto sm:mr-auto mr-auto ml-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    icon-name="chevrons-left"
                    className="lucide lucide-chevrons-left w-4 h-4"
                    data-lucide="chevrons-left"
                  >
                    <polyline points="11 17 6 12 11 7"></polyline>
                    <polyline points="18 17 13 12 18 7"></polyline>
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    icon-name="chevron-left"
                    className="lucide lucide-chevron-left w-4 h-4"
                    data-lucide="chevron-left"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    icon-name="chevron-right"
                    className="lucide lucide-chevron-right w-4 h-4"
                    data-lucide="chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    icon-name="chevrons-right"
                    className="lucide lucide-chevrons-right w-4 h-4"
                    data-lucide="chevrons-right"
                  >
                    <polyline points="13 17 18 12 13 7"></polyline>
                    <polyline points="6 17 11 12 6 7"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* pagination end */}
      </div>
    </>
  );
};

export default MachineLogs;
