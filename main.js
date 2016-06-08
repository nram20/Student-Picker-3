
document.addEventListener("DOMContentLoaded", function(){

console.log("working")
    var studentList = [];

  document.querySelector("#addStudent").addEventListener('click', function(){
    
    var student = document.getElementById('studentName').value;
    
    var studentBullet = document.createElement('li');
    //turn the commas entries into student array
    var splitStudent;

    //if var student (aka the input field) does not contain a comma
    if ((student.indexOf(',') === -1)){

    //then add the student to the list(<li>) that we created
    studentBullet.innerHTML = "<li>" + student + "</li>";
    //shove studentBullet into 'studentList' with appendChild
    document.getElementById('studentList').appendChild(studentBullet);

    studentList.push(student);
    }
    //else if student contains a comma
    else if (student.indexOf(',')!== -1) {

      //split the value into separate values by comma
      splitStudent = student.split(', ');
      

      //Using let because internet said it would fix the problem:) For each value in this new array of inputted students:
      for (let i=0; i<splitStudent.length; i++){

        // Shove each iteration of the split up student array into student list
        studentBullet.innerHTML += "<li>" + splitStudent[i] + "</li>";
        document.getElementById('studentList').appendChild(studentBullet);

    studentList.push(splitStudent[i]);
      }
    }
    

  });

  document.querySelector('#pick').addEventListener('click', function(){
     
      var randomStudent = studentList[Math.floor(Math.random()*studentList.length)];

      document.getElementById('randomStudent').innerHTML = "<h2>I choose you: </h2>" + randomStudent;

      
      
  });


  document.querySelector('#leeroy').addEventListener('click', function(){

    var team = document.getElementById('teamNumber').value;
    if (isNaN(team)===true) {
      alert('enter a number!');
    }
    var studentListToSplice=[];

   
    for (var i=0; i<studentList.length; i++){
      studentListToSplice.push(studentList[i]);
    }
    
// Check to make sure that the number you entered is between 1 and student number, and if not, return error message
    if (team > studentList.length || team.length === 0) {

      var teamBox = document.createElement('div');
      teamBox.innerHTML = 'Please enter a value less than number of people in your list.';
      var teamDiv = document.getElementById('teamedStudents');
      teamDiv.appendChild(teamBox);

    } else if (team <= studentList.length) {

      // This is a great lesson in why you pick very distinct variable names - so many "student" and "team" variations. But I'm in too deep to stop now
      var numTeams = studentList.length / team;
      var teamsArr = [];

    }

    //First loop will figure out how many times we need to loop (1 loop per team), then second loop will push in the correct number of randomized students
      
    for (let i=0; i<numTeams; i++){
    
      //To produce the NEXT team we need a fresh teams array, so empty teamsArr before continuing iteration
      teamsArr = [];
      for (var j=0; j<team; j++) {
        var teamMember = studentListToSplice[Math.floor(Math.random()*studentListToSplice.length)];
        teamsArr.push(teamMember);
        

        // to avoid double selecting the same dudes randomly, we need to splice them out if they do happen to be selected, and then continue
        var indexTeamMember = studentListToSplice.indexOf(teamMember);
        if (indexTeamMember > -1) {
          studentListToSplice.splice(indexTeamMember, 1);
          
        }

      }
      


      var teamBox = document.createElement('div');
      teamBox.setAttribute('id', 'indivGroup');
      teamBox.innerHTML = teamsArr;
      var teamDiv = document.getElementById('teamedStudents');
      teamDiv.appendChild(teamBox);

    

    }


  });
});