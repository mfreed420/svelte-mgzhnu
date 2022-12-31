import App from './components/App.html';

const AppComponent = new App({
  target: document.querySelector('#root'),
  data: { name: 'svelte' }
});