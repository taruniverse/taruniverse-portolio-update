import { Component } from '@angular/core';
import { Header } from '../common/header/header';
import { Footer } from '../common/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Footer, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
