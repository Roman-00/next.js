import React from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {

  const [rating, setRating] = React.useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Hello World</Htag>
      <Button appearanse="ghost" arrow="right">Ghost</Button>
      <Button appearanse="primary" arrow="right">Primary</Button>
      <P size="s">Маленький</P>
      <P size="m">Средний</P>
      <P size="l">Большой</P>
      <Tag size="s" color="green">S - green</Tag>
      <Tag size="m" color="primary">M - Primary</Tag>
      <Tag size="s" color="grey" href="https://yandex.kz">S - Green - Href</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);