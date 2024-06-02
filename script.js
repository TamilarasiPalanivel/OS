document.getElementById('bankers-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/calculate', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('output').innerText = data;
    })
    .catch(error => console.error('Error:', error));
  });
  