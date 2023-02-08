const question=document.getElementById('Question')

const submit=document.getElementById('submit_answer')
const check=document.getElementById('checked')
let current_question_index=0
submit.onclick=()=>{
  let guess=document.getElementById('quiz_input').value
  const question=["What is the Highest and largest plateau?","What is the largest plain?","What is the most ancient landmass?","What is the youngest landmass?","What is the largest peninsula?","What is the largest delta?","What is the largest sea?","What is the largest lake?","What is the Deepest lake?","What is the longest Inter-Continental railway?","What is the highest road link in asia?","What is the longest Strait?","What is the narrowest strait?"]
  const answer=[
    "Plateau of Tibet"," Siberian Plain","Angarland(siberain shield) and Godwana Land (deccan plateau)","Purbasha island in Bay of Bengal","Arabian peninsula","Sunderbans(Ganga-brahmaputra delta)","Philippine Sea(5.695 million sq Km)","Caspian Sea(area- 3,73,100 sq km)","Lake Baikal (1620 m below sea level) in russia","Trans Siberian railway","AH1 from Tokyo to the Turkey-Bulgaria border","Strait of Malacca(800km)","Starit of Bosphorus connecting Black sea with the Marmara sea"
  ]
  
  let answer_check=answer[current_question_index]
  if(guess==answer_check){
    console.log(guess)
    check.innerText="Your answer is right."
    }
    else{
      check.innerText="Your answer is wrong.The righr answer was ${answer_check}"
      }
  question.innerText=question[current_question_index]
  current_question_index+=1
  }