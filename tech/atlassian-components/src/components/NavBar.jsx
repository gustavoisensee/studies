import { useLocation, useNavigate } from 'react-router';
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo';
import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation';
import { Routes } from '../consts';

function NavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <AtlassianNavigation
      label='site'
      primaryItems={[
        <PrimaryButton
          onClick={() => navigate(Routes.Home)}
          isSelected={pathname === Routes.Home}
        >
          Home
        </PrimaryButton>,
        <PrimaryButton
          onClick={() => navigate(Routes.Users)}
          isSelected={pathname === Routes.Users}
        >
          Users
        </PrimaryButton>,
      ]}
      renderProductHome={() => (
        <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
      )}
    />
  );
}

export default NavBar;
