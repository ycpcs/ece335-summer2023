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
	{
		topic: new DoubleTopic("Lecture 8: Operations on Sets cont.","lectures/lecture08.html","Lecture 9: More Operations on Sets","lectures/lecture09.html"),
		reading: "1.4 pg. 34-41, 2.3 pg. 73-81",
	},
	{
		topic: new Topic("Lecture 9: More Operations on Sets","lectures/lecture09.html"),
		reading: "2.3 pg. 73-81",
	},
	{
		topic: new FiveTopic("Lecture 10: Proof Strategies", "lectures/lecture10.html","Lecture 11: Proofs Involving Negations and Conditionals","lectures/lecture11.html","Lecture 10 Practice Problem","handouts/lecture10/lecture10-handout.pdf","Lecture 10 Practice Problem Solution","handouts/lecture10/lecture10-handoutSol.pdf","Assignment 3 Due","assign/assign03.html"),
		reading: "3.1 pg. 84-93, 3.2 pg. 95-106",
	},
	{
		topic: new TripleTopic("Lecture 11: Proofs Involving Negations and Conditionals cont.","lectures/lecture11.html","Lecture 11 Practice Problem","handouts/lecture11/lecture11-handout.pdf","Lecture 11 Practice Problem Solution","handouts/lecture11/lecture11-handoutSol.pdf"),
		reading: "3.2 pg. 95-106",
	},
	{
		topic: new TripleTopic("Lecture 12: Proofs Involving Quantifiers","lectures/lecture12.html","Lecture 12 Practice Problem","handouts/lecture12/lecture12-handout.pdf","Lecture 12 Practice Problem Solution","handouts/lecture12/lecture12-handoutSol.pdf"),
		reading: "3.3 pg. 108-121, 3.4 pg. 124-133",
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
