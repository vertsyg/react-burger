import { useAppSelector } from '../../types/hooks';
import { getUserName } from '../../services/selectors';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedProps {
  onlyUnAuth?: boolean;
  component: JSX.Element;
}

const Protected = ({onlyUnAuth = false, component}: ProtectedProps) => {
  const user = useAppSelector(getUserName)
  const location = useLocation();

  if (onlyUnAuth && user) {
      const {from} = location.state || {from: {pathname: "/"}}
      return <Navigate to={from}/>;
  }

  if (!onlyUnAuth && !user) {
      return <Navigate to="/login" state={{from: location}}/>
  }

  return component
}

export const OnlyAuth = Protected;

export const OnlyUnAuth = ({component}: { component: JSX.Element }) => (
    <Protected onlyUnAuth={true} component={component}/>
);