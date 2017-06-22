How to run:
- Verify that you are running at least node 6.9.x and npm 3.x.x
- npm install -g @angular/cli
- cd USHolidayAppCLI
- ng serve --open


Finally figure out a solution to include "Angular Material UI":  start a new app using Angular CLI and problem solved.<br />

"list" and "button" features from Angular Material UI are used:<br />
import {MdButtonModule} from '@angular/material';<br />
import {MdListModule} from '@angular/material';<br />

Should meet all requirments this time.<br /><br />




Requirement:  <br />
Build a 2-route Single Page Application using the following technologies and API. The homepage should display a list of all 2015 USA Holidays as links. When you click on any Holiday link it will change routes to a new view with the details about that Holiday. All information should come from the Holiday API and not be hard-coded.
 <br />
Use AngularJS 2 https://angular.io/ <br />
Use TypeScript<br />
Use Angular Material UI https://material.angular.io/ <br />
Consume USA Holidays API https://holidayapi.com/<br /> 