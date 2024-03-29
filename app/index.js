import express from 'express';

export async function startServer() {
  const app = express();
  app.use(express.json());
  app.get('/health', (req, res) => {
    res.send('Hello World!');
  });
  let interval;
  try {
    interval = setInterval(async () => {
      const hashtag = await fetch('https://hashtag-pklr.onrender.com/health');
      // const hashtagRes = await hashtag.json();

      const devlinks = await fetch(
        'https://devlinks-server-psi.vercel.app/health'
      );
      const devlinksRes = await devlinks.json();

        const check2 = await fetch('https://check2-ay6p.onrender.com/health');
      // const hashtagRes = await hashtag.json();

      console.log('hashtag', hashtag.statusText);
      console.log('devlink', devlinksRes);
      // console.log('check2', check2.statusText);
    }, 1000 * 60 * 5);
  } catch (error) {
    console.log(error);
    clearInterval(interval);
  }

  return app;
}
