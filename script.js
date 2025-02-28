let pressedKey;

document.addEventListener("keydown", FindPressedKey);
document.addEventListener("keyup", resetPressedKey)

function FindPressedKey(event) {
    pressedKey = event.key.toUpperCase(); // 입력된 키를 대문자로 변환

    // 모든 키 요소 가져오기
    let keyElements = document.querySelectorAll(".key");

    // 키 스타일 초기화
    keyElements.forEach(key => key.style.backgroundColor = "white");

    // 입력한 키와 일치하는 요소 찾기
    let targetKey = Array.from(keyElements).find(key => key.textContent.trim().toUpperCase() === pressedKey);

    targetKey.style.backgroundColor = "lightblue"; // 파란색으로 변경
}

function resetPressedKey(event) {
    pressedKey = event.key.toUpperCase();

    let keyElements = document.querySelectorAll(".key")

    keyElements.forEach(key => key.style.backgroundColor = "white");

    let targetKey = Array.from(keyElements).find(key => key.textContent.trim().toUpperCase() === pressedKey)

    targetKey.style.backgroundColor = "white"
}