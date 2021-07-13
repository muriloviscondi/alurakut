import { Styles } from './style';

type UserProps = {
  user: string;
};

export function ProfileSideBar(props: UserProps) {
  return (
    <Styles>
      <img
        src={`https://github.com/${props.user}.png`}
        alt="foto do perfil"
        style={{ borderRadius: '8px' }}
      />
    </Styles>
  );
}
