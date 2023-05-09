// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Intro to Discrete Math", "lectures/lecture01.html","Lecture 2: Deductive Reasoning and Logical Connectives","lectures/lecture02.html"),
		reading: "Intro. pg. 1-6, 1.1 pg. 8-13",
	},
	{
		topic: new DoubleTopic("Lecture 3: Truth Tables", "lectures/lecture03.html","Lecture 4: The Conditional and Biconditional Connectives","lectures/lecture04.html"),
		reading: "1.2 pg. 14-23, 1.5 pg. 43-53",
	},
	{
		topic: new DoubleTopic("Lecture 5: Quantifiers", "lectures/lecture05.html","Assignment 1 Due","assign/assign01.html"),
		reading: "2.1 pg. 55-63",
	},
	{
		topic: new Topic("Lecture 6: Equivalencies Involving Quantifiers", "lectures/lecture06.html"),
		reading: "2.2 pg. 64-72",
	},
	{
		topic: new TripleTopic("Lecture 7: Variables and Sets", "lectures/lecture07.html","Lecture 8: Operations on Sets","lectures/lecture08.html","Assignment 2 Due","assign/assign02.html"),
		reading: "1.3 pg. 26-33, 1.4 pg. 34-41",
	},
	{
		topic: new Topic("** Exam 1", "")
	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
//		new FinalExamDay("102", new Date("05/09/2022 10:15:00")),
//		new FinalExamDay("101", new Date("05/11/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
