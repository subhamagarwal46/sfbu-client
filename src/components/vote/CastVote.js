import React from "react";
import navya from "../../assets/navya.jpeg";
import himavanth from "../../assets/himavanth.jpeg";
import rahul from "../../assets/rahul.jpeg";
import adminBuilding from "../../assets/admin.jpg";
import matterJson from "../../matter.json";
import capitalizeName from "../../utils/voteUtils";

const CastVote = () => {
  function fetchMatterImage(name) {
    let myimg = undefined;
    switch (name) {
      case "navya":
        myimg = navya;
        break;
      case "himavanth":
        myimg = himavanth;
        break;
      case "rahul":
        myimg = rahul;
        break;
      default:
        myimg = navya;
    }
    return myimg;
  }
  return (
    <div style={{ backgroundImage: `url(${adminBuilding})` }}>
      <h1 className="pt-3 mb-4" style={{ color: "#ffffff", fontWeight: 600 }}>
        Cast Your Vote
      </h1>
      <div className="row">
        {matterJson.map((matter) => (
          <div className="col-6 offset-3" key={matter.id}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={fetchMatterImage(matter.name)}
                    className="img-fluid rounded-start"
                    alt={matter.name}
                  />
                </div>
                <div className="col-md-8 text-start">
                  <div className="card-body">
                    <h3 className="card-title mb-3">{matter.fullName}</h3>
                    <i
                      className="card-text mb-5"
                      style={{ color: "lightslategrey" }}
                    >
                      {matter.summary}
                    </i>
                    <p className="card-text mt-5">
                      <button className="btn btn-lg btn-success">
                        Vote for {capitalizeName(matter.name)}
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastVote;
