import Link from 'next/link';
import React from 'react';
import { AlurakutMenuProfileSidebar } from './AlurakutMenuProfileSidebar';
import { Logo, Wrapper } from './style';

type UserProps = {
  githubUser: string;
};

export function AlurakutMenu(props: UserProps) {
  const [isMenuOpen, setMenuState] = React.useState(false);

  const BASE_URL = 'http://alurakut.vercel.app/';
  const v = '1';

  return (
    <Wrapper>
      <div className="container">
        <Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[
            { name: 'Inicio', slug: '/' },
            { name: 'Amigos', slug: '/amigos' },
            { name: 'Comunidades', slug: '/comunidades' }
          ].map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={``} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={props.githubUser} />
    </Wrapper>
  );
}
