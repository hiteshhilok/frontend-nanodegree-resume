/*
This is empty on purpose! Your code to build the resume will go here.
 
var formattedName = HTMLheaderName.replace("%data%", jdata.bio.name);
    formattedName+= HTMLheaderRole.replace("%data%", jdata.bio.role);
    formattedName+=HTMLbioPic.replace("%data%", jdata.bio.biopic);
    formattedName+=HTMLwelcomeMsg.replace("%data%", jdata.bio.welcomeMessage);
    formattedName+=HTMLskillsStart.replace("%data%", jdata.bio.startDate);
    //formattedName+=HTMLskills.replace("%data%", jdata.bio.skills);
    $(".center-content").append(formattedName);

    


 /*var formattedHeader =HTMLmobile.replace("%data%", jdata.bio.contacts.mobile);
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
 
   $(".education-entry").append(formattedEducation);*/

$(function(){
    
  var model = {
    
  init: function() {
            
  localStorage.notes = jdata;
          
  },
    
  getAllData : function(){
    return jdata; 
 }  
    
}
    
var resume = {
    
    
    getbioData : function (){
    var jdata1 = model.getAllData();
    var formattedName = HTMLheaderName.replace("%data%", jdata1.bio.name);
    formattedName+= HTMLheaderRole.replace("%data%", jdata1.bio.role);
    formattedName+=HTMLbioPic.replace("%data%", jdata1.bio.biopic);
    formattedName+=HTMLwelcomeMsg.replace("%data%", jdata1.bio.welcomeMessage);
    formattedName+=HTMLskillsStart.replace("%data%", jdata1.bio.startDate);
    return formattedName;
    },
    
    getcontactData : function (){
    var jdata1 = model.getAllData(); 
    var formattedHeader =HTMLmobile.replace("%data%", jdata1.bio.contacts.mobile);
    formattedHeader+= HTMLemail.replace("%data%", jdata1.bio.contacts.email);
    formattedHeader+= HTMLcontactGeneric.replace("%data%", '0731-23454345');
    formattedHeader+= HTMLgithub.replace("%data%", jdata1.bio.contacts.github);
    formattedHeader+= HTMLtwitter.replace("%data%", jdata1.bio.contacts.twitter);
    formattedHeader+=HTMLlocation.replace("%data%", jdata1.bio.contacts.location);
    return formattedHeader;
    },
    
     getworkData : function (){
     var jdata1 = model.getAllData();
     var tamp = jdata1.work;
     var result ='';
    for(var i in tamp){ 
    var formattedWorkExp = HTMLworkEmployer.replace("%data%", jdata1.work[i].employer);
    formattedWorkExp+= HTMLworkTitle.replace("%data%", jdata1.work[i].title);
    formattedWorkExp+= HTMLworkStart.replace("%data%", jdata1.work[i].workStart);
    formattedWorkExp+= HTMLworkDates.replace("%data%", jdata1.work[i].dates);
    formattedWorkExp+= HTMLworkLocation.replace("%data%", jdata1.work[i].location);
    formattedWorkExp+= HTMLworkDescription.replace("%data%", jdata1.work[i].description);
        
    result += formattedWorkExp;
    }
    return result;
    },
    
    getprojectData : function (){
    var jdata1 = model.getAllData();
    var tamp = jdata1.projects;
    var result ='';
    for(var i in tamp){ 
    var formattedProject = HTMLprojectStart.replace("%data%", jdata1.projects[i].projectStart);
    formattedProject+= HTMLprojectTitle.replace("%data%", jdata1.projects[i].title);
    formattedProject+= HTMLprojectDates.replace("%data%", jdata1.projects[i].dates);
    formattedProject+= HTMLprojectDescription.replace("%data%", jdata1.projects[i].description);
    formattedProject+= HTMLprojectImage.replace("%data%", jdata1.projects[i].images);
    result+= formattedProject;
     }
     return result;
    },
    
    geteductionData : function (){
    var jdata1 = model.getAllData();
    var tamp = jdata1.education;
    var result ='';
    var sec ='';
    for(var i in tamp){
      sec =  Object.keys(jdata1.education[i]);
      //console.log(sec);
           for(var j in sec){ 
    //console.log(jdata1.education[i][sec[j]]);
    var formattedEducation = HTMLschoolName.replace("%data%", jdata1.education[i][sec[j]]);
        formattedEducation+= HTMLschoolDegree.replace("%data%", jdata1.education[i][sec[j]]);
        formattedEducation+= HTMLschoolDates.replace("%data%", jdata1.education[i][sec[j]]);
        formattedEducation+= HTMLschoolLocation.replace("%data%", jdata1.education[i][sec[j]]);
        formattedEducation+= HTMLschoolMajor.replace("%data%", jdata1.education[i][sec[j]]);
    /*formattedEducation+= HTMLonlineTitle.replace("%data%", jdata1.education.onlineCourses.title);
    formattedEducation+= HTMLonlineSchool.replace("%data%", jdata1.education.onlineCourses.school);
    formattedEducation+= HTMLonlineDates.replace("%data%", jdata1.education.onlineCourses.dates);
    formattedEducation+= HTMLonlineURL.replace("%data%", jdata1.education.onlineCourses.url);*/
    result+= formattedEducation;
           }
     }
     return result;
    },
    
      init : function(){
      model.init();
      view.init();
      }
    
    };
  
var view = {
  
  init : function (){
    view.render();
   },
       
  render : function(){
    var formattedName =  resume.getbioData();
    $(".center-content").append(formattedName);

    

    var formattedHeader =  resume.getcontactData();
    $(".flex-item").append(formattedHeader);


    var formattedWorkExp =  resume.getworkData();
    $(".work-entry").append(formattedWorkExp);

    var formattedProject =  resume.getprojectData();
    $(".project-entry").append(formattedProject);


    var formattedEducation =  resume.geteductionData();
    $(".education-entry").append(formattedEducation);
    
  }
  
  };
    
resume.init();
    
});

  