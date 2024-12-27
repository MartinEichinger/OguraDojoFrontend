import Card from './Card';
import '../animation.css';

export default function CardsKarate({ props, keys }: { props: any; keys: any }) {
  return (
    <>
      <Card props={props} keys={keys} />
    </>
  );
}
