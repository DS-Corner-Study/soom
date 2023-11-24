import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  /* 전달받은 props 가져오기 */
  const [content, setContent] = useState("");

  /* 폼 데이터 저장할 State 변수 */

  const inputRef = useRef();

  /* 입력 폼을 제어할 객체 생성 */

  const onChangeContent = (e) => {
    /* 이벤트 핸들러 */
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef} /* inputRef는 현재값, 요소 저장 */
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
