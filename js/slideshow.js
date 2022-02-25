var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// 이미지 하나가 표시되면 나머지 이미지는 모두 감추고 버튼을 클릭하면 이미지를 가져와서 보여주기
// 그래서 슬라이드 번호를 저장할 인덱스 변수 current가 필요
// current 초깃값 0
var current = 0;

showSlides(current); //현재 슬라이드 표시
prev.onclick = prevSlide; //이전 이미지 표시
next.onclick = nextSlide; //다음 이미지 표시


//////////////////

function showSlides(n){
  for (var i=0; i<slides.length; i++){ // 배열 처음부터 끝까지 반복
    slides[i].style.display = "none"; //모든 이미지를 화면에서 감춤
  }

  slides[n].style.display="block"; //n번째 이미지만 화면에 표시
}

function prevSlide(){
  if(current>0) current-=1;
  else current=slides.length-1;

  showSlides(current);
}

function nextSlide(){
  if(current==slides.length-1) current=0;
  else current+=1;

  showSlides(current);
}














