// 변수 addButton, comment에 각각 button과 input을 저장
// commentList에 comment-list를 저장
const addButton = Array.from(document.getElementsByClassName("comment-button"));
const comment = Array.from(document.getElementsByClassName("comment"));
const commentList = document.getElementsByClassName("comment-list");

// click
addButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    const content = comment[index].value;

    const commentItem = document.createElement("p"); // commentItem라는 변수에 p태그를 만들어 담음
    commentItem.classList.add("comment-text"); // 만들어놓은 p태그에 comment-text라는 클래스를 추가

    const nameSpan = document.createElement("span");
    nameSpan.className = "comment-name";
    nameSpan.textContent = "Choo ";

    commentItem.append(nameSpan, content); // 위에서 생성한 p태그에 name과 content를 추가

    commentList[index].appendChild(commentItem); // 해당 index의 commetList에 생성한 p태그 추가

    comment[index].value = ""; // comment를 달고 난 뒤 input창 리셋
  });
});

// keyup
/* enter keycode = 13 */

comment.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      addButton[index].click();
    }
  });
});

//  클릭,keyup 이벤트리스너
// for (var i = 0; i < addButton.length; i++) {
//   addButton[i].addEventListener("click", function () {
//     console.log(i);
//   });
// }

//  comment.addEventListener("keyup", commentKeyUp);
//  텍스트를 추가하는 함수
//  텍스트 입력창의 값을 가져와 텍스트 영역에 추가
// function addcomment(e) {
//    let comment = document.getElementById("comment").value;
//    -> 이전에 사용한 방법

//    해당 feed에서 comment라는 id값을 가진 요소의 값을 가져옴
//   -> 변경한 이유 : feed가 여러개일 경우 id값을 가져오는 방식은 맞지않다고 판단함
//   let comment = e.target.previousElementSibling.value;
//   const commentItem = document.createElement("p");
//   commentItem.classList.add("comment-text");

//    commentItem.innerText = comment;

//   document.getElementById("comment-list").appendChild(commentItem);
//   let a =
//     e.target.parentNode.previousSibling.previousSibling.previousSibling
//       .previousSibling.appendChild;
//   console.log(a);

// }
