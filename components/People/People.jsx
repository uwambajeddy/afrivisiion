import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const People = () => {

  
  const profiles = [
    { name: 'Eddy UWAMBAJE', position: 'Eddy is the tech figure with outstanding courage and ethusiasm towards the team and always tackles hard ach ', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225082/eddy-afrivision_emaqny.png' },
    { name: 'Joshua INTWARI', position: 'Joshua  is a charismatic leader who brings motivatio and seriousness in the team in order for the work to be done on time. ', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225083/Opera_Snapshot_2024-01-30_200115_web.whatsapp.com_jelbha.png' },
    { name: 'Olivier UWAMUNGU', position: 'Olivier is a fellow who brings personality to the team, making everyone confident in their abilities', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225082/WhatsApp_Image_2024-01-30_at_5.58.23_PM_itkfbu.png' },
    { name: 'Luis YESANI', position: 'Luis is an individual who check whether the work produced has excellent quality to ensure high marks on assignments', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225082/WhatsApp_Image_2024-01-30_at_3.15.19_PM_rbxstk.png' },
    { name: 'Louis MANZI', position: 'Louis brings wonderful ideas to complex situations which saves us a lot of time for he comes up with answers, and the rest make to put them in action', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225289/Opera_Snapshot_2024-03-23_222102_docs.google.com_gh32vv.png' },
    { name: 'Olivier ISHIMWE', position: 'Olivier is a character that brings fun in the team by making jokes and also checking up on the due dates of assignments to ensure we are still on track', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711225082/WhatsApp_Image_2024-01-30_at_2.26.06_PM_ajafmx.png' },
    // Add more profiles as needed
];

const UserCarousel = ({ profiles }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 2000,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    };

    return (
        <Slider {...settings}>
            {profiles.map((profile, index) => (
                <div key={index}>
                    <div className="bg-white p-4 mx-3 rounded-lg shadow">
                        <img src={profile.imageUrl} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-center m-3">{profile.name}</h2>
                        <p className="text-gray-600 text-center h-28">{profile.position}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
};



  return (
    <section className="px-4 py-16 bg-gray-100">
      <a href="#team" id="team" className="hidden focus:outline-none">Team</a>

      <div className="container mx-auto max-w-7xl ">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Our team</h2>


        <div className="container mx-auto mt-8">
            <UserCarousel profiles={profiles} />
        </div>
      </div>
    </section>
  );
};

export default People;
