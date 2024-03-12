import { Link } from 'react-router-dom';
import style from '../pages/NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={style.message}>
      {`This page doesn't exist. Go`} <Link to="/">home</Link>
    </div>
  );
};
export { NotFoundPage };
