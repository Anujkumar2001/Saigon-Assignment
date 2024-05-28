import React from "react";
import { useNavigate } from "react-router-dom";
import childimg1 from "../../images/childimg1.jpg";
import childimg2 from "../../images/childimg2.jpg";
import childimg3 from "../../images/childimg3.jpg";

export const AcademicPrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      image: childimg1,
      iconSrc: "assets/images/tl-4/program-1.png",
      category: "Collage Life",
      title: "Morbi hendrerit pharetra nonce.",
      description:
        "Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.",
    },
    {
      id: 2,
      image: childimg2,
      iconSrc: "assets/images/tl-4/program-3.png",
      category: "Athletics",
      title: "Morbi hendrerit pharetra nonce.",
      description:
        "Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.",
    },
    {
      id: 3,
      image: childimg3,
      iconSrc: "assets/images/tl-4/program-2.png",
      category: "Academics",
      title: "Morbi hendrerit pharetra nonce.",
      description:
        "Morbi hendrerit pharetra nunc, eget suscipit lectus posuere quis varius natoque penatibus et magnis dis parturient montes.",
    },
  ];

  const handleMoreDetails = (program) => {
    // Store selected program details in sessionStorage
    sessionStorage.setItem("selectedClass", JSON.stringify(program));

    // Navigate to the details page
    navigate("/deatilsPages");
  };

  return (
    <section
      className="tl-4-programs tl-3-section-spacing"
      data-bg-color="#F3F1F1"
    >
      <div className="container">
        <h2 className="tl-4-section-title">
          Academic <span className="last-word">programs</span>
        </h2>

        <div className="row g-4 tl-4-programs-row">
          {programs.map((program) => (
            <div key={program.id} className="col-lg-4 col-md-6">
              <div className="tl-4-program">
                <div className="tl-4-program-heading">
                  <img src={program.iconSrc} alt="Icon" />
                  <div className="tl-4-program-heading-txt">
                    <h4 className="tl-4-program-title">{program.category}</h4>
                    <h6 className="tl-4-program-sub-title">{program.title}</h6>
                  </div>
                </div>
                <img
                  src={program.image}
                  alt="Program Image"
                  className="tl-4-program-img"
                />
                <div className="tl-4-program-txt">
                  <p className="tl-4-program-descr">{program.description}</p>
                  <button
                    onClick={() => handleMoreDetails(program)}
                    className="tl-4-program-btn"
                  >
                    Learn More <i className="fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
