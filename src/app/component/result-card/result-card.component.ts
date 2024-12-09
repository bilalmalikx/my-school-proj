import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Result, ResultState } from '../../models/results.model';
import { updateResult } from '../../actions/result.actions';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  results$: Observable<Result[]>;

  constructor(private store: Store<{ resultState: ResultState }>) {
    this.results$ = store.select('resultState', 'results');
  }

  ngOnInit() {}

  editResult(result: Result) {
    const updatedScore = prompt(
      `Update score for ${result.username}`,
      `${result.score}`
    );
    if (updatedScore) {
      this.store.dispatch(updateResult({ updatedResult: { ...result, score: parseInt(updatedScore) } }));
    }
  }
}
