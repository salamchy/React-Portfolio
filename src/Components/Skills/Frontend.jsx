import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Frontend = () => {

    useEffect(() => {
        AOS.init({
          disable: 'mobile',
          delay: 100,
        });
        AOS.refresh();
      }, []);

  return (
    <div data-aos="fade-right" className="skills__content">
        <h3 className="skills__title"> Frontend Developer </h3>

        <div className="skills__box">
            <div className="skills_group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> HTML </h3>
                    <span className="skills__level"> Basic </span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> CSS </h3>
                    <span className="skills__level"> Intermedite </span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> JavaScript </h3>
                    <span className="skills__level"> Intermediate </span>
                </div>
                </div>

            </div>

            <div className="skills_group">
                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> BootsTrap</h3>
                    <span className="skills__level"> Intermediate </span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> Git </h3>
                    <span className="skills__level"> Intermediate </span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>

                <div>
                    <h3 className="skills__name"> ReactJs </h3>
                    <span className="skills__level"> Basic </span>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Frontend