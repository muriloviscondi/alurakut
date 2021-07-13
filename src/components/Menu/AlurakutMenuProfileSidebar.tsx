import { AlurakutProfileSidebarMenuDefault } from 'components/SidebarMenuDefault/AlurakutProfileSidebarMenuDefault';

type UserProps = {
  githubUser: string;
};

export function AlurakutMenuProfileSidebar(props: UserProps) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img
          src={`https://github.com/${props.githubUser}.png`}
          style={{ borderRadius: '8px' }}
        />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${props.githubUser}`}>
            @{props.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  );
}
