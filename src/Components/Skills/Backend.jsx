import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Backend = () => {

    useEffect(() => {
        AOS.init({
          disable: 'mobile',
          delay: 100,
        });
        AOS.refresh();
      }, []);

  return (
    <div data-aos="fade-left" className="skills__content">
    <h3 className="skills__title"> Backend </h3>

    <div className="skills__box">
        <div className="skills_group">
            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> PHP </h3>
                <span className="skills__level"> Basic </span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> Python </h3>
                <span className="skills__level"> Intermediate </span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> Node Js </h3>
                <span className="skills__level"> Basic </span>
            </div>
            </div>

        </div>

        <div className="skills_group">
            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> MySQL </h3>
                <span className="skills__level"> Intermediate </span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> JAVA </h3>
                <span className="skills__level"> Basic </span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>

            <div>
                <h3 className="skills__name"> SQL </h3>
                <span className="skills__level"> Intermediate </span>
            </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Backend