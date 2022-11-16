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
          onClick={() => navigate(Routes.Page1)}
          isSelected={pathname === Routes.Page1}
        >
          Page 1
        </PrimaryButton>,
        <PrimaryButton
          onClick={() => navigate(Routes.Page2)}
          isSelected={pathname === Routes.Page2}
        >
          Page 2
        </PrimaryButton>,
      ]}
      renderProductHome={() => (
        <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
      )}
    />
  );
}

export default NavBar;
