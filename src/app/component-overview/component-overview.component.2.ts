import { Component } from '@angular/core';

@Component({
  selector: 'app-component-overview',
  template: `<h1>Hello World!</h1>
             <p>This template definition spans
              multiple lines.</p>`
})

export class ComponentOverviewComponent {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

function warnUser(): void {
  console.log("This is my warning message");
}