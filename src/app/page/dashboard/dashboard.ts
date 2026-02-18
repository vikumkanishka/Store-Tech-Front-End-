import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
