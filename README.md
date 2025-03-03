# FullstackToDoList

## Mô tả

FullstackToDoList là một ứng dụng full-stack được xây dựng bằng JavaScript. Phía client được xây dựng bằng React và sử dụng Vite làm công cụ build, phía server được triển khai bằng Node.js với Express và GraphQL.

## Tính năng

- Quản lý công việc với khả năng tạo, cập nhật và xóa công việc.
- Cập nhật theo thời gian thực sử dụng WebSockets.
- Trình soạn thảo văn bản phong phú cho mô tả công việc.
- Tích hợp Firebase cho xác thực và lưu trữ dữ liệu.

## Cấu trúc dự án

- `client`: Chứa mã nguồn phía front-end.
- `server`: Chứa mã nguồn phía back-end.

## Cài đặt

### Yêu cầu

- Node.js
- npm hoặc yarn

### Các bước

1. Clone repository:
   ```bash
   git clone https://github.com/HoTien2004/FullstackToDoList.git
   cd FullstackToDoList
   ```

2. Cài đặt các dependencies cho client:
   ```bash
   cd client
   npm install
   ```

3. Cài đặt các dependencies cho server:
   ```bash
   cd ../server
   npm install
   ```

## Chạy dự án (Môi trường dev)
1. Khởi động client:
   ```bash
   cd client
   npm run dev
   ```

2. Khởi động server:
   ```bash
   cd ../server
   npm run server
   ```

3. Mở trình duyệt và truy cập `http://localhost:3000`.


## Link deploy

   ```bash
   https://note-app-tienho.netlify.app
   ```
