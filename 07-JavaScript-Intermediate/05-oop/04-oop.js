class Student {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    this.courseOfferings = [];
    this.index = 0;
  }

  takeNewCourse(courseOffer) {
    let course = courseOffer.course;
    course.decreaseQuota();
    this.courseOfferings.push(courseOffer);
  }

  courseTest(course) {
    let courseOffer = this.courseOfferings.find((item) => {
      // console.log(item);
      return item.course.subject == course.subject;
    });

    if (course.attendence <= courseOffer.attendence) {
      courseOffer.grade = Math.floor(Math.random() * 100);
    } else {
      console.log("please fill your absen");
    }
  }

  courseAttendance(course) {
    let courseOffer = this.courseOfferings.find((item) => {
      // console.log(item);
      return item.course.subject == course.subject;
    });
    courseOffer.attendence++;
  }
}

class CourseOffering {
  constructor(course, grade, attendence) {
    this.course = course;
    this.grade = grade;
    this.attendence = attendence;
  }
}

class Course {
  constructor(subject, quota, attendence) {
    this.subject = subject;
    this.quota = quota;
    this.attendence = attendence;
  }

  getSubject() {
    return this.subject;
  }

  getAttendence() {
    return this.attendence;
  }

  decreaseQuota() {
    this.quota--;
  }
}

const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatsonOfferingBiology = new CourseOffering(biology, 0, 0);
const johnWatsonOfferingPhysics = new CourseOffering(physics, 0, 0);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(johnWatsonOfferingBiology);
johnWatson.takeNewCourse(johnWatsonOfferingPhysics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.courseTest(biology);
johnWatson.courseTest(physics);

console.log(johnWatson.courseOfferings);
