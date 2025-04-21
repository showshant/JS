const questions = [
    {
      question: "Who holds the record for most runs in international cricket?",
      options: [
        "Sachin Tendulkar",
        "Ricky Ponting",
        "Virat Kohli",
        "Jacques Kallis",
      ],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Which bowler has taken the most wickets in Test cricket?",
      options: [
        "Muttiah Muralitharan",
        "Shane Warne",
        "Anil Kumble",
        "James Anderson",
      ],
      answer: "Muttiah Muralitharan",
    },
    {
      question: "Who was the first batsman to score a double century in ODIs?",
      options: [
        "Virender Sehwag",
        "Rohit Sharma",
        "Sachin Tendulkar",
        "Chris Gayle",
      ],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Which country won the first ever Cricket World Cup in 1975?",
      options: ["India", "Australia", "England", "West Indies"],
      answer: "West Indies",
    },
    {
      question: "Who is known as the 'Rawalpindi Express'?",
      options: ["Wasim Akram", "Shoaib Akhtar", "Waqar Younis", "Mohammad Amir"],
      answer: "Shoaib Akhtar",
    },
    {
      question: "Which player has the most centuries in international cricket?",
      options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Brian Lara"],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Who won the ICC Cricket World Cup in 2019?",
      options: ["India", "Australia", "England", "New Zealand"],
      answer: "England",
    },
    {
      question: "Which team has won the most ICC Cricket World Cups?",
      options: ["India", "Australia", "West Indies", "England"],
      answer: "Australia",
    },
    {
      question:
        "Who is the current captain of the Indian Test cricket team (as of 2024)?",
      options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Ajinkya Rahane"],
      answer: "Rohit Sharma",
    },
    {
      question: "What is the highest individual score in ODIs?",
      options: [
        "Martin Guptill - 237*",
        "Virender Sehwag - 219",
        "Rohit Sharma - 264",
        "Chris Gayle - 215",
      ],
      answer: "Rohit Sharma - 264",
    },
    {
      question:
        "Who is the youngest cricketer to score a century in international cricket?",
      options: [
        "Shahid Afridi",
        "Sachin Tendulkar",
        "Mohammad Ashraful",
        "Usman Ghani",
      ],
      answer: "Shahid Afridi",
    },
    {
      question: "Which country is known as the 'Black Caps'?",
      options: ["Australia", "New Zealand", "South Africa", "England"],
      answer: "New Zealand",
    },
    {
      question: "Who has the fastest century in ODI cricket?",
      options: [
        "AB de Villiers",
        "Shahid Afridi",
        "Corey Anderson",
        "Glenn Maxwell",
      ],
      answer: "AB de Villiers",
    },
    {
      question:
        "What is the term used when a batsman gets out without scoring a run?",
      options: ["Golden duck", "Century", "Hat-trick", "Maiden"],
      answer: "Golden duck",
    },
    {
      question:
        "Who was the captain of the Indian team that won the 1983 World Cup?",
      options: [
        "Sunil Gavaskar",
        "Kapil Dev",
        "Mohinder Amarnath",
        "Dilip Vengsarkar",
      ],
      answer: "Kapil Dev",
    },
    {
      question: "Who is the first bowler to take 500 wickets in Test cricket?",
      options: [
        "Courtney Walsh",
        "Shane Warne",
        "Muttiah Muralitharan",
        "Kapil Dev",
      ],
      answer: "Courtney Walsh",
    },
    {
      question: "Which Indian cricketer is nicknamed 'The Wall'?",
      options: ["Virat Kohli", "Rahul Dravid", "VVS Laxman", "Anil Kumble"],
      answer: "Rahul Dravid",
    },
    {
      question: "Who is the only player to play 200 Test matches?",
      options: [
        "Jacques Kallis",
        "Ricky Ponting",
        "Sachin Tendulkar",
        "Steve Waugh",
      ],
      answer: "Sachin Tendulkar",
    },
    {
      question: "Which stadium is known as the 'Mecca of Cricket'?",
      options: ["Wankhede Stadium", "Lord's", "MCG", "Eden Gardens"],
      answer: "Lord's",
    },
    {
      question:
        "Who holds the record for the most sixes in international cricket?",
      options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "AB de Villiers"],
      answer: "Rohit Sharma",
    },
  ];
  
  function RandomQuestion() {
    const answer = [];
  
    const data = new Set();
    // use set for unique object
    while (data.size != 5) {
      const index = Math.floor(Math.random() * 20);
      data.add(questions[index]);
    }
    // convert set into array
    return [...data];
  }
  
  // select the form and insert all the elements
  
  const form = document.querySelector("form");
  const problem = RandomQuestion();
  
  const original = {
    // key value
  };
  
  problem.forEach((obj, index) => {
    const divElement = document.createElement("div");
    divElement.className = "question";
    original[`q${index + 1}`] = obj.answer;
  
    const paragraph = document.createElement("p");
    paragraph.textContent = `${index + 1}. ${obj.question}`;
    divElement.appendChild(paragraph);
  
    // create 4 options
    obj["options"].forEach((data) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${index + 1}`;
      input.value = data; // ✅ This fixes the issue
      label.appendChild(input);
      label.appendChild(document.createTextNode(data));
      divElement.appendChild(label);
      divElement.appendChild(document.createElement("br"));
    });
  
    form.appendChild(divElement);
  });
  
  const button = document.createElement("button");
  button.type = "submit";
  button.className = "submit-btn";
  button.textContent = "Submit";
  
  form.appendChild(button);
  
  // check the submitted form
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
  
    let result = 0;
  
    for (let [key, value] of data.entries()) {
      if (value === original[key]) result++;
    }
    const out = document.getElementById("out");
    out.innerText = `${result} out of 5 is correct.`;
    form.reset();
  });
  