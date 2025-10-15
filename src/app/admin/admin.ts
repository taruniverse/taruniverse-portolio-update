import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHeader } from '../common/admin-header/admin-header';
import { Footer } from '../common/footer/footer';

@Component({
  selector: 'app-admin',
  imports: [AdminHeader, Footer, RouterModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {}
