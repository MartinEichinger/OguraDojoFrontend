import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';
import Button from '../Button/Button';
import { IconFileTypePdf } from '@tabler/icons-react';
import { IArticle } from '../Bookshop/Bookshop';

export default function BookCard({
  props,
  setArticle,
  keys,
}: {
  props: any;
  setArticle: Function;
  keys: any;
}) {
  var { img, author, title, sub_title, content, reading_sample, publisher, book_detail, iban, price } =
    props;
  var themeContext = useContext(ThemeContext)!;

  return (
    <CardBody className="Cards d-flex flex-row" key={keys} img={img}>
      <div className="img" id="modalCard"></div>
      <div className="cardBody d-flex flex-column justify-content-between">
        <div className="headings">
          <h4 className="blue">{author}</h4>
          <h1>{title}</h1>
          <h3 className="blue">{sub_title}</h3>
        </div>
        <p className="content">{content}</p>
        <div className="readingSample d-flex flex-column">
          <p>Leseprobe:</p>
          <IconFileTypePdf size={24} color={themeContext.colors.typoGreen} />
        </div>
        <div className="footer d-flex flex-row justify-content-between align-items-end">
          <div className="bookDetails">
            <p className="greens">Herausgeber: {publisher}</p>
            <p className="greens">{book_detail}</p>
            <p className="greens">{iban}</p>
          </div>
          <Button
            id="order"
            size={2}
            color={themeContext.colors.bgGreen}
            onClick={() =>
              setArticle({
                img: img,
                name: title,
                amount: 1,
                price: price,
                subname: sub_title,
              } as IArticle)
            }
          >
            Bestellen
          </Button>
        </div>
      </div>
    </CardBody>
  );
}

const CardBody = styled.div<{ img: string }>`
  width: 640px;
  height: 420px;
  box-shadow: 10px 10px 25px 0px ${(props) => props.theme.colors.shadowGrey};
  border-radius: 5px;
  margin: 20px 20px;
  padding: 0px;
  font-family: Lato, cursive;
  background-color: ${(props) => props.theme.colors.bgWhite};
  border: none;
  outline: none;

  ${(props) => props.theme.breakpoints.mq[2]} {
    height: 300px;
  }

  ${(props) => props.theme.breakpoints.mq[1]} {
    height: 250px;
    margin: 15px 10px;
  }

  ${(props) => props.theme.breakpoints.mq[0]} {
    height: 200px;
    min-width: 390px;
    margin: 10px 0px;
  }

  & .bold {
    font-weight: bold;
  }

  & .img {
    top: 0px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: 50% 20%;
    background-size: cover;
    border-radius: 5px 0px 0px 5px;
    min-width: 240px;
    height: 420px;
    margin: 0px;
    padding: 0px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      width: 35vw;
      min-width: 35vw;
      height: 300px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      width: 130px;
      min-width: 130px;
      height: 200px;
    }
  }

  & .cardBody {
    padding: 10px;
    height: 420px;

    ${(props) => props.theme.breakpoints.mq[2]} {
      height: 300px;
      padding: 15px;
    }

    ${(props) => props.theme.breakpoints.mq[1]} {
      height: 250px;
    }

    ${(props) => props.theme.breakpoints.mq[0]} {
      height: 200px;
      padding: 10px;
    }

    & .headings {
      & h1 {
        text-align: left;
        padding-bottom: 8px;
        margin: 0px;
        font-size: 20px;
      }

      & h3 {
        text-align: left;
        padding-bottom: 8px;
        margin: 0px;
        font-size: 16px;
      }

      & h4 {
        text-align: left;
        padding-bottom: 8px;
        margin: 0px;
        font-size: 14px;
      }
    }

    & .content {
      height: 145px;
      color: black;
      text-align: left;
      padding-bottom: 0px;
      margin: 0px;
      font-size: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & .readingSample {
      & p {
        padding-bottom: 0px;
        margin: 0px;
      }
    }

    & .bookDetails {
      & p {
        text-align: left;
        padding-bottom: 0px;
        margin: 0px;
        font-size: 14px;
      }
    }
  }
`;
