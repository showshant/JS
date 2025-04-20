const original = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Muttiah Muralitharan",
    q4: "264",
    q5: "Lasith Malinga"
  };
  
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
  //   const ans = Array.from(data.values());
  //   //   console.log(ans);
  
    let result = 0;
  //   for (i = 0; i < ans.length; i++)
  //     if (ans[i] === original[i]) {
  //       result++;
  //     }
    //   console.log(result);
  
  
    for(let [key,value] of data.entries()){
      if (value === original[key])
          result++;
    }
    const out = document.getElementById("out");
    out.innerText = `${result} out of 5 is correct.`;
  
    document.getElementById("container").append(out);
  });
  