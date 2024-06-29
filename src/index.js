import generateQuote from '../src/generatequote';
// import '../src/styles/main.scss';
import '../src/styles/style.css';
import quote from  '../src/assets/quote.png';

const quoteImg = document.getElementById('quoteImg');
quoteImg.src = quote;

const quoteBtn = document.getElementById('btn-quote').addEventListener('click', generateQuote)

generateQuote();