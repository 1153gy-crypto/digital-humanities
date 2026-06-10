// =====================
// 오프닝 타이핑 효과
// =====================

const typingTarget = document.getElementById("typingText");
const enterBtn = document.getElementById("enterBtn");

if (typingTarget && enterBtn) {
    const text = `
안녕하시오.

소관은 뒷골목 사관이라 하오.

정사는 승자의 기록을 남기지만,

그 이면에는 기록되지 못한

수많은 목소리들이 존재하오.

지금부터 그 행간 속으로

들어가 보시겠소?
`;

    let i = 0;

    function typing() {
        if (i < text.length) {
            typingTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 25 );
        } else {
            enterBtn.classList.add("show");
        }
    }

    typing();

    enterBtn.addEventListener("click", () => {
        const intro = document.getElementById("introScreen");
        const main = document.getElementById("mainContent");

        intro.classList.add("hide");

        setTimeout(() => {
            intro.style.display = "none";
            main.classList.add("show");
        }, 1000);
    });
}


// =====================
// 메인화면 정사 ↔ 야사 모드
// =====================

const modeToggle = document.getElementById("modeToggle");

if (modeToggle) {
    document.body.classList.add("jeongsamode");

    modeToggle.addEventListener("change", () => {
        const eventTitle = document.getElementById("mainEventTitle");
        const eventText = document.getElementById("mainEventText");
        const eventDesc = document.getElementById("mainEventDesc");

        if (modeToggle.checked) {
            document.body.classList.add("yasamode");
            document.body.classList.remove("jeongsamode");

            eventTitle.innerText = "단종의 비극";
            eventText.innerText = "1453년 이후 | 충절과 기억의 서사";
            eventDesc.innerText = "夜)사육신·생육신·민간 기억 속 단종";
        } else {
            document.body.classList.add("jeongsamode");
            document.body.classList.remove("yasamode");

            eventTitle.innerText = "세조의 계유정난";
            eventText.innerText = "1453년 | 왕권 재편과 정국 장악";
            eventDesc.innerText = "正)조선왕조실록이 기록한 정치 사건";
        }
    });
}


// =====================
// 타임라인 페이지 정사 ↔ 야사 모드
// =====================

const timelineToggle = document.getElementById("timelineToggle");

if (timelineToggle) {
    document.body.classList.add("jeongsamode");

    timelineToggle.addEventListener("change", () => {
        if (timelineToggle.checked) {
            document.body.classList.add("yasamode");
            document.body.classList.remove("jeongsamode");
        } else {
            document.body.classList.add("jeongsamode");
            document.body.classList.remove("yasamode");
        }
    });
}

// =====================
// GIS 모드 전환
// =====================

const gisToggle = document.getElementById("gisToggle");

if(gisToggle){

    gisToggle.addEventListener("change",()=>{

        if(gisToggle.checked){

            document.body.classList.add("yasamode");
            document.body.classList.remove("jeongsamode");

            document.getElementById("gisTitle").innerText =
            "단종 유배 경로";

            document.getElementById("gisSubtitle").innerText =
            "백성들의 기억 속에 남은 길";

        }

        else{

            document.body.classList.add("jeongsamode");
            document.body.classList.remove("yasamode");

            document.getElementById("gisTitle").innerText =
            "유배 길 따라, 단종의 여정";

            document.getElementById("gisSubtitle").innerText =
            "한양에서 영월까지 이어진 단종의 유배길";

        }

    });

}


// =====================
// 지도 클릭
// =====================

const points = document.querySelectorAll(".map-point");

points.forEach(point => {

    point.addEventListener("click", () => {

        const placeTitle = document.getElementById("placeTitle");
        const placeText = document.getElementById("placeText");

        if(placeTitle && placeText){
            placeTitle.innerText = point.dataset.title;
            placeText.innerText = point.dataset.text;
        }

    });

});


// =====================
// 장소 카드 클릭
// =====================

const placeCards = document.querySelectorAll(".place-card");

placeCards.forEach(card => {

    card.addEventListener("click", () => {

        const placeTitle = document.getElementById("placeTitle");
        const placeText = document.getElementById("placeText");

        if(placeTitle && placeText){
            placeTitle.innerText = card.dataset.title;
            placeText.innerText = card.dataset.text;
        }

    });

});


// =====================
// 한양 모달 팝업
// =====================

const gisModal = document.getElementById("gisModal");
const modalClose = document.getElementById("modalClose");
const hanyangPoint = document.querySelector(".point1");

if(hanyangPoint && gisModal){

    hanyangPoint.addEventListener("click", () => {
        gisModal.classList.add("show");
    });

}

if(modalClose && gisModal){

    modalClose.addEventListener("click", () => {
        gisModal.classList.remove("show");
    });

}

if(gisModal){

    gisModal.addEventListener("click", (e) => {
        if(e.target === gisModal){
            gisModal.classList.remove("show");
        }
    });

}



// =====================
// Vote 페이지 정사 ↔ 야사 모드
// =====================

const voteToggle = document.getElementById("voteToggle");

if(voteToggle){

    voteToggle.addEventListener("change", () => {

        if(voteToggle.checked){
            document.body.classList.add("yasamode");
            document.body.classList.remove("jeongsamode");
        }else{
            document.body.classList.add("jeongsamode");
            document.body.classList.remove("yasamode");
        }

    });

}


// =====================
// 투표 결과 보이기
// =====================

const voteButtons = document.querySelectorAll(".judge-vote-btn");
const voteResultBox = document.getElementById("voteResultBox");

if(voteButtons.length > 0 && voteResultBox){

    voteButtons.forEach(button => {

        button.addEventListener("click", () => {

            voteButtons.forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            voteResultBox.classList.add("show");

        });

    });

}


// =====================
// 제보 버튼 선택 효과
// =====================

const reportBlue = document.getElementById("reportBlue");
const reportGold = document.getElementById("reportGold");

if(reportBlue && reportGold){

    reportBlue.addEventListener("click", () => {
        reportBlue.classList.add("selected-blue");
        reportGold.classList.remove("selected-gold");
    });

    reportGold.addEventListener("click", () => {
        reportGold.classList.add("selected-gold");
        reportBlue.classList.remove("selected-blue");
    });

}


// =====================
// 제보 제출 완료 효과
// =====================

const reportText = document.getElementById("reportText");
const reportSubmit = document.getElementById("reportSubmit");
const reportMessage = document.getElementById("reportMessage");

if(reportSubmit && reportText && reportMessage){

    reportSubmit.addEventListener("click", () => {
        reportText.value = "";
        reportMessage.classList.add("show");
    });

}


// =====================
// Network 페이지 정사 ↔ 야사 모드
// =====================

const networkToggle = document.getElementById("networkToggle");

if(networkToggle){

    networkToggle.addEventListener("change", () => {

        if(networkToggle.checked){
            document.body.classList.add("yasamode");
            document.body.classList.remove("jeongsamode");
        }else{
            document.body.classList.add("jeongsamode");
            document.body.classList.remove("yasamode");
        }

    });

}

// =====================
// Network 인물 노드 클릭
// =====================

const personNodes = document.querySelectorAll(".person-node");

personNodes.forEach(node => {

    node.addEventListener("click", () => {

        const title = document.getElementById("networkTitle");
        const text = document.getElementById("networkText");

        if(title && text){
            title.innerText = node.dataset.title;
            text.innerText = node.dataset.text;
        }

    });

});