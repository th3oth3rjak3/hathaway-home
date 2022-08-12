import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (this.darkMode){
      this.enableDarkMode();
    }
  }

  toggleTheme() : void {
    if (this.darkMode){
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  saveTheme(theme: string) : void {
    window.localStorage.setItem("hathaway-home-theme", theme);
  }

  getTheme() : string {
    let theme = window.localStorage.getItem("hathaway-home-theme");
    if (!theme){
      theme = "light";
    }
    return theme;
  }

  enableDarkMode() : void {
    this.saveTheme("dark");
    document.body.classList.add("dark-theme");
  }

  disableDarkMode() : void {
    this.saveTheme("light");
    document.body.classList.remove("dark-theme");
  }

  get darkMode() : boolean {
    return (this.getTheme() === "dark");
  }

}
