document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if(!name || !email){
    alert('Vui lòng điền tên và email.');
    return;
  }
  // Thay chỗ này bằng gọi API thực tế nếu cần
  console.log('Lead submitted', {name, email});
  this.querySelector('button').textContent = 'Đã gửi ✓';
  this.reset();
});
