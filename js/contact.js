const instagram = document.querySelector(".instagram");
const facebook = document.querySelector(".facebook");
const github = document.querySelector(".github");
const tistory = document.querySelector(".tistory");

// form 요소와 submit 이벤트를 감지하는 코드
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", handleSubmit);

// localStorage에 저장된 contactList 데이터를 가져오는 함수
function getContactList() {
  const contactListStr = localStorage.getItem("contactList");
  if (contactListStr) {
    return JSON.parse(contactListStr);
  } else {
    return []; // 만약 localStorage에 없으면 배열형식으로 생성
  }
}

// localStorage에 contactList 데이터를 저장하는 함수
function saveContactList(contactList) {
  const contactListStr = JSON.stringify(contactList);
  localStorage.setItem("contactList", contactListStr);
}

// form 요소를 submit할 때 호출되는 함수
function handleSubmit(event) {
  event.preventDefault(); // 화면 리로드를 멈춰준다.

  // form 요소에서 입력된 데이터를 가져오는 코드
  const nameInput = document.getElementById("ct_name"); // fomr의 input
  const messageInput = document.getElementById("ct_description"); // fomr의 input
  const nameValue = nameInput.value; // input에 입력돼있는 값
  const messageValue = messageInput.value; // input에 입력돼있는 값

  // 현재 시간을 가져오는 코드
  const sendAt = new Date().toISOString();

  // contactList 데이터를 가져와서 새로운 데이터를 추가하는 코드
  const contactList = getContactList();
  const newContact = {
    name: nameValue,
    message: messageValue,
    sendAt: sendAt,
  };
  contactList.push(newContact);

  // 변경된 contactList 데이터를 localStorage에 저장하는 코드
  saveContactList(contactList);

  // 화면에 새로운 데이터를 출력하는 코드
  const contactListElement = document.querySelector(".contactList");
  const newContactElement = document.createElement("li");
  newContactElement.innerText = `${nameValue} - ${messageValue} (${sendAt})`;
  contactListElement.appendChild(newContactElement);

  // form 요소의 입력값을 초기화하는 코드
  myForm.reset();
}

// 초기화 함수
function init() {
  // localStorage에 저장된 contactList 데이터를 화면에 출력하는 코드
  const contactList = getContactList();
  const contactListElement = document.querySelector(".contactList");
  contactList.forEach((contact) => {
    const newContactElement = document.createElement("li");
    newContactElement.innerText = `${contact.name} - ${contact.message} (${contact.sendAt})`;
    contactListElement.appendChild(newContactElement);
  });
  setLocation();
}

// 페이지가 로드될 때 init 함수를 호출하는 코드
window.onload = init;

function setLocation() {
  instagram.addEventListener("click", () => {
    window.open("https://www.instagram.com/_m_inn/");
  });

  facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com/profile.php?id=100006204343226");
  });

  github.addEventListener("click", () => {
    window.open("https://github.com/smaivnn");
  });

  tistory.addEventListener("click", () => {
    window.open("https://with-min.tistory.com/");
  });
}
