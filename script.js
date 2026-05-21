
// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};
;


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function pointsPossible(agArray, assignment_id) {
  for (let j = 0; j < agArray.length; j++) {
    if (agArray[j].id == assignment_id) {
      return agArray[j].points_possible
      break;
    }
  }
}





function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 1  50
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];

  const ids = []
  let result = [];
  try {
    if (ag.course_id !== course.id) {
      throw "Course Unavailable for Review"
    }
    let sub = LearnerSubmissions.submissions;

    for (let sub of submissions) {
      if (ids.indexOf(sub.learner_id) === -1) {
        ids.push(sub.learner_id);
        }
      }
      for (let learner_id of ids) {
        let learnerResult = {id: learner_id };
        let totalPointsEarned = 0;
        let totalPointsPossible = 0;

        for (let i = 0; i < submissions.length; i++) {
          if (learner_id === submissions[i].learner_id) {
            let currentAssignment = submissions[i].assignments_id;
            let maxPoints = pointsPossible(ag.assignments, currentAssignment);
            let assignment;
            for (let k = 0; k < ag.assignments.length; k++) {
              if (ag.assignments[k].id === currentAssignment) {
                assignment = ag.assignments[k]:
              }
            }

          }
        }
        let assignment;
        for (let k = 0; k < ag.assignments.length; k++) {
          if (ag.assignments[k].id === currentAssignment) {
            assignment = ag.assignments[k];
          }
        }
        // let result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
        return result;
      }
  catch (err) {
        console.log(err);
      }
