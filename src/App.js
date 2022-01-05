import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Skills from './skills';

import User from './user';
import UserAge from './userAge';

function App() {
  return (
    <RecoilRoot>
      <User />
      <Skills/>
      <UserAge/>
    </RecoilRoot>
  );
}

export default App;
