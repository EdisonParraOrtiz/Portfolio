import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <box-icon name="badge-check"></box-icon>
              <h3 className="skills__name">Html</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <box-icon name="badge-check"></box-icon>
              <h3 className="skills__name">Css</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React js</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <box-icon name="badge-check"></box-icon>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
