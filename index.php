
<!DOCTYPE html>
<?php  $base_url= "http://localhost/frontend-nanodegree-resume/";?>
<!--
This is an HTML document. It contains information about how elements in the website
are arranged. In other words, it describes the layout of a website.

I can't wait to see the resumes you put together!

Cameron Pittman, Udacity Course Developer
-->

<!--
The <head> of a website generally links to important resources the page will
need to load. You'll see a lot of <link>s to CSS files for styles and
<scripts> for JavaScript files to build interactions.
-->
<html>
<head>
  <!-- This tells the browser how to read the document. -->
  <meta charset="utf-8">

  <!-- Tells the browser what the title of this page should be. -->
  <title>Resume</title>
    
  <!-- Load the page styles. -->
  <link href="<?php echo $base_url;?>css/style.css" rel="stylesheet">

  <!--
  jQuery is a common JavaScript library for reading and making changes to the
  Document Object Model (DOM). The DOM is a tree that contains information
  about what is actually visible on a website.

  While HTML is a static document, the browser converts HTML to the
  DOM and the DOM can change. In fact, JavaScript's power comes from
  its ability to manipulate the DOM, which is essentially a JavaScript
  object. When JavaScript makes something interesting happen on a
  website, it's likely the action happened because JavaScript changed
  the DOM. jQuery is fast and easy to use, but it doesn't do anything
  you can't accomplish with vanilla (regular) JavaScript.
  -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
  <script src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>
 
  <script src="<?php echo $base_url;?>js/jQuery.js"></script>
  <!-- More on helper.js in the class -->
  <script src="<?php echo $base_url;?>js/helper.js"></script>
  <script src="<?php echo $base_url;?>js/jsonData.js"></script>
    
  
  <!--
  Uncomment the <script> tag below when you're ready to add an interactive Google Map to your resume!
  -->
  <!-- <script src="http://maps.googleapis.com/maps/api/js?libraries=places"></script> -->

  <meta name="viewport" content="width=device-width">
</head>
<body>
  <div id="main">
   <!-- You'll be deleting this line in the course -->

    <!--
    Everything from here to the <script> tag below is the skeleton of your
    website. Your code will add information to each of the sections of the
    resume below. You can pretty easily figure out what each section will
    display by looking at the id or at what's written between the <h2> tags.
    -->
    
    <div id="header" class="center-content clear-fix">
      <h1></h1>
      <ul id="topContacts" class="flex-box flex-item"></ul>
    </div>
      
    <div style="clear: both;"></div>
    <div id="workExperience" class="gray work-entry">
      <h2>Work Experience</h2>
    </div>
    <div id="projects" class="project-entry">
      <h2>Projects</h2>
    </div>
    <div id="education" class="gray education-entry">
      <h2>Education</h2>
    </div>
    <div id="mapDiv">
      <h2>Where I've Lived and Worked</h2>
    </div>
    <div id="lets-connect" class="dark-gray">
      <h2 class="orange center-text">Let's Connect</h2>
        <ul id="footerContacts" class="flex-box flex-item">
      </ul>
    </div>
  </div>

  <!--
  The next line tells the browser where to download the JavaScript file you'll be
  writing. In resumeBuilder.js, you'll be writing code that builds the resume
  dynamically when this website, index.html, is opened.
  
 
     // Notice how all of a sudden there's JavaScript inside this HTML
    // document? You can write JavaScript between <script> tags. At the end of your
    // JavaScript, don't forget the closing script tag with the slash (/).


    // Also, this is a JavaScript style comment. You can comment in JavaScript with:

    //   two slashes for all following characters on a single line, or

    /*
        an opening and closing set of slash asterisks for block comments.
    */
--><script src="<?php echo $base_url ;?>js/resumeBuilder.js"></script>
    <script>
    console.log('top',document.getElementsByClassName('flex-item').length);
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('topContacts').style.display = 'none';
    }
   
    if(document.getElementsByTagName('h1').length === 0) {
      document.getElementById('header').style.display = 'none';
    }
      
    if(document.getElementsByClassName('work-entry').length === 0) {
      document.getElementById('workExperience').style.display = 'none';
    }
    if(document.getElementsByClassName('project-entry').length === 0) {
      document.getElementById('projects').style.display = 'none';
    }
    if(document.getElementsByClassName('education-entry').length === 0) {
      document.getElementById('education').style.display = 'none';
    }
    if(document.getElementsByClassName('flex-item').length === 0) {
      document.getElementById('lets-connect').style.display = 'none';
    }
    if(document.getElementById('mapDiv') === null) {
      document.getElementById('mapDiv').style.display = 'none';
    }
  </script>
</body>
</html>
