import { getName } from '@nx-ws/utils';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div>
      Shop page
      {getName()}
    </div>
  );
}

export default NxWelcome;
