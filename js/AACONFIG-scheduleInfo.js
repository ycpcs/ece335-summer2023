// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new DoubleTopic("Lecture 1: Intro to Discrete Math", "lectures/lecture01.html","Lecture 2: Deductive Reasoning and Logical Connectives","lectures/lecture02.html"),
		reading: "Intro. pg. 1-6, 1.1 pg. 8=13",
	},
];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("102", new Date("05/09/2022 10:15:00")),
		new FinalExamDay("101", new Date("05/11/2022 08:00:00")),
//		new FinalExamDay("103", new Date("12/13/2019 12:45:00")),
//		new FinalExamDay("104", new Date("12/13/2019 15:00:00"))
];

// vim:ts=2:
