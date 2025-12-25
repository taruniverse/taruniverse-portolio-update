import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Header } from '../common/header/header';
import { Footer } from '../common/footer/footer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, Footer, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
