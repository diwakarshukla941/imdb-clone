function Banner() {
  return (
    <div
      className="relative h-[20vh] md:h-[75vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`,
      }}
    >
      <div className="absolute inset-x-0 bottom-0 text-white text-lg md:text-xl bg-gray-900 bg-opacity-70 w-full py-2 text-center">
        Avengers Endgame
      </div>
    </div>
  );
}

export default Banner;
