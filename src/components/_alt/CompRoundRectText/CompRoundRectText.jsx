const CompRoundRectText = ({ text }) => {
  return (
    <div className={'item align-items-center d-flex flex-md-row flex-column justify-content-between'}>
      <div className="circle d-flex flex-row align-items-center justify-content-center">
        <img src="was_24px_outlined.svg" alt="" />
        <p className="red bold">{text.title}</p>
      </div>
      <div className="rect d-flex align-items-center scroll_">
        <p>{text.text}</p>
      </div>
    </div>
  );
};

export default CompRoundRectText;
