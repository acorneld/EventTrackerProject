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

<p>This is a Java Developer Application Programming Interface, with a database on the backend that allows the user to perform the following operations through an API and Postman.  There is also a frontend in the works which allows the user to dynamically select, edit, and delete any of the Developers entries</p>
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

<p>
  A stubbed out Front End is currently available where the user can choose to show all Devs, at which point they can click on the name of any of the Devs to display all of their information and be given the option to update or delete the Dev entry.  Deleting the Dev will remove both the div from the HTML as well as the from the database.
</p>

<ol>
<li>
The Java Developer API uses Postman to verify the proper paths and is launched through Spring Tool Suite 4
</li>

<li>
Find Developer By Id can be easily tested with the following GET command in Postman http://<strong>localhost:8083/api/developers/id/1</strong>
</li>
<li><strong>Create Developer</strong>
The following API path and POST command is used to create a new Developer <strong>http://localhost:8083/api/developers</strong> the name and Id are the only required (non-null) fields for the POST body in Postman
</li>

<li><strong>Update Developer</strong>
      A similar path and POST command is used for Create Developer but the repo provides automagic and updates field if there is already a Developer created.
</li>

<li>
<strong>Delete A Developer</strong>  The following path and DELETE command can be added to Postman in order to delete a Developer Entity from the database by way of the API <strong>http://localhost:8083/api/developers/[ID here] </strong>
</li>

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

Project Link: [Event Tracker Project](https://github.com/acorneld/EventTrackerProject)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments


-   [Stack Overflow](https://stackoverflow.com/)
-   [W3 Schools](https://www.w3schools.com/)
-   [Github - othneildrew](https://github.com/othneildrew/Best-README-Template)




<p align="right">(<a href="#top">back to top</a>)</p>
