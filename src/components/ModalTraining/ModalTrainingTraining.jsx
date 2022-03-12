import CompRoundRectSchedule from '../CompRoundRectSchedule/CompRoundRectSchedule';
import CompRoundRectMap from '../CompRoundRectMap/CompRoundRectMap';
import CompRoundRectText from '../CompRoundRectText/CompRoundRectText';
import CompRoundRectList from '../CompRoundRectList/CompRoundRectList';

const ModalTrainingTraining = ({ contentTraining }) => {
  return (
    <div className="csTrainingTR">
      <div className="modal-col">
        <div className="bg-training"></div>
        <h1 className="big">{contentTraining.title}</h1>
        <CompRoundRectSchedule schedule={contentTraining.schedule} />
        <CompRoundRectMap map={contentTraining.map} />
        <CompRoundRectText text={contentTraining.text} />
        <CompRoundRectList list={contentTraining.beitrag} />
      </div>
    </div>
  );
};

export default ModalTrainingTraining;
