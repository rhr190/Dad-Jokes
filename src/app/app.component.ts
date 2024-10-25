import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokesService } from './Services/jokes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  joke: string = 'dad';
  title = 'dad-jokes';
  private jokeService = inject(JokesService);
  constructor () {}
  fetchJoke(): void {
    this.jokeService.getJoke().subscribe( (data: any) => {
      this.joke = data.joke;
    })
  }
}
