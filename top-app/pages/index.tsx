import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Hello World</Htag>
      <Button appearanse="primary" className="home__button">Клик</Button>
      <Button appearanse="ghost">Ghost</Button>
      <Button appearanse="primary">Primary</Button>
    </div>
  )
}