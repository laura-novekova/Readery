import { useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

export default function Layout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <div>
        {isPageLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <Header />
        )}
      </div>
    </>
  );
}
