import { getRandomNumber, timer } from "./utils.js";

function getSocialMediaElement(name) {
  return document.querySelector(`[data-social=${name}] > .social-media-value`);
}

const twitterEl = getSocialMediaElement("twitter");
const facebookEl = getSocialMediaElement("facebook");
const youtubeEl = getSocialMediaElement("youtube");

const target = {
  twitter: getRandomNumber({ min: 8000, max: 10000 }),
  facebook: getRandomNumber({ min: 5000, max: 10000 }),
  youtube: getRandomNumber({ min: 1000, max: 10000 }),
};

let timerPercentage = 0;

timer({
  durationMs: 3000,
  intervalMs: 3000 / 100,
  callback() {
    const multiplier = ++timerPercentage / 100;
    twitterEl.textContent = Math.round(target.twitter * multiplier);
    facebookEl.textContent = Math.round(target.facebook * multiplier);
    youtubeEl.textContent = Math.round(target.youtube * multiplier);
  },
});
