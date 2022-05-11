const times = process.argv.slice(2);

for (let t of times) {
  if ((typeof Number(t) === 'number') && Number(t) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('beep!');
    }, Math.floor(Number(t)*1000));
  }
}