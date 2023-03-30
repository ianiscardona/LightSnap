export const Frames = (props) => {
  const toggleClassCheck = (isActive) =>
    isActive ? "border-8 border-[#DBFF00]" : null;

  // const longPressDur = () => {
  //   props.setLongPress(!props.longPress);
  // };

  return (
    <button
      onContextMenu={(e) => e.preventDefault()}
      onTouchStart={() => {
        props.setActiveId(props.id);
        // setTimeout(longPressDur, 250);
        props.setLongPress(true); //Show FramePreview
      }}
      onTouchEnd={() => {
        props.setActiveId(props.id);
        // setTimeout(longPressDur, 250);
        props.setLongPress(false); //Hide FramePreview
      }}
      // onTouchMove={() => console.log("Touch Mover")}
      className={`w-[70px] h-[70px] relative overflow-hidden snap-start border-2 ${toggleClassCheck(
        props.isActive
      )} sm:w-[77px] sm:h-[77px] transition-all duration-300`}
    >
      <img
        onContextMenu={(e) => e.preventDefault()}
        className="overflow-hidden object-cover removeTouch"
        src={`../icons/frameicon/${props.icon}`}
        alt=""
      />
    </button>
  );
};
