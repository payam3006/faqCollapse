const q = console.log;

const body = document.body;

const data = [
  {
    question: "Why shouldn't we trust atoms?",
    answer: "They make up everything!",
  },
  {
    question: "Where is Loyeh?",
    answer: "Nobody can answer this question! :)",
  },
  {
    question: "2+1?",
    answer: "if (2==loyeh+mohajerat && 1==DOCTOR) {answer=1000;} else {3!};",
  },
  {
    question: "question4?",
    answer: "answer4!",
  },
  {
    question: "question5?",
    answer: "answer5!",
  },
  {
    question: "question6?",
    answer: "answer6!",
  },
];

const setData = () => {
  let newBox = "";
  data.forEach(function (item, index) {
    newBox = `<div id="nom${index}" class="Box close">

  <i id="sortDown${index}" class="fa fa-sort-down" style="font-size:28px;color:grey" onclick="openBox(${index})"></i>
  <i id="closebtn${index}" class="fa fa-times-circle hidden1" style="font-size:28px;color:gray"
      onclick="closeBox(${index})"></i>

  <i id="m1${index}" class="fa fa-comment-o m1 hidden" style="font-size:100px;color:greenyellow"></i>
  <i id="m2${index}" class="fa fa-comment-o m2 hidden" style="font-size:100px;color:skyblue"></i>



  <div class="question">
      ${item.question}
  </div>
  <div id="answer${index}" class="answer hidden1">
      ${item.answer}
  </div>
</div>`;
    body.innerHTML += newBox;

    q(item, index);
  });
};

setData();

const openBox = (boxNom) => {
  document.getElementById(`nom${boxNom}`).classList.add("open");
  document.getElementById(`nom${boxNom}`).classList.remove("close");
  document.getElementById(`sortDown${boxNom}`).classList.add("hidden1");
  document.getElementById(`closebtn${boxNom}`).classList.remove("hidden1");
  document.getElementById(`m1${boxNom}`).classList.remove("hidden");
  document.getElementById(`m2${boxNom}`).classList.remove("hidden");
  document.getElementById(`answer${boxNom}`).classList.remove("hidden1");
};

const closeBox = (boxNom) => {
  document.getElementById(`nom${boxNom}`).classList.remove("open");
  document.getElementById(`nom${boxNom}`).classList.add("close");
  document.getElementById(`sortDown${boxNom}`).classList.remove("hidden1");
  document.getElementById(`closebtn${boxNom}`).classList.add("hidden1");
  document.getElementById(`m1${boxNom}`).classList.add("hidden");
  document.getElementById(`m2${boxNom}`).classList.add("hidden");
  document.getElementById(`answer${boxNom}`).classList.add("hidden1");
};
