import { useState } from "react";
import group from "./assets/Group 28.png";
import icon1 from "./assets/icon1.png";
import circle from "./assets/Ellipse 2.png";
import Value from "./componets/value";

function App() {
  return (
    <div className="bg-black text-white flex">
      <div className="w-[490px] h-[358px] p-10 relative">
        <div className="w-full h-[109px] flex items-center bg-[#0067C5] border-[3px] border-[#3DD1F7] rounded-xl justify-center shadow-xl shadow-blue-500/40">
          <div className="relative w-[61px] h-[61px] mr-5">
            <span>
              <img src={circle} alt="" />
            </span>
            <span className="absolute top-[20%] left-[20%] h-[38px] w-[38px]">
              <img src={icon1} alt="" />
            </span>
          </div>
          <div className="w-[226px] text-center font-extrabold text-lg leading-6">
            <p >Nâng cao Phản Xạ</p>
            <p >Nghe - Nói</p>
          </div>
        </div>
        <div className="absolute top-[130px] left-[80px]">
          <img src={group} alt="" />
        </div>
        <div
          className="w-full h-[249px] mt-4 p-6 flex items-center bg-[#EBFAFE] text-[#0056B8] text-lg font-normal border-[3px] border-[#3DD1F7] rounded-lg justify-center shadow-lg shadow-blue-500/40"
        >
          Với hình thức học trực tuyến 1 kèm 1, giáo viên sẽ là người đồng hành
          cùng con để chỉnh sửa các lỗi chi tiết. Tại SpeakWell, chúng tôi áp
          dụng công nghệ trí tuệ nhân tạo (AI) giúp bám trẻ luyện phát âm chuẩn
          quốc tế, đồng thời nâng cao năng lực phản xạ ngôn ngữ.
        </div>
      </div>
      <Value/>
    </div>
  );
}

export default App;
