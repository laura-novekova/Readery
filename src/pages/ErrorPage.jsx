import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <p>Opps, you got lost...</p>
      <Link
        to="/"
        type="button"
        className="font-bold text-l text-white bg-sky-900 ml-3 flex rounded-md max-h-8 p-1 "
      >
        <IoMdArrowBack />
        <p className="ml-1 text-xs"> Go back home</p>
      </Link>
    </div>
  );
};

export default ErrorPage;
