import React from 'react';
import { useNavigate } from 'react-router-dom';


export const ResearchCard = () => {
  const navigate = useNavigate();
    const classes = [
      {
        image: 'assets/images/tl-4/innov-3.jpg',
        iconSrc: 'assets/images/tl-4/innov-icon-1.png',
        category: 'Health & Medicine',
        title: 'There are many variations of passages of Lorem Ipsum available.',
      },
      {
        image: 'assets/images/tl-4/innov-2.jpg',
        iconSrc: 'assets/images/tl-4/innov-icon-2.png',
        category: 'Science & Technology',
        title: 'There are many variations of passages of Lorem Ipsum available.',
      },
      {
        image: 'assets/images/tl-4/innov-1.jpg',
        iconSrc: 'assets/images/tl-4/innov-icon-3.png',
        category: 'Culture & Creativity',
        title: 'There are many variations of passages of Lorem Ipsum available.',
      },
    ];
  
    const handleMoreDetails = (classItem) => {
      // Store selected class details in sessionStorage
      sessionStorage.setItem('selectedClass', JSON.stringify(classItem));
      navigate('/deatilsPages');
    };
    return (
        <div className="row tl-7-classes-row">
          {classes.map((classItem, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <div className="tl-7-class tl-4-innov">
                <div className="tl-7-class-img">
                  <img src={classItem.image} alt="Innovation Background" />
                </div>
                <div className="tl-7-class-txt">
                  <div className="tl-7-class-icon">
                    <img src={classItem.iconSrc} alt="Class icon" />
                  </div>
                  <h3 className="tl-7-class-name">{classItem.category}</h3>
                  <p className="tl-7-class-descr">{classItem.title}</p>
                  <button onClick={() => handleMoreDetails(classItem)} className="tl-7-class-btn">
                    More Details <i className="fa-solid fa-angles-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}


