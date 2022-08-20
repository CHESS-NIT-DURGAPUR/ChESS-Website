import React, { useState } from "react";
import "./Subject.css";
const Subject = () => {
  const [isTrue, setisTrue] = useState(false);
  const handleClick = () => {
    setisTrue(true);
  };
  return (
    <div className="container-fluid">
      <div className="box">
        <h2 className="neon" onClick={handleClick}>
          COURSE MATERIALS <i className="fa fa-angle-down"></i>
        </h2>
        { isTrue &&
        <div>
          {" "}
          <div className="row myRow">
            <div className="smallbox">
              <div className="boxheading1">FM</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1irwRtq3cAY0169EkYUXcoX2fJjq9Wj4U" rel="noopener noreferrer" target="_blank">
                  Fluid Mechanics
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">4th sem</div>
            </div>
            <div className="smallbox">
              <div className="boxheading1">PC</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1iZP0fLS3pgOumPUaZm3XyOb1AFatq6O_" rel="noopener noreferrer" target="_blank">
                  Process Calculations
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">3rd sem</div>
            </div>
            <div className="smallbox">
              <div className="boxheading1">CET</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1VwHiIsJWDSUCjnto2GlN_SwAQkcuLIoB" rel="noopener noreferrer" target="_blank">
                  Engineering Thermodynamics
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">3rd sem</div>
            </div>
            <div className="smallbox">
              <div className="boxheading1">MT</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1NvEuyx61g3WdSObZtBomr4WiyiYmNaKr" rel="noopener noreferrer" target="_blank">
                  Mass Transfer
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">3rd sem</div>
            </div>
          </div>
          <div className="row myRow">
            <div className="smallbox">
              <div className="boxheading1">HT</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1VWSeHPkx_Uj3uliSd7IERrD7kfMAWjnI" rel="noopener noreferrer" target="_blank">
                  Heat Transfer
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">4th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">MO</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1xbc_mBBttYSNQGpRrXiRRk-pjXRQIeC_" rel="noopener noreferrer" target="_blank">
                  Mechanical Operations
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">4th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">CRE</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=18irKjPEkOIeQtRL5JiFmXwh6TAFPxht3" rel="noopener noreferrer" target="_blank">
                  Reaction Engineering
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">5th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">CPT</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1O5PxFG_pBGR49vBT19eo5KAA3aypNplr" rel="noopener noreferrer" target="_blank">
                  Process Technology
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">5th sem</div>
            </div>
          </div>
          <div className="row myRow">
            <div className="smallbox">
              <div className="boxheading1">PCI</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1xbc_mBBttYSNQGpRrXiRRk-pjXRQIeC_" rel="noopener noreferrer" target="_blank">
                  Process Control And Instrumentation
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">5th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">TP</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1XwPFxbxA78zvJcdJnrcnJVCfKPkqpeMA" rel="noopener noreferrer" target="_blank">
                  Transport Phenomena
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">6th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">POM</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1a0Mq1qaPyA9UrNYp-Zh_UcY2geyEtvo4" rel="noopener noreferrer" target="_blank">
                  Industrial Pollution Control And Treatment
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">6th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">PE</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1qQX9tCjtynLb8xQrqakN1iAPPHn3ywbV" rel="noopener noreferrer" target="_blank">
                  Plant Design And Economics
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">8th sem</div>
            </div>
          </div>
          <div className="row myRow">
            <div className="smallbox">
              <div className="boxheading1">BHT</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1QWbwNAgC4tZuZ8SsmHuPEHrvEvwWJEc4" rel="noopener noreferrer" target="_blank">
                  Boiling Heat Transfer
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">8th sem</div>
            </div>

            <div className="smallbox">
              <div className="boxheading1">ESU</div>
              <div className="boxheading2">
                <a href="https://drive.google.com/open?className=1r5qKc4hoa2V0aM6sW1oohiuPKJpqGvko" rel="noopener noreferrer" target="_blank">
                  Energy Sources and Utilization
                </a>
              </div>
              <div className="boxheading3">B.tech</div>
              <div className="boxheading3">8th sem</div>
            </div>
          </div>
        </div>
}
      </div>
    </div>
  );
};

export default Subject;
