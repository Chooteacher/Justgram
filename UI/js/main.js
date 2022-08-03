/*const comment = document.querySelector("comment");
const commentButton = document.querySelector("#comment-button");
const commentBox = document.querySelector("comment-box");
*/

// 텍스트를 추가하는 함수
// 텍스트 입력창의 값을 가져와 텍스트 영역에 추가
function addcomment() {
  const comment = document.getElementById("comment").value;
  const commentItem = document.createElement("li");
  commentItem.innerText = comment;

  document.getElementById("comment-list").appendChild(commentItem);
}

const addButton = document.getElementById("comment-button");
addButton.addEventListener("click", addcomment);
// 버튼 클릭 이벤트리스너
