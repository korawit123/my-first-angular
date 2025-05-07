import { Component } from '@angular/core';
import { headerComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [headerComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  users = DUMMY_USERS;
  SelectedUserId? : string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.SelectedUserId);
  }

  onSelectUser(id: string) {
    this.SelectedUserId = id;
  }

}
