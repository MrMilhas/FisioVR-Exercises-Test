function startExercise(id, name, reps, concentric, eccentric) {
    blocker.style.display = 'block';
    exercise_id = id;

    let exercicio = {
      name,
      sets: 3,
      leftReps: reps,
      rightReps: reps,
      rest: 3,
      concentric,
      eccentric,
      margin: 10
    }

    open(`https://avrgroup.github.io/FisioVR/?exe=${JSON.stringify(exercicio)}`);
}