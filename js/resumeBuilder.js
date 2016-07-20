/*
This is empty on purpose! Your code to build the resume will go here.
 */
console.log(jdata.bio.name); 




var formattedName = HTMLheaderName.replace("%data%", jdata.bio.name);
    formattedName+= HTMLheaderRole.replace("%data%", jdata.bio.role);
    formattedName+=HTMLbioPic.replace("%data%", jdata.bio.biopic);
    formattedName+=HTMLwelcomeMsg.replace("%data%", jdata.bio.welcomeMessage);
    formattedName+=HTMLskillsStart.replace("%data%", jdata.bio.startDate);
    //formattedName+=HTMLskills.replace("%data%", jdata.bio.skills);
    $(".center-content").append(formattedName);

    


 var formattedHeader =HTMLmobile.replace("%data%", jdata.bio.contacts.mobile);
    formattedHeader+= HTMLemail.replace("%data%", jdata.bio.contacts.email);
    formattedHeader+= HTMLcontactGeneric.replace("%data%", '0731-23454345');
    formattedHeader+= HTMLgithub.replace("%data%", jdata.bio.contacts.github);
    formattedHeader+= HTMLtwitter.replace("%data%", jdata.bio.contacts.twitter);
    formattedHeader+=HTMLlocation.replace("%data%", jdata.bio.contacts.location);
   $(".flex-item").append(formattedHeader);


var formattedWorkExp = HTMLworkEmployer.replace("%data%", jdata.work.jobs.employer);
    formattedWorkExp+= HTMLworkTitle.replace("%data%", jdata.work.jobs.title);
    formattedWorkExp+= HTMLworkStart.replace("%data%", jdata.work.jobs.workStart);
    formattedWorkExp+= HTMLworkDates.replace("%data%", jdata.work.jobs.dates);
    formattedWorkExp+= HTMLworkLocation.replace("%data%", jdata.work.jobs.location);
    formattedWorkExp+= HTMLworkDescription.replace("%data%", jdata.work.jobs.description);
   $(".work-entry").append(formattedWorkExp);

var formattedProject = HTMLprojectStart.replace("%data%", jdata.projects.projects.projectStart);
    formattedProject+= HTMLprojectTitle.replace("%data%", jdata.projects.projects.title);
    formattedProject+= HTMLprojectDates.replace("%data%", jdata.projects.projects.dates);
    formattedProject+= HTMLprojectDescription.replace("%data%", jdata.projects.projects.description);
    formattedProject+= HTMLprojectImage.replace("%data%", jdata.projects.projects.images);
 
   $(".project-entry").append(formattedProject);

var formattedEducation = HTMLschoolName.replace("%data%", jdata.education.schools.name);
    formattedEducation+= HTMLschoolDegree.replace("%data%", jdata.education.schools.degree);
    formattedEducation+= HTMLschoolDates.replace("%data%", jdata.education.schools.dates);
    formattedEducation+= HTMLschoolLocation.replace("%data%", jdata.education.schools.location);
    formattedEducation+= HTMLschoolMajor.replace("%data%", jdata.education.schools.majors);

   
    formattedEducation+= HTMLonlineTitle.replace("%data%", jdata.education.onlineCourses.title);
    formattedEducation+= HTMLonlineSchool.replace("%data%", jdata.education.onlineCourses.school);
    formattedEducation+= HTMLonlineDates.replace("%data%", jdata.education.onlineCourses.dates);
    formattedEducation+= HTMLonlineURL.replace("%data%", jdata.education.onlineCourses.url);
 
   $(".education-entry").append(formattedEducation);