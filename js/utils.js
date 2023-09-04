export function getRandomNumber({ min = 0, max = 1 }) {
  const result = Math.round(Math.random() * (max - min));
  return result <= min ? result + min : result;
}

export function timer({ durationMs, callback, onComplete, intervalMs = 100 }) {
  let totalMs = 0;

  const interval = setInterval(() => {
    totalMs += intervalMs;
    callback?.();
    if (totalMs >= durationMs) {
      onComplete?.();
      clearInterval(interval);
    }
  }, intervalMs);
}
