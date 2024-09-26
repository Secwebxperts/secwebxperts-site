import { useEffect, useState } from "react";
import style from "./portfolio.module.css";

// const images = ["src/assets/sliderImages/Home page 1.png"];

const Carousel = () => {
  const [currDeg, setCurrDeg] = useState(0);

  const rotate = () => {
    setCurrDeg((prevDeg) => prevDeg + -60);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotate();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-[700px] my-16">
      <div className="text-center my-11 mb-18">
        <p className="text-xl font-semibold text-[#FF9D00]">
          IDEAS COME TO LIFE
        </p>
        <h2 className="text-4xl font-bold mt-4">
          <span className="text-[#FF9D00]">OUR</span> AWESOME PORTFOLIO
        </h2>
      </div>
      <div className={`${style.container}`}>
        <div
          className={style.carousel}
          style={{ transform: `rotateY(${currDeg}deg)` }}
        >
          <div className={style.a}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="src/assets/sliderImages/Home page 1.png"
            />
          </div>
          <div className={style.b}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4t_thPQZpAj2oocVQP9SeD_gtciuwOVRs-g&s"
            />
          </div>
          <div className={style.c}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="https://i.pinimg.com/originals/13/be/95/13be95147b920e7c4ee958ff30db7a11.jpg"
            />
          </div>
          <div className={style.d}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pVYYW9w8tfsStqXYuauRXm840vDeqj6r4w&s"
            />
          </div>
          <div className={style.e}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="https://media.istockphoto.com/id/1292896611/photo/kogelbay-rugged-coast-line-with-spectacular-mountains-with-copy-space.jpg?s=612x612&w=0&k=20&c=PtBDbwoLldClx-vRSZLzrh0THXTPrY3e6ZD8gK7sdEQ="
            />
          </div>
          <div className={style.f}>
            <img
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcM4jI9Inx-nzR-CeNpCyf1xfHTHG09cWkjQ&s"
            />
          </div>
          {/* <div className={style.g}>
            <div
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
            >
              JUS
            </div>
          </div>
          <div className={style.h}>
            <div
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
            >
              ERNEST
            </div>
          </div>
          <div className={style.i}>
            <div
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
            >
              HOLA
            </div>
          </div>
          <div className={style.j}>
            <div
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
            >
              QUE
            </div>
          </div>
          <div className={style.k}>
            <div
              className={style.item}
              style={{ transform: `rotateY(${-currDeg}deg)` }}
            >
              TAL
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
