
const ALERT_TIME = 10000;

const showMapError = (message) => {
  const alert = document.createElement('div');
  alert.style.zIndex = '200';
  alert.style.position = 'fixed';
  alert.style.left = '0';
  alert.style.bottom = '0';
  alert.style.fontSize = '20px';
  alert.style.backgroundColor = 'black';
  alert.style.color = 'white';
  alert.style.textAlign = 'center';
  alert.style.padding = '15px 15px';
  alert.textContent = message;

  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_TIME);
};

export {
  showMapError
};
