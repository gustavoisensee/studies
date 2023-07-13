import { getName } from '@nx-ws/utils';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div>
      Test 1 page
      {getName()}
    </div>
  );
}

export default NxWelcome;
