# Website chúc 20/10 — A Little Note

Website tĩnh viết bằng **HTML, CSS và JavaScript thuần**, không cần framework hoặc cài thư viện.

## Chạy trên máy tính

1. Giải nén `20-10-gift.zip`.
2. Mở thư mục `20-10-gift` bằng VS Code.
3. Mở file `index.html` trong trình duyệt. Bạn cũng có thể cài tiện ích Live Server trong VS Code rồi chọn **Open with Live Server**.
4. Để thử tính năng nhạc, thêm một file âm thanh bạn có quyền sử dụng vào thư mục `music/` và đặt tên `your-song.mp3`.

## Cá nhân hóa

### 1. Đổi tên người nhận và nội dung thư
Mở `script.js`, tìm phần `CONFIG` ở đầu file:

- `recipientName`: tên gọi muốn hiển thị ở trang đầu.
- `letterText`: toàn bộ nội dung thư mẫu. Hãy thay bằng lời nhắn của bạn.

Ví dụ:
```js
const CONFIG = {
  recipientName: "Linh",
  letterText: `Chào Linh,

  Chúc cậu 20/10 thật vui vẻ...

  — Thịnh ♡`
};
```

### 2. Thay ảnh
Trong thư mục `images/`, thay `photo-1.svg`, `photo-2.svg`, `photo-3.svg` bằng ảnh của bạn nếu muốn dùng đúng tên file. Nếu dùng JPG/PNG, cập nhật thuộc tính `src` tương ứng trong `index.html`, ví dụ:
```html
<img src="images/anh-ky-niem-1.jpg" alt="Kỷ niệm của chúng mình">
```
Nên chọn ảnh ngang/dọc rõ nét và tối ưu kích thước trước khi đưa lên web. Chỉ dùng ảnh mà bạn có quyền chia sẻ và người trong ảnh đồng ý.

### 3. Thêm nhạc
Đặt file MP3 trong thư mục `music/` với tên `your-song.mp3`. Trình duyệt thường yêu cầu người dùng nhấn nút thì nhạc mới được phát; vì vậy nút **Bật nhạc** là có chủ ý.

Lưu ý bản quyền: nên dùng nhạc do bạn tự tạo, nhạc được cấp phép hoặc nhạc cho phép sử dụng theo điều khoản của chủ sở hữu.

## Đăng miễn phí bằng GitHub Pages

1. Đăng nhập GitHub và tạo repository mới, ví dụ `20-10-gift`.
2. Tải các file và thư mục trong thư mục dự án lên repository (đừng chỉ tải file ZIP).
3. Trong repository, vào **Settings → Pages**.
4. Ở phần **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, thư mục `/(root)`, sau đó nhấn **Save**.
6. Chờ GitHub hoàn tất triển khai. Link thường có dạng:
   `https://TEN-GITHUB.github.io/20-10-gift/`
7. Mở link trên điện thoại để kiểm tra. Nếu chưa cập nhật, đợi một chút rồi tải lại trang.

### Lưu ý
- Nếu đặt website trong repository có tên `TEN-GITHUB.github.io`, URL sẽ khác và thường là `https://TEN-GITHUB.github.io/`.
- GitHub Pages là website công khai. Đừng đăng thông tin riêng tư, địa chỉ, số điện thoại hoặc ảnh mà người ấy không muốn chia sẻ.
- Nhạc và ảnh phải nằm trong repository đúng đường dẫn, chữ hoa/chữ thường cũng phải khớp.
- Không cần backend hoặc cơ sở dữ liệu cho website này.


## Chế độ bí ẩn — bó hoa mở đầu

- Màn hình đầu tiên là bó hoa với khung ảnh ở giữa.
- Đặt ảnh cô ấy ở `images/her-photo.jpg`; chạm ảnh để phóng to.
- Nhấn giữ bó hoa khoảng 1,2 giây để bung trái tim, cánh hoa, ánh sáng và pháo hoa.
- Chọn **Điều bí mật đầu tiên** để vào website.
- Mở phong bì để mở khóa album; nhấn **Gửi một điều ước** để mở khóa phần kết.
- Nút pháo hoa cuối trang đã được tăng độ rõ và dùng hiệu ứng particle nổi bật hơn.

## Trải nghiệm theo từng giai đoạn

Website được thiết kế theo luồng khám phá tuần tự, không cần cuộn qua toàn bộ nội dung:
1. Nhấn giữ bó hoa để mở món quà.
2. Đọc lời mở đầu rồi bấm **Mở bí mật tiếp theo**.
3. Mở phong bì và đọc lá thư; sau đó chọn **Tiếp tục khám phá**.
4. Mở ít nhất một khung ảnh trong album để hiện nút sang phần điều ước.
5. Gửi điều ước để mở nút dẫn đến màn kết thúc và pháo hoa.

Thanh tiến trình ở phía trên cho biết đang ở giai đoạn nào. Mỗi lần chuyển giai đoạn, nội dung cũ được ẩn đi để tập trung vào một trải nghiệm tại một thời điểm.
