import { AlurakutMenu } from 'components/Menu/AlurakutMenu';
import { OrkutNostalgicIconSet } from 'components/OrkutNostalgicIconSet';
import { ProfileRelationsBox } from 'components/ProfileRelationsBox';
import { ProfileSideBar } from 'components/Box/ProfileSideBar';
import { Styles } from 'components/Box/style';
import MainGrid from 'components/MainGrid';

export default function Home() {
  const randomUser = 'muriloviscondi';

  return (
    <>
      <AlurakutMenu githubUser={randomUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar user={randomUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Styles>
            <h1 className="title">Bem vindo(a)</h1>

            <OrkutNostalgicIconSet />
          </Styles>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: 'profileRelationsArea' }}
        >
          <ProfileRelationsBox />
        </div>
      </MainGrid>
    </>
  );
}
