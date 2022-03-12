import CompRoundRectSchedule from '../CompRoundRectSchedule/CompRoundRectSchedule';
import CompRoundRectMap from '../CompRoundRectMap/CompRoundRectMap';
import CompRoundRectText from '../CompRoundRectText/CompRoundRectText';
import CompRoundRectList from '../CompRoundRectList/CompRoundRectList';

const ModalTrainingTraining = ({ contentTraining }) => {
  return (
    <div className="Training">
      <div className="modal-col">
        <div className="bg-training"></div>
        <h1 className="bigger">{contentTraining.title}</h1>
        <CompRoundRectSchedule schedule={contentTraining.schedule} apdx="_tr" />
        <CompRoundRectMap map={contentTraining.map} apdx="_tr" />
        <CompRoundRectText text={contentTraining.text} apdx="_tr" />
        <CompRoundRectList list={contentTraining.beitrag} apdx="_tr" />
      </div>
    </div>
  );
};

export default ModalTrainingTraining;
