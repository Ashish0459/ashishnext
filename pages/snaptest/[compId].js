import React,{useState} from "react";
import { useRouter } from "next/router";

const CompId = () => {
  const [ECode, setEmpCode] = useState("");

  const routers = useRouter();
  const {
    query: { CompId },
  } = routers;

  const handleSubmit = (e) => {
    e.preventDefault();
    // routers.push({
    //   pathname: `/start/ ${ECode},
    // `,
    //   query: { empId: ECode },
    // });
    routers.push("/start")
  };
  return (
    <>
      {/* <div className="text-center">
        <h1>your comp id is{CompId}</h1>
      </div> */}
      <div
        style={{
          width: "100% ",
          background: "gray",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form style={{ width: "50%" }} onSubmit={handleSubmit}>
          <div className="mb-3  text-center">
            <label className="form-label text-black font-weight-bold">
              Employee Code
            </label>
            <input
              type="text"
              name="comp_code"
              className="form-control"
              value={ECode}
              onChange={(e) => {
                setEmpCode(e.target.value);
              }}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CompId;

