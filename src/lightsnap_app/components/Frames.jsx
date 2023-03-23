export const Frames = (props) => {
  const toggleClassCheck = (isActive) =>
    isActive ? "border-8 border-[#DBFF00]" : null;

  return (
    <div>
      <button
        onTouchStart={() => {
            props.setActiveId(props.id);
            props.setLongPress(true); //Show FramePreview
        }}
        onTouchEnd={() => {
            props.setActiveId(props.id);
            props.setLongPress(false); //Hide FramePreview
        }}
        className={`w-[70px] h-[70px] relative overflow-hidden snap-start border-2 ${toggleClassCheck(
          props.isActive
        )} sm:w-[77px] sm:h-[77px] transition-all duration-300`}
      >
        <img
          className="overflow-hidden object-cover"
          src={`../icons/frameicon/${props.icon}`}
          alt=""
        />
      </button>
    </div>
  );
};
