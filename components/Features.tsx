import React, { useState } from 'react';

const ItemList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [
        { id: 1, name: 'Challenge 01: Introduction', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711254546/image_2024-03-24_062859182_tkkfu6.png', youtubeId: 'vlnoSz-c7b8?si=aQfPme1JBOzThNT-' },
        { id: 2, name: 'Challenge 02: Discover Africa', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711255404/_image_2024-02-24_210334188_11zon_gqvwjk.jpg', youtubeId: 'CV6QbPbZFmQ?si=pq2rWL93eNPe-UEk' },
        { id: 3, name: 'Challenge 03: HELP-LAB', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711253611/image_2024-02-24_210334188_11zon_g8ve9i.jpg', youtubeId: '7UEVFQExY2Q?si=ueceVtvEZehRvCRf' },
        { id: 4, name: 'Challenge 04: Hunt for Treasure', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711255136/__image_2024-02-24_210334188_11zon_z5ysjw.jpg', youtubeId: 'tyDF206YUlQ?si=ZG_4KnmL2Vl6rvg5' },
        { id: 5, name: 'Challenge 5: Launch Your Mission V2', imageUrl: 'https://res.cloudinary.com/dvibmdi1y/image/upload/v1711255454/Screenshot_978_yhbzyb.png', youtubeId: 'nx1SBXnc_z0?si=hsof3rwgPcwaN79x' },
        // Add more items as needed
    ];

    const openModal = (item: any) => {
      setSelectedItem(item);
      setModalOpen(true);
    };

    const closeModal = () => {
      setSelectedItem(null);
      setModalOpen(false);
    };

    return (
      <div className="container mx-auto mt-14">
        <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
         E-Lab
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Challenges</h2>
          </div>
      </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {items.map((item) => (
                   <div key={item.id} onClick={() => openModal(item)} className="relative group cursor-pointer  mb-10 max-w-96 mx-auto">
                   <img src={item.imageUrl} alt={item.name} className="w-full h-auto max-w-full rounded-lg mb-2 mx-auto" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-2xl">
                       <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white fill-current opacity-70 hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
                           <path d="M3 3a1 1 0 0 1 1.643-.765l12 9a1 1 0 0 1 0 1.53l-12 9A1 1 0 0 1 3 17V3z" />
                       </svg>
                   </div>
                   <p className=" bold-20 text-center">{item.name}</p>
               </div>
                ))}
            </div>
            {modalOpen && selectedItem && (
                <div onClick={closeModal} className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-75 flex justify-center items-center  z-50">
                    <div className="bg-white p-4 rounded-lg">
                        <button onClick={closeModal} className="absolute top-0 right-0 p-2">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <iframe
                            style={{width: "80%",
                              height: "70%",
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                              top: "50%",
                              left: "50%",}}
                            src={`https://www.youtube.com/embed/${selectedItem.youtubeId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                            
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemList;
