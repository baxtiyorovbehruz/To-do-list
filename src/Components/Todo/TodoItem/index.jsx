import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { memo } from 'react';
function TodoItem({
  item,
  index,
  handleClickDelete,
  handleClickEdit,
  clickedCheckBox,
}) {
  return (
    <div className="box">
      <p>{item.title}</p>
      <input
        onChange={() => clickedCheckBox(index)}
        className="checkbox"
        type="checkbox"
        checked={item.isDone}
      />
      <button onClick={() => handleClickEdit(item, index)} className="edit">
        <EditIcon fontSize="5px" />
      </button>
      <button onClick={() => handleClickDelete(index)} className="del">
        <DeleteIcon fontSize="5px" />
      </button>
    </div>
  );
}
export default memo(TodoItem);
