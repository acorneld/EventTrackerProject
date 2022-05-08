# EventTrackerProject

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
  </ul>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    </li>
  <ul>
    <li><a href="#howitworks">How It Works</a></li>
  </ul>  
  <ul>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <ul>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    </ul>

</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p>This is a Java Developer Application Programming Interface, with a database on the backend that allows the user to perform the following operations on a Team in the CSGOTeam Database.</p>
<ol>
<li><strong><em>C</em></strong>reate - Create a new Developer in the database with Postman </li>
<br>
<li><strong><em>R</em></strong>ead - View the current information for a Developer in the database via Postman</li>
<br>
<li><strong><em>U</em></strong>pdate - Update Predefined Fields of a Developer in the database by way of Postman</li>
<br>
<li><strong><em>D</em></strong>elete - Remove Existing Teams in the database via Postman</li>
</ol>
<!--[![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<p align="right">(<a href="#top">back to top</a>)</p>

### Technologies Used

-   [Spring Tools 4](https://spring.io/tools)
-   [Gradle Build Tool](https://gradle.org/install/)
-   [MAMP Free](https://www.mamp.info/en/mac/)
-   [Apache Tomcat v8.5](https://tomcat.apache.org/)
-   [MySQL](https://www.mysql.com/)
-   [Atom Text Editor](https://atom.io/)


<p align="right">(<a href="#top">back to top</a>)</p>

## How It Works

<ol>
<li>
The Java Developer API uses Postman to verify the proper paths and is launched through Spring Tool Suite 4
</li>

<li>
<strong>Find Developer By Id</strong> enter <strong>findTeamById.html</strong> where the user is prompted for the Teamm Id they would like to retrieve from the database.
</li>
<ul>
<li>All information for the requested team is then retrieved by way of the SpringMVC provided <strong>getTeam.do</strong> RequestMapping found in the <strong>TeamController.java</strong>  The user also has two other main screen options.

  <ol>
    <li>Delete Team</li>
      <ul>
        <li>The selected team is removed from the database by way of the SpringMVC provided <strong>deleteTeamm.do</strong> RequestMapping found in the CSGOTeamController.java and user is returned to the aforementioned homepage at if the select the home button<strong>/WEB-INF/home.jsp</strong></li>
      </ul>
    <li>Update Team</li>
      <ul>
        <li>
        The selected team is displayed for editing through <strong>updateTeam.html</strong> with the current values shown</li>
        <li>
        User can then change all given fields to their preferred input and apply them to the database by way of the SpringMVC provided updateTeam.do RequestMapping found in the CSGOTeamController.java and then user is returned to the aforementioned homepage at <strong>/WEB-INF/home.jsp</strong>
        </li>
      </ul>
  </ol>

</ul>
<li>
<strong>Add A Team</strong> navigates to <strong>addTeam.html</strong> where the user is prompted to enter the Team's Name, Rank, Coach, Average Age, and Star Player
</li>
  <ul>
    <li>
    When user selects the Submit button all inputed fields are added to the database by way of the SpringMVC provided <strong>addTeam.do</strong> RequestMapping found in the <strong>CSGOTeamController.java</strong> and then user is given the option to click Home and  be returned to the aforementioned homepage at <strong>/WEB-INF/home.jsp</strong>
    </li>


  </ul>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

<strong>Developers on Project</strong>


<h4>Andrew Cornelius</h4>
<ul>
<li><a href="https://www.linkedin.com/in/andrew-cornelius-584b151a9">LinkedIn</a></li>
<li><a href="https://github.com/acorneld">Github</a></li>
<li> E-mail: acorneld@gmail.com</li>
</ul>

Project Link: [JPACRUD Project](https://github.com/acorneld/JPACRUDProject)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Film Query App](https://github.com/acorneld/FilmQueryProject)
-   [Stack Overflow](https://stackoverflow.com/)
-   [W3 Schools](https://www.w3schools.com/)
-   [Github - othneildrew](https://github.com/othneildrew/Best-README-Template)




<p align="right">(<a href="#top">back to top</a>)</p>
