import React, { useEffect, useState } from 'react';
import PopulerClass from './PopulerClass';

const PopulerClasses = () => {
     const [classesData,setClasses] = useState([])
     useEffect( () =>{
      fetch('https://side-of-server.vercel.app/payments')
      .then(res => res.json())
      .then(data => {
       console.log(data)
       setClasses(data)
      })
     }, []);
console.log(classesData)

    // const classesData = [
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Guitar Lessons',
    //       description: 'Learn various guitar techniques, chords, and songs.',
    //     },
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Piano/Keyboard Lessons',
    //       description: 'Develop skills in playing the piano or keyboard and learn to read sheet music.',
    //     },
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Singing/Vocal Classes',
    //       description: 'Improve your singing skills, breath control, pitch, and performance abilities.',
    //     },
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Drum Lessons',
    //       description: 'Learn drumming techniques, coordination, and different drumming styles.',
    //     },
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Violin Lessons',
    //       description: 'Master the violin and learn classical music techniques and finger placement.',
    //     },
    //     {
    //       classesImg: 'https://i.ibb.co/CWRz0jg/little.jpg',
    //       title: 'Music Production/Music Technology',
    //       description: 'Explore the art of recording, mixing, and producing music using digital tools.',
    //     },
    //   ];
    return (
      <div className='mt-28'>
        <div className='mb-10'>
        <h2 className="text-2xl font-bold my-10 text-center">Our Music  Classes</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-4">
      {classesData.map((classItem, index) => (
        <PopulerClass key={classItem._id} classItem = {classItem} />
      ))}
    </div>
    </div>
    );
};

export default PopulerClasses;