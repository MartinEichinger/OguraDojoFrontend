import styled from 'styled-components';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Events from './ModalCompL1Events';
import '../animation.css';

export default function ModalEvents({ lang }: { lang: string }) {
  const debug = false;

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const content = {
    title: 'Termine',
  };

  var today = new Date();
  const query = `query {
    event_data  (filter: {seminar_date: {_gt: "${today.toISOString()}"}}) {
        translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            seminar_title
        }
        seminar_date
        seminar_location
        seminar_trainer
        seminar_organiser
        invitation_to_tender {
            id
        }
    }
  }`;

  const contentEvents = useGraphQLQuery(query);
  if (debug) console.log('ModalEvents/Results', contentEvents);

  return (
    <>
      <div
        className="modal fade"
        id="idModalEvents"
        tabIndex={-1}
        aria-labelledby="ModalEventsLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <ModalDialog
          className="modal-dialog d-flex flex-row-reverse align-items-center"
          id="modalDialog"
        >
          <div className="modal-content">
            <div className="modal-row">
              <ModalInNavigation config={configNav} />
              {/* eslint-disable-next-line */}
              {contentEvents && (
                <ModalCompL1Events content={content} events={contentEvents.event_data} />
              )}
            </div>
          </div>
        </ModalDialog>
      </div>
    </>
  );
}

const ModalDialog = styled.div`
  width: 100vw;
  max-width: 1440px;
  height: calc(100vh);
  z-index: 1051;
  overflow: hidden;
  margin: 0 auto;

  & .modal-content {
    background-color: rgba(0, 0, 0, 0);
    border: none;

    & .modal-row {
      height: calc(100vh - 4px);
      margin: 2px;
      display: grid;
      grid-column-gap: 2px;
      grid-template-columns: 1fr 50px;
      grid-template-rows: 1fr 7fr 1fr;

      ${(props) => props.theme.breakpoints.mq[2]} {
        // bis 960 px
        grid-template-columns: 1fr 39px;
      }

      ${(props) => props.theme.breakpoints.mq[1]} {
        // bis 600 px
        grid-template-columns: 1fr 34px;
      }

      ${(props) => props.theme.breakpoints.mq[0]} {
        // bis 400px
        grid-template-columns: 1fr 29px;
      }
    }
  }
`;
