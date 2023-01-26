import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const notice = { text: 'Under construction' };
    dispatch(checkStatus(notice));
  };
  const statusCheck = useSelector((state) => state.category);

  return (
    <div className="status-btn">
      <button type="button" className="check-status" onClick={handleClick}>
        check status
      </button>
      {statusCheck.map((status) => (
        <p key={status.id}>{status.text}</p>
      ))}
    </div>
  );
};
export default Categories;
