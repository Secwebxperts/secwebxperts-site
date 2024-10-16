import { useEffect, useState } from "react";
import style from "./portfolio.module.css";

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
    <div className="min-h-screen mb-[200px] bg-white  h-auto">
      <div className="bg-[url('/solerIcon/_Group_.png')] bg-contain bg-no-repeat  h-30 w-25">
        <div className="text-center my-11 mb-18">
          <h2 className="text-[36px] font-[600] mt-[-12] text-[#FF9D00] font-poppins">
            OUR AWESOME PORTFOLIO
          </h2>
          <p className="text-[16px] font-[500] text-[#546E7A]">
            Our Journey Through Successful Solutions
          </p>
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
                src="/sliderImages/Home page 1.png"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
