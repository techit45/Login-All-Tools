# การตั้งค่า N8N Workflow สำหรับอัปโหลดรูปภาพไป Google Drive

## ไฟล์ที่สร้าง
- `payment-slip-system.html` - หน้าเว็บสำหรับอัปโหลดสลิป
- `n8n-workflow-upload-to-drive.json` - N8N workflow configuration

## วิธีการตั้งค่า

### 1. Import Workflow ใน N8N
1. เปิด N8N interface
2. ไปที่ Workflows → Import from File
3. เลือกไฟล์ `n8n-workflow-upload-to-drive.json`

### 2. ตั้งค่า Google Drive API
1. ไปที่ Google Cloud Console
2. สร้าง Project ใหม่หรือเลือก Project ที่มีอยู่
3. เปิดใช้งาน Google Drive API
4. สร้าง Service Account หรือ OAuth2 credentials
5. ใน N8N ไปที่ Credentials → Add Credential → Google Drive API
6. ใส่ข้อมูล API credentials

### 3. แก้ไข Folder ID
1. เปิด Google Drive
2. สร้างโฟลเดอร์สำหรับเก็บสลิป
3. คัดลอก ID จาก URL (เช่น: `https://drive.google.com/drive/folders/1234567890abcdef`)
4. ใน N8N แก้ไขใน node "Upload to Google Drive"
5. เปลี่ยน `parents.value` จาก `"1234567890abcdef"` เป็น Folder ID ที่ได้

### 4. เปิดใช้งาน Webhook
1. ใน N8N เปิด node "Webhook Trigger"
2. คัดลอก URL (จะเป็น `http://localhost:5678/webhook-test/payment-process`)
3. ตรวจสอบว่า URL ใน HTML ตรงกัน (บรรทัดที่ 965)

### 5. ทดสอบระบบ
1. เปิดไฟล์ `payment-slip-system.html` ในเบราเซอร์
2. อัปโหลดรูปภาพทดสอบ
3. ใส่รายละเอียด
4. กดส่งข้อมูล
5. ตรวจสอบใน Google Drive ว่าไฟล์ถูกอัปโหลดแล้ว

## หมายเหตุ
- ระบบรองรับไฟล์ JPG, PNG, PDF ขนาดสูงสุด 10MB
- สามารถอัปโหลดหลายไฟล์พร้อมกันได้
- ระบบจะส่งชื่อไฟล์, ขนาด, และรายละเอียดไปยัง Google Drive