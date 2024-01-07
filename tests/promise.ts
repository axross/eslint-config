function wait(duration: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function doesntWait(duration: number): void {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises, no-new
  new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { wait, doesntWait };
