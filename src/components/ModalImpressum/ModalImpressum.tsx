import styled from 'styled-components';
import ModalInNavigation from '../ModalInNavigation/ModalInNavigation';
import ModalCompL1Impressum from './ModalCompL1Impressum';
import useGraphQLQuery from '../../hooks/useGraphQLQuery';
import '../animation.css';

export interface IContentImpressum {
  title: string;
  impressum: {
    id: number;
    translations: {
      impressum: string;
    }[];
  };
}

export default function ModalImpressum({ lang }: { lang: string }) {
  // Debugging
  const debug = false;

  const query = `query {
    content_impressum {
      id
      translations (filter: {languages_code: {code: {_eq: "${lang}"}}}) {
        impressum
      }
  }
  }`;

  const contentImpressum = useGraphQLQuery(query);

  const configNav = {
    upDown: 0,
    pagItems: 4,
    navItems: [],
  };

  const configContent: IContentImpressum = {
    title: 'Impressum',
    impressum: contentImpressum?.content_impressum[0],
  };

  if (debug) console.log('ModalImpressum/Results', contentImpressum);

  return (
    <>
      <div
        className="modal fade"
        id="idModalImpressum"
        tabIndex={-1}
        aria-labelledby="ModalImpressumLabel"
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
              <ModalCompL1Impressum content={configContent} />
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
