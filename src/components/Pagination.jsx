function Pagination({ handlePrev, handleNext, pageNo }) {
  return (
    <div className="bg-gray-400 flex justify-center mt-8 p-4">
      <div onClick={handlePrev} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
