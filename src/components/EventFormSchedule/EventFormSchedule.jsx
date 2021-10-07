import React from 'react';

const EventFormSchedule = ({ events, month, selectEvent, delEvent, isAuthenticated }) => {
  return (
    <React.Fragment>
      {events.map((item, i) => {
        var d = new Date(item.date);
        var t = new Date();
        var uptodate = t < d;
        return isAuthenticated ? (
          <div className="block d-flex flex-row" key={i} onClick={() => selectEvent(item)}>
            {i % 2 === 0 && (
              <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                <h1>{d.getDate()}</h1>
                <h2>{month[d.getMonth()]}</h2>
              </div>
            )}
            {i % 2 === 1 && (
              <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                <h1>{d.getDate()}</h1>
                <h2>{month[d.getMonth()]}</h2>
              </div>
            )}
            <div className="details d-flex flex-column align-items-stretch justify-content-between">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h3 className="align-self-stretch">{item.title}</h3>
                {isAuthenticated && (
                  <i className="far red fa-trash-alt  mr-3" onClick={() => delEvent(item)}></i>
                )}
              </div>
              <div className="d-flex flex-row justify-content-start align-items-baseline">
                {i % 2 === 0 && <i className="fas fa-map-marker-alt red"></i>}
                {i % 2 === 1 && <i className="fas fa-map-marker-alt green"></i>}
                {i % 2 === 0 && <h4 className="red">{item.location}</h4>}
                {i % 2 === 1 && <h4 className="green">{item.location}</h4>}
                <i className="fas fa-user"></i>
                <h4>{item.organisator}</h4>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            {uptodate && (
              <div className="block d-flex flex-row" key={i} onClick={() => selectEvent(item)}>
                {i % 2 === 0 && (
                  <div className="date bgRed d-flex flex-column justify-content-center align-items-center">
                    <h1>{d.getDate()}</h1>
                    <h2>{month[d.getMonth()]}</h2>
                  </div>
                )}
                {i % 2 === 1 && (
                  <div className="date bgGreen d-flex flex-column justify-content-center align-items-center">
                    <h1>{d.getDate()}</h1>
                    <h2>{month[d.getMonth()]}</h2>
                  </div>
                )}
                <div className="details d-flex flex-column align-items-stretch justify-content-between">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <h3 className="align-self-stretch">{item.title}</h3>
                    {isAuthenticated && (
                      <i className="far red fa-trash-alt mr-3" onClick={() => delEvent(item)}></i>
                    )}
                  </div>
                  <div className="d-flex flex-row justify-content-start align-items-baseline">
                    {i % 2 === 0 && <i className="fas fa-map-marker-alt red">here</i>}
                    {i % 2 === 1 && <i className="fas fa-map-marker-alt green">hore</i>}
                    {i % 2 === 0 && <h4 className="red">{item.location}</h4>}
                    {i % 2 === 1 && <h4 className="green">{item.location}</h4>}
                    <i className="fas fa-user"></i>
                    <h4>{item.organisator}</h4>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default EventFormSchedule;
