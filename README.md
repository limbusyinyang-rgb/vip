# Landing Page

Tệp này chứa landing page tĩnh.

Mở thử bằng một trong các cách sau:

PowerShell / CMD:
```powershell
cd 'D:\mainn'
python -m http.server 8000
```

Mở trình duyệt: http://localhost:8000/

Hoặc mở trực tiếp file `index.html` bằng trình duyệt.

Tùy chỉnh: sửa `index.html`, `styles.css`, `script.js` theo nhu cầu.

Video background
 - Đặt file video MP4 tại `assets/bg.mp4` cạnh `index.html` (tạo thư mục `assets`).
 - Trang sẽ cố dùng `assets/bg.mp4`; nếu không có, nó fallback sang một video demo công khai.
 - Thêm `assets/bg-poster.jpg` nếu muốn ảnh tĩnh khi video không load.

Lưu ý: để autoplay trên nhiều thiết bị di động, video phải `muted` (đã được đặt trong HTML).