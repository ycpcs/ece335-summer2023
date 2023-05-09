
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("05/15/2023 4:00:00"),
    lastDayOfSemester:  new Date("08/10/2023 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("4th Holiday", new Date("06/26/2023"), new Date("07/04/2023")),
    ]
};
